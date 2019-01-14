const crypto = require('crypto'),
	notError = require('not-error'),
	notLocale = require('not-locale');

exports.thisModelName = 'User';
exports.keepNotExtended = false;

exports.enrich = {
	versioning: true,
	increment: false,
	validators: true
};

exports.thisSchema = {
	email: {
		type: String,
		unique: true,
		searchable: true,
		required: true
	},
	emailConfirmed: {
		type: Boolean,
		searchable: true,
		required: true,
		default: false
	},
	//хэш пароля
	hashedPassword: {
		type: String,
		required: true
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
		default: ['user']
	},
	//статус пользователя, активен или нет
	status: {
		type: Boolean,
		required: true,
		searchable: true,
		default: true
	},
	ip: {
		type: String,
		required: false,
		default: ''
	},
	confirm: {
		type: String,
		required: false,
		searchable: true,
		default: ''
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
	toggleStatus: function (id) {
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
	usernameExists: function (username) {
		return this.fieldValueExists('username', username);
	},
	emailExists: function (email) {
		return this.fieldValueExists('email', email);
	},
	fieldValueExists: function(key, val){
		return this.findOne({[key]: val	}).exec()
			.then((user)=>{
				return !!user;
			});
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
		return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
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
