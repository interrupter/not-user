const crypto = require('crypto'),
	notError = require('not-error'),
	notLocale = require('not-locale'),
	generator = require('generate-password');

const DEFAULT_TTL = 3; //in minutes
const DEFAULT_TTL_MIN = 1; //in minutes
const DEFAULT_TTL_MAX = 60; //in minutes
exports.DEFAULT_TTL  = DEFAULT_TTL;
exports.DEFAULT_TTL_MIN  = DEFAULT_TTL_MIN;
exports.DEFAULT_TTL_MAX  = DEFAULT_TTL_MAX;
exports.DEFAULT_ROLES_LIST = ['user', 'guest', 'client', 'admin', 'root', 'confirmed'];
exports.DEFAULT_HASH_ALGO = 'sha1';
exports.thisModelName = 'User';
exports.keepNotExtended = false;

exports.enrich = {
	versioning: true,
	increment: false,
	validators: true
};

exports.thisSchema = {
	username:{
		type: String,
		unique: true,
		searchable: true,
		required: true,
		validate: [
			{
				validator: 'isLength',
				arguments: [3, 60],
				message: 'username_length_is_not_valid'
			}
		]
	},
	email: {
		type: String,
		unique: true,
		searchable: true,
		required: true,
		validate: [
			{
				validator: 'isEmail',
				message: 'email_is_not_valid'
			}
		]
	},
	emailConfirmed: {
		type: Boolean,
		searchable: true,
		required: true,
		default: false,
		validate: [
			{
				validator(val){
					return (val === true) || (val === false);
				},
				message: 'active_state_value_is_not_valid'
			}
		]
	},
	//хэш пароля
	hashedPassword: {
		type: String,
		required: true,
		validate: [
			{
				validator: 'isHash',
				arguments: [exports.DEFAULT_HASH_ALGO],
				message: 'hashedPassword_is_not_valid'
			}
		]
	},
	//соль для хэширования
	salt: {
		type: String,
		required: true
	},
	//дата создания
	created: {
		type: Date,
		default: Date.now
	},
	role: {
		type: [String],
		required: true,
		searchable: true,
		default: ['user'],
		validate: [
			{
				validator(val){
					//eslint-disable-next-line no-console
					console.log('user roles', val);
					if(val.length === 0){
						return false;
					}
					let all = true;
					val.forEach((role)=>{
						if (!exports.DEFAULT_ROLES_LIST.includes(role)){
							all = false;
						}
					});
					return all;
				},
				message: 'user_role_is_not_valid'
			}
		]
	},
	//статус пользователя, активен или нет
	active: {
		type: Boolean,
		required: true,
		searchable: true,
		default: true,
		validate: [
			{
				validator(val){
					return (val === true) || (val === false);
				},
				message: 'active_state_value_is_not_valid'
			}
		]
	},
	ip: {
		type: String,
		required: false,
		validate: [
			{
				validator: 'isIP',
				message: 'ip_address_is_not_valid'
			}
		]
	},
	country:{
		type: String,
		required: false,
		searchable: true,
		default: 'ru',
		validate: [
			{
				validator(val){
					return val === 'ru';
				},
				message: 'selected_user_language_is_not_valid'
			}
		]
	}
};

exports.thisStatics = {
	authorize: function(email, password) {
		return new Promise((resolve, reject)=>{
			this.findOne({
				email: email
			}).exec()
				.then((user)=>{
					if (user){
						if (user.checkPassword(password)) {
							resolve(user);
						} else {
							reject(new notError(notLocale.say('password_incorrect')));
						}
					}else{
						reject(new notError(notLocale.say('user_not_found')));
					}
				})
				.catch((err)=>{
					let error = (new notError(notLocale.say('user_not_found')));
					reject(error.adopt(err));
				});
		});
	},
	toggleActive: function (id) {
		return new Promise((resolve, reject)=>{
			this.findById(id)
				.then((user)=>{
					if (user) {
						user.active = !user.active;
						user.save()
							.then(resolve)
							.catch(reject);
					}else{
						reject(new notError(notLocale.say('user_not_found')));
					}
				})
				.catch((err)=>{
					reject(new notError(notLocale.say('user_not_found')).adopt(err));
				});
		});
	},
	clearFromUnsafe: function (user) {
		var unsafeList = ['hashedPassword', 'salt'];
		for (let i of unsafeList) {
			delete user[i];
		}
		return user;
	},
	fieldValueExists: function(key, val){
		return this.findOne({[key]: val	}).exec()
			.then((user)=>{
				return !!user;
			});
	},
	usernameExists: function (username) {
		return this.fieldValueExists('username', username);
	},
	emailExists: function (email) {
		return this.fieldValueExists('email', email);
	},
	getByFieldValue: function(key, val){
		return this.findOne({[key]: val	}).exec();
	},
	getByUsername: function (username) {
		return this.getByFieldValue('username', username);
	},
	getByEmail: function (email) {
		return this.getByFieldValue('email', email);
	}
};


exports.thisVirtuals = {
	'imageFile': {
		ref: 'File',
		localField: 'image',
		foreignField: 'hash',
		justOne: true
	},
	'password':{
		'set': function (password) {
			this._plainPassword = password;
			this.salt = Math.random() + '';
			this.hashedPassword = this.encryptPassword(password);
		},
		'get': function () {
			return this._plainPassword;
		}
	}
};

exports.thisMethods = {
	encryptPassword (password) {
		return crypto.createHmac(exports.DEFAULT_HASH_ALGO, this.salt).update(password).digest('hex');
	},
	createNewPassword(){
		let pass = generator.generate({
			length: 12,
			uppercase: true,
			numbers: true
		});
		this.password = pass;
		return pass;
	},
	checkPassword(password) {
		if(typeof password === 'string'){
			return this.encryptPassword(password) === this.hashedPassword;
		}else{
			return false;
		}
	},
	registerAs(role) {
		if (this.role.indexOf(role) == -1) {
			this.role.push(role);
		}
		this.save();
		return this;
	},
	deregisterAs (role) {
		if (this.role.indexOf(role) > -1) {
			this.role.splice(this.role.indexOf(role), 1);
		}
		this.save();
		return this;
	},
	isRole(role){
		return this.role.indexOf(role) > -1;
	},
	isRoot(){
		return this.isRole('root');
	},
	isAdmin(){
		return this.isRole('admin');
	},
	isClient(){
		return this.isRole('client');
	},
	isUser(){
		return this.isRole('user');
	},
	confirmEmail() {
		this.emailConfirmed = true;
		this.confirm = '';
		this.registerAs('confirmed');
		return this;
	}
};
