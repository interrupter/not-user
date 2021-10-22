const
	phrase = require('not-locale').modulePhrase('not-user'),
	crypto = require('crypto'),
	{
		notError
	} = require('not-error'),
	Auth = require('not-node').Auth,
	generator = require('generate-password'),
	Schema = require('mongoose').Schema,
	validator = require('validator');

const DEFAULT_TTL = 3; //in minutes
const DEFAULT_TTL_MIN = 1; //in minutes
const DEFAULT_TTL_MAX = 60; //in minutes

exports.DEFAULT_TTL = DEFAULT_TTL;
exports.DEFAULT_TTL_MIN = DEFAULT_TTL_MIN;
exports.DEFAULT_TTL_MAX = DEFAULT_TTL_MAX;

//stronger -> weaker
const DEFAULT_ROLES_LIST = ['root', 'admin', 'client', 'user', 'guest'];
exports.DEFAULT_ROLES_LIST = DEFAULT_ROLES_LIST;
const EXTRA_ROLES_LIST = ['confirmed'];
exports.EXTRA_ROLES_LIST = EXTRA_ROLES_LIST;

exports.DEFAULT_HASH_ALGO = 'sha256';
exports.thisModelName = 'User';
exports.keepNotExtended = false;

exports.enrich = {
	versioning: true,
	increment: true,
	validators: true
};

