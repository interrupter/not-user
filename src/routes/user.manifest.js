const initFromSchema = require('not-node').Fields.fromSchema;
const modelSchema = require('../models/user').thisSchema;

const FIELDS = initFromSchema(modelSchema, [
	'username',
	'email',
	'password',
	'passwordRepeat',
	'code',
	'telephone'
]);

module.exports = {
	model: 'user',
	url: '/api/:modelName',
	showMessages: true,
	fields: FIELDS,
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
			data: ['record'],
			fields: [
				'username',
				'telephone',
				'email',
				'password',
				'passwordRepeat'
			],
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
			title: 'not-user:form_login_title',
			fields: [
				'email',
				'password'
			]
		},
		requestLoginCodeOnEmail:{
			method: 'post',
			data: ['record'],
			rules:[{
				auth: false
			}],
			postFix: '/:actionName',
			title: 'not-user:form_requestLoginCodeOnEmail_title',
			fields: [
				'email'
			]
		},
		requestLoginCodeOnTelephone:{
			method: 'post',
			data: ['record'],
			rules:[{
				auth: false
			}],
			postFix: '/:actionName',
			title: 'not-user:form_requestLoginCodeOnTelephone_title',
			fields: [
				'telephone'
			]
		},
		loginByCode:{
			method: 'get',
			data: ['record'],
			rules:[{
				auth: false
			}],
			postFix: '/:actionName',
			title: 'not-user:form_loginByCode_title',
			fields: [
				'code'
			]
		},
		requestPasswordReset:{
			method: 'post',
			title: 'not-user:form_requestPasswordReset_title',
			rules:[{
				auth: false
			}],
			data: ['record'],
			fields: [
				'email',
				'submit'
			],
			postFix: '/:actionName'
		},
		resetPassword:{
			method: 'get',
			title: 'not-user:form_resetPassword_title',
			rules:[{
				auth: false
			}],
			postFix: '/:actionName'
		},
		/**
		Authentificated user action
		**/
		logout:{
			method: 'post',
			rules:[{
				auth: true
			}],
			postFix: '/:actionName',
			messages: {
				success: 'Вы вышли!'
			}
		},
		changePassword:{
			method: 'post',
			data: ['record', 'data'],
			rules:[{
				auth: true
			}],
			postFix: '/:actionName'
		},
		profile:{
			method: 'post',
			rules:[{
				auth: true
			}],
			postFix: '/:actionName'
		},
		update:{
			method: 'post',
			rules:[{
				auth: true,
				root: true
			},{
				auth: true,
				role: ['admin']
			},{
				auth: true
			}],
			data: ['record'],
			postFix: '/:record[_id]/:actionName'
		},
		status:{
			method: 'get',
			rules:[{
				auth: true
			},{
				return: ['auth', 'sid', 'ip'],
				auth: false,
			}],
			postFix: '/:actionName'
		},
		token:{
			method: 'get',
			rules:[{
				auth: true
			},{
				auth: false
			}],
			postFix: '/:actionName'
		},
		get:{
			method: 'get',
			rules:[{
				auth: true,
				root: true
			},{
				auth: true
			}],
			postFix: '/:record[_id]/:actionName'
		},
		/**
		Admin action
		**/
		//stealing identity of user, to act from his account
		steal:{
			method: 'post',
			rules:[{
				auth: true,
				root: true
			}],
			postFix: '/:record[_id]/:actionName'
		},
		create:{
			method: 'put',
			rules:[{
				auth: true,
				root: true
			},{
				auth: true,
				role: 'admin'
			}],
			data: ['record'],
			postFix: '/:actionName'
		},
		delete:{
			method: 'delete',
			rules:[{
				auth: true,
				root: true
			},{
				auth: true,
				role: 'admin'
			}],
			data: ['record'],
			postFix: '/:record[_id]/:actionName'
		},
		listAndCount:{
			method: 'get',
			rules:[{
				auth: true,
				root: true
			},{
				auth: true,
				role: 'admin'
			}],
			postFix: '/:actionName'
		}
	}
};
