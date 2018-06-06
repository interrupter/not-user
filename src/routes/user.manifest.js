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
			rules:[{
				auth: false
			}],
			postFix: '/:actionName'
		},
		login:{
			method: 'post',
			data: ['record'],
			rules:[{
				auth: false
			}],
			postFix: '/:actionName',
			title: 'Вход',
			fields: {
				default:  [
					'email',
					'password',
					'submit'
				]
			},
			messages: {
				success: 'Вы вошли!'
			}
		},
		restorePassword:{
			method: 'post',
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