exports.thisSchema = {
	username: {
		type: String,
		unique: true,
		searchable: true,
		required: true,
		validate: [{
			validator: 'isLength',
			arguments: [3, 60],
			message: 'username_length_is_not_valid'
		}, {
			validator(val) {
				return !validator.isEmail(val);
			},
			message: 'username_cant_be_email'
		}],
		safe: {
			read: ['*']
		}
	},
	email: {
		type: String,
		unique: true,
		searchable: true,
		required: true,
		validate: [{
			validator: 'isEmail',
			message: 'email_is_not_valid'
		}],
		safe: {
			update: ['@owner', 'root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	},
	emailConfirmed: {
		type: Boolean,
		searchable: true,
		required: true,
		default: false,
		validate: [{
			validator(val) {
				return (val === true) || (val === false);
			},
			message: 'active_state_value_is_not_valid'
		}],
		safe: {
			update: ['@owner', 'root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	},
	telephone: {
		type: String,
		unique: false,
		searchable: true,
		required: false,
		validate: [{
			validator(val) {
				return validator.isMobilePhone(val.replace(/\D/g, ''));
			},
			message: 'telephone_value_is_not_valid'
		}],
		safe: {
			update: ['@owner', 'root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	},
	telephoneConfirmed: {
		type: Boolean,
		searchable: true,
		required: true,
		default: false,
		validate: [{
			validator(val) {
				return (val === true) || (val === false);
			},
			message: 'active_state_value_is_not_valid'
		}],
		safe: {
			update: ['@owner', 'root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	},
	//хэш пароля
	hashedPassword: {
		type: String,
		required: true,
		validate: [{
			validator: 'isHash',
			arguments: [exports.DEFAULT_HASH_ALGO],
			message: 'hashedPassword_is_not_valid'
		}]
	},
	//соль для хэширования
	salt: {
		type: String,
		required: true
	},
	//дата создания
	created: {
		type: Date,
		default: Date.now,
		safe: {
			update: ['*'],
			read: ['*']
		}
	},
	role: {
		type: [String],
		required: true,
		searchable: true,
		default: ['user'],
		validate: [{
			validator(val) {
				if (val.length === 0) {
					return false;
				}
				if (val.length > 6) {
					return false;
				}
				let count = 0;
				let extraIsInvalid = false;
				val.forEach((role) => {
					if (exports.DEFAULT_ROLES_LIST.includes(role)) {
						count++;
					}else if(! exports.EXTRA_ROLES_LIST.includes(role)){
						extraIsInvalid = true;
					}
				});
				if (count !== 1) {
					return false;
				}
				if(extraIsInvalid){
					return false;
				}
				return true;
			},
			message: 'user_role_is_not_valid'
		}],
		safe: {
			update: ['root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	},
	//статус пользователя, активен или нет
	active: {
		type: Boolean,
		required: true,
		searchable: true,
		default: true,
		validate: [{
			validator(val) {
				return (val === true) || (val === false);
			},
			message: 'active_state_value_is_not_valid'
		}],
		safe: {
			update: ['@system', 'root', 'admin'],
			read: ['@owner', 'root', 'admin']
		}
	},
	ip: {
		type: String,
		required: false,
		validate: [{
			validator: 'isIP',
			message: 'ip_address_is_not_valid'
		}],
		safe: {
			update: ['@system'],
			read: ['@owner', 'root', 'admin']
		}
	},
	country: {
		type: String,
		required: false,
		searchable: true,
		default: 'ru',
		validate: [{
			validator(val) {
				return val === 'ru';
			},
			message: 'selected_user_language_is_not_valid'
		}],
		safe: {
			update: ['@system', '@owner', 'root', 'admin'],
			read: ['*']
		}
	},
	confirm: {
		type: Schema.Types.Mixed,
		required: false,
		searchable: true,
		safe: {
			update: ['@system', 'root', 'admin']
		}
	}
};


exports.indexes = [
	[{__latest: 1, __closed: 1, username:1 }, { unique: true }],
	[{__latest: 1, __closed: 1, email:1 }, { unique: true }]
];

exports.thisStatics = {
	DEFAULT_ROLES_LIST,
	randomPassword: function(){
		return generator.generate({
			length: 12,
			uppercase: true,
			numbers: true
		});
	},
	authorize: async function(email, password) {
		try{
			let val = validator.isEmail(email);
			if(!val){
				throw new notError(phrase('email_not_valid'), {email});
			}
		}catch(e){
			if(e instanceof notError){
				throw e;
			}else{
				throw new notError(phrase('email_not_valid'), {email}, e);
			}
		}
		let user = await this.findOne(
			{
				email: email
			}).exec();
		if (user) {
			if (user.checkPassword(password)) {
				return user;
			} else {
				throw new notError(phrase('password_incorrect'));
			}
		} else {
			throw new notError(phrase('user_not_found'));
		}
	},
	toggleActive: function(id) {
		return new Promise((resolve, reject) => {
			this.findById(id)
				.then((user) => {
					if (user) {
						user.active = !user.active;
						user.save()
							.then(resolve)
							.catch(reject);
					} else {
						reject(new notError(phrase('user_not_found')));
					}
				})
				.catch((err) => {
					reject(new notError(phrase('user_not_found')).adopt(err));
				});
		});
	},
	clearFromUnsafe: function(data) {
		var unsafeList = ['hashedPassword', 'salt'];
		for (let i of unsafeList) {
			delete data[i];
		}
		return data;
	},
	fieldValueExists: function(key, val) {
		return this.findOne({
			[key]: val
		}).exec()
			.then((user) => {
				return !!user;
			});
	},
	usernameExists: function(username) {
		return this.fieldValueExists('username', username);
	},
	emailExists: function(email) {
		return this.fieldValueExists('email', email);
	},
	getByFieldValue: function(key, val) {
		return this.findOne({
			[key]: val
		}).exec();
	},
	getByUsername: function(username) {
		return this.getByFieldValue('username', username);
	},
	getByEmail: function(email) {
		return this.getByFieldValue('email', email);
	},
	getByTelephone: function(telephone) {
		return this.getByFieldValue('telephone', telephone);
	},
	isUnique: async function(username, email) {
		try{
			let results = await Promise.all([this.usernameExists(username), this.emailExists(email)]);
			if(((!results[0]) && (!results[1]))){
				return true;
			}else{
				const errors = {};
				if(results[0]){
					errors.username = phrase('username_taken');
				}
				if(results[1]){
					errors.email = phrase('email_taken');
				}
				return errors;
			}
		}catch(e){
			throw new notError(
				phrase('user_uniqueness_verification_error'),
				{
					username,
					email
				},
				e
			);
		}
	},
	Update(data, roles, actorId, system = false) {
		if (!Object.prototype.hasOwnProperty.call(data, '_id')) {
			throw new Error('No data _id');
		}
		let safeData = this.extractSafeFields('update', data, roles, actorId, system);
		//может быть пусто, тогда не тратим время
		if(Object.keys(safeData).length === 0) throw new notError(phrase('insufficient_level_of_privilegies'));
		if (exports.enrich.versioning) {
			return this.findOneAndUpdate(
				{
					_id: data._id,
					__latest: true
				},
				safeData,
				{new: true}
			).exec()
				.then(async(item) => {
					if (typeof item !== 'undefined' && item !== null) {
						await this.saveVersion(item._id);
						return item;
					} else {
						throw new notError('-version not saved, empty response', { _id: data._id, safeData });
					}
				});
		} else {
			return this.findOneAndUpdate({
				_id: data._id
			}, safeData, {
				new: true
			}).exec();
		}
	},
	extractSafeFields(action, data, roles, actorId, system = false) {
		let fields = this.getSafeFieldsForRoleAction(action, roles, this.isOwner(data, actorId), system);
		let result = {};
		fields.forEach((field) => {
			if (Object.prototype.hasOwnProperty.call(data, field)) {
				result[field] = data[field];
			}
		});
		return result;
	},
	getSafeFieldsForRoleAction(action, roles, owner, system) {
		let fields = [];
		let special = [];
		if (owner) {
			special.push('@owner');
		}
		if (system) {
			special.push('@system');
		}
		for (let t in exports.thisSchema) {
			let field = exports.thisSchema[t];
			if (Object.prototype.hasOwnProperty.call(field, 'safe')) {
				if (Object.prototype.hasOwnProperty.call(field.safe, action)) {
					if (field.safe[action] === '*') {
						fields.push(t);
					} else if (Array.isArray(field.safe[action])) {
						if ( //если роли пользователя в списке
							Auth.intersect_safe(roles, field.safe[action]) ||
              //или он в спец группе (владелец, система)
              Auth.intersect_safe(special, field.safe[action])
						) {
							fields.push(t);
						}
					}
				}
			}
		}
		return fields;
	},
	isOwner(data, user_id) {
		if(typeof user_id === 'undefined' || user_id === 0){
			return false;
		}
		return (Object.prototype.hasOwnProperty.call(data, '_id') && data._id.toString() === user_id.toString());
	},
	validatePassword(password){
		return (typeof password === 'string') && (validator.isLength(password, {
			min: 6,
			max: 100
		}));
	},
	validateEmail(email){
		return (typeof email === 'string') && (validator.isEmail(email));
	}
};

exports.thisVirtuals = {
	'imageFile': {
		ref: 'File',
		localField: 'image',
		foreignField: 'hash',
		justOne: true
	},
	'password': {
		'set': function(password) {
			this._plainPassword = password;
			this.salt = Math.random() + '';
			this.hashedPassword = this.encryptPassword(password);
		},
		'get': function() {
			return this._plainPassword;
		}
	}
};

exports.thisMethods = {
	encryptPassword(password) {
		return crypto.createHmac(exports.DEFAULT_HASH_ALGO, this.salt).update(password).digest('hex');
	},
	createNewPassword() {
		let pass = exports[exports.thisModelName].randomPassword();
		this.password = pass;
		return pass;
	},
	checkPassword(password) {
		if (typeof password === 'string') {
			return this.encryptPassword(password) === this.hashedPassword;
		} else {
			return false;
		}
	},
	registerAs(role) {
		if (this.role.indexOf(role) == -1) {
			this.role.push(role);
		}
		return this;
	},
	deregisterAs(role) {
		if (this.role.indexOf(role) > -1) {
			this.role.splice(this.role.indexOf(role), 1);
		}
		return this;
	},
	isRole(role) {
		return this.role.indexOf(role) > -1;
	},
	isRoot() {
		return this.isRole('root');
	},
	isAdmin() {
		return this.isRole('admin');
	},
	isClient() {
		return this.isRole('client');
	},
	isUser() {
		return this.isRole('user');
	},
	getPrimaryRole(roles = DEFAULT_ROLES_LIST){
		let res = this.role.find((itm) => {
			return roles.includes(itm);
		});
		return res;
	},
	confirmEmail() {
		this.emailConfirmed = true;
		this.confirm = '';
		this.registerAs('confirmed');
		return this;
	},
	confirmTelephone() {
		this.telephoneConfirmed = true;
		this.confirm = '';
		this.registerAs('confirmed');
		return this;
	},
	Update(roles, actorId, system = false) {
		return exports[exports.thisModelName].Update(this.toObject(), roles, actorId, system);
	},
	isOwner(user_id) {
		return exports[exports.thisModelName].isOwner(this.toObject(), user_id);
	}
};

exports.thisPre = {
	'updateOne': async()=>{
	//	console.debug('user model pre updateOne');

	},
	'insert': async()=>{
		//console.log('user model pre insert');

	},
	'save': async()=>{
		//console.log('user model pre save');
	},
	'update': async()=>{
		//console.log('user model pre update' );

	},
};

exports.thisPost = {
	'save': async()=>{
		//console.log('user model post save');
	},
	'update': async()=>{
		//console.log('user model post update');
	},
};
