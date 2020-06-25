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
			case 'active':
				if((value !== false) && (value !== true)){
					errors.push('Необходимо ввести действительное значение автивности записи');
				}
			break;
			case 'role':
				if(!Array.isArray(value)){
					errors.push('Необходимо указать список ролей');
					break;
				}
				if(!((value.length>=1) && (value.length<=6))){
					errors.push('Необходимо добавить хотя бы одну роль (6 max)');
				}
				let baseRolesCount = 0;
				value.forEach((role) => {
					if(['admin', 'client', 'user', 'root'].indexOf(role) > -1 ){
						baseRolesCount++;
					}
				});
				if(baseRolesCount !== 1){
					errors.push('Необходимо указать ровно одну базовую (admin, client, user) роль');
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
	static ROLES = [{
		id: 1,
		title: 'root',
		type: 'danger'
	},{
		id: 2,
		title: 'admin',
		type: 'warning'
	},{
		id: 3,
		title: 'client',
		type: 'success'
	},{
		id: 4,
		title: 'user',
		type: 'info'
	},{
		id: 5,
		title: 'manager',
		type: 'primary'
	},{
		id: 6,
		title: 'logist',
		type: 'primary'
	},{
		id: 7,
		title: 'hr',
		type: 'primary'
	}]
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
		active:{
			label: 'Активна',
			placeholder: '',
		},
		role:{
			label: 'Роли в системе',
			placeholder: '',
		},
		country:{
			label: 'Основной язык',
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
	static COUNTRIES = [
		{
			id: 		'ru',
			title: 	'Россия'
		}
	];
};
