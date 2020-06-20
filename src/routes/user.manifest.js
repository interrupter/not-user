module.exports = {
	model: 'user',
	url: '/api/:modelName',
	showMessages: true,
	fields: {
		fName: {
			type: 'text',
			placeholder: 'Фамилия'
		},
		iName: {
			type: 'text',
			placeholder: 'Имя'
		},
		oName: {
			type: 'text',
			placeholder: 'Отчество'
		},
		dateOfBirth: {
			type: 'date',
			placeholder: 'Дата рождения'
		},
		phone: {
			type: 'tel',
			placeholder: 'Телефон'
		},
		username: {
			type: 'text',
			placeholder: 'Имя пользователя'
		},
		email: {
			type: 'email',
			label: 'Email',
			placeholder: 'Email'
		},
		password: {
			type: 'password',
			name: 'Пароль',
			placeholder: 'Пароль'
		},
		password2: {
			type: 'password',
			placeholder: 'Подтверждение пароля'
		},
		photo: {
			type: 'file',
			placeholder: 'Фото'
		},
		status: {
			type: 'status',
			label: 'Статус'
		},
		submit: {
			type: 'submit',
			target: 'footer'
		},
	},
	actions:{
		/**
		Guest action
		**/
		register:{
			method: 'post',
			title: 'Регистрация',
			rules:[{
				auth: false
			}],
			fields: {
				default:  [
					'username',
					'email',
					'password',
					'submit'
				]
			},
			postFix: '/:actionName'
		},
		confirmEmail:{
			method: 'get',
			data: ['record'],
			rules:[{
				auth: false
			},
			{
				auth: true
			}],
			postFix: '/:actionName'
		},
		login:{
			method: 'post',
			data: ['record'],
			rules:[{
				auth: false
			}],
			return: ['_id','role', 'active', 'email', 'username'],
			postFix: '/:actionName',
			title: 'Вход',
			fields: {
				default:  [
					'email',
					'password',
					'submit'
				]
			}
		},
		requestLoginCodeOnEmail:{
			method: 'post',
			data: ['record'],
			rules:[{
				auth: false
			}],
			postFix: '/:actionName',
			title: 'Вход одноразовой ссылкой',
			fields: {
				default:  [
					'email',
					'submit'
				]
			}
		},
		loginByCode:{
			method: 'get',
			data: ['record'],
			rules:[{
				auth: false
			}],
			postFix: '/:actionName'
		},
		requestPasswordRestore:{
			method: 'post',
			title: 'Восстановление пароля',
			rules:{
				auth: false
			},
			fields: {
				default:  [
					'email',
					'submit'
				]
			},
			postFix: '/:actionName'
		},
		restorePassword:{
			method: 'get',
			title: 'Восстановление пароля',
			rules:{
				auth: false
			},
			postFix: '/:actionName'
		},
		/**
		Authentificated user action
		**/
		logout:{
			method: 'post',
			rules:{
				auth: true
			},
			postFix: '/:actionName',
			messages: {
				success: 'Вы вышли!'
			}
		},
		changePassword:{
			method: 'post',
			rules:{
				auth: true
			},
			postFix: '/:actionName'
		},
		profile:{
			method: 'post',
			rules:{
				auth: true
			},
			postFix: '/:actionName'
		},
		update:{
			method: 'post',
			rules:{
				auth: true
			},
			postFix: '/:actionName'
		},
		status:{
			method: 'get',
			rules:[{
				auth: true
			},{
				auth: false
			}],
			postFix: '/:actionName'
		},
		token:{
			method: 'get',
			rules:[{
				auth: true
			}],
			postFix: '/:actionName'
		},
		/**
		Admin action
		**/
		//stealing identity of user, to act from his account
		steal:{
			method: 'post',
			rules:{
				auth: true,
				admin: true
			},
			postFix: '/:record[_id]/:actionName'
		},
		list:{
			method: 'get',
			rules:{
				auth: true,
				admin: true
			},
			postFix: '/:actionName'
		}
	}
};
