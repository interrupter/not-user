import validator from 'validator';

export default class UserCommon{
	static DEFAULT_USER_AFTER_LOGIN_URL = '/dashboard';
	static DEFAULT_REDIRECT_TIMEOUT = 5000;
	static CLASS_OK = 'is-success';
	static CLASS_ERR = 'is-danger';
  static getUserAfterLoginRedirectURL(app){
    return app.getOptions('modules.user.afterLoginURL', this.DEFAULT_USER_AFTER_LOGIN_URL);
  }
  static getRedirectTimeout(app){
    return app.getOptions('modules.user.redirectTimout', this.DEFAULT_REDIRECT_TIMEOUT);
  }
  static goDashboard(app) {
    document.location.assign(this.getUserAfterLoginRedirectURL(app));
  }
  static goLogin() {
    document.location.href = '/login';
  }
  static goRegister() {
    document.location.href = '/register';
  }
  static goRestore() {
    document.location.href = '/restore';
  }
  static goLogout() {
    document.location.href = '/logout';
  }
  static isError(e){
    return e instanceof Error;
  }
  static validateField(field, value, fields){
		let errors = [];
		switch(field){
			case 'username':
			 if (!validator.isLength(value, { min: 6})){
					errors.push('Минимальная длина 6 знаков');
			 }
			break;
			case 'email':
				if(!validator.isEmail(value)){
					errors.push('Необходимо ввести email адрес');
				}
			break;
			case 'tel':
				if(!validator.isLength(value, { min: 11})){
					errors.push('Необходимо ввести полный номер телефона из 11 цифр');
				}
			break;
			case 'password':
				if (!validator.isLength(value, { min: 6})){
					errors.push('Минимальный размер пароля 6 знаков');
				}
			break;
      case 'password2':
				if (!validator.isLength(value, { min: 6})){
					errors.push('Минимальный размер пароля 6 знаков');
				}
				if (fields.password.value !== value){
					errors.push('Пароли отличаются');
				}
			break;
			case 'code':
				if (!validator.isUUID(value, 4)){
					errors.push('Не верный формат кода');
				}
			break;
			default: return false;
		}
		let res = errors.length > 0 ? errors:true;
		fields[field].validated = true;
		fields[field].valid = res === true;
		fields=fields;
		return res;
	}
	static FIELDS = {
		username:{
			label: 'Логин',
			placeholder: 'Имя пользователя',
		},
		password:{
			label: 'Пароль',
			placeholder: 'Введите пароль',
			minLength: 8
		},
		password2:{
			label: 'Повторите пароль',
			placeholder: 'Введите пароль еще раз',
			minLength: 8
		},
		email:{
			label: 'Email',
			placeholder: 'Ваш email адрес',
		},
		tel:{
			label: 'Ваш номер телефона',
			placeholder: '',
		},
		code:{
			label: 'Код подтверждения',
			placeholder: 'Введите полученный код.',
		}
	}
	static fieldInit(type, mutation = {}){
		let field = {
			label: '',
			placeholder: '',
			enabled: true,
			value: '',
			required: true,
			validated: false,
			valid: false
		};
		if(Object.prototype.hasOwnProperty.call(this.FIELDS, type)){
			Object.assign(field, this.FIELDS[type]);
		}
		if(mutation){
			Object.assign(field, mutation);
		}
		return field;
	}
};
