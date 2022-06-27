const FIELDS = [
  ['_id', 'not-node//_id'],
  ['userID', 'not-node//ID'],
  ['username', 'not-user//username'],
  ['email', 'not-user//email'],
  ['password', 'not-user//password'],
  ['passwordRepeat', 'not-user//passwordRepeat'],
  ['country', 'not-user//country'],
  ['role', 'not-user//role'],
  ['code', 'not-user//code'],
  ['telephone', 'not-user//telephone']
];

const actionNamePath = '/:actionName';
const idActionPath = '/:record[_id]/:actionName';

module.exports = {
  model: 'user',
  url: '/api/:modelName',
  showMessages: true,
  fields: FIELDS,
  privateFields: ['salt', 'hashedPassword'],
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
      return: ['_id', 'role', 'active', 'email', 'username', 'emailConfirmed', 'telephoneConfirmed', 'token'],
      postFix: actionNamePath
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
      postFix: actionNamePath
    },
    login:{
      method: 'post',
      data: ['record'],
      rules:[{
        auth: false
      }],
      return: ['_id', 'role', 'active', 'email', 'username', 'emailConfirmed', 'telephoneConfirmed', 'token'],
      postFix: actionNamePath,
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
      postFix: actionNamePath,
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
      postFix: actionNamePath,
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
      postFix: actionNamePath,
      title: 'not-user:form_loginByCode_title',
      fields: [
        'code'
      ]
    },
    requestEmailConfirmation:{
      method: 'post',
      data: ['record', 'data'],
      rules:[{
        auth: true
      }],
      postFix: actionNamePath
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
      postFix: actionNamePath
    },
    resetPassword:{
      method: 'get',
      title: 'not-user:form_resetPassword_title',
      rules:[{
        auth: false
      }],
      postFix: actionNamePath
    },
    /**
		Authentificated user action
		**/
    logout:{
      method: 'post',
      rules:[{
        auth: true
      }],
      postFix: actionNamePath,
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
      postFix: actionNamePath
    },
    profile:{
      method: 'post',
      rules:[{
        auth: true
      }],
      postFix: actionNamePath
    },
    update:{
      method: 'post',
      rules:[{
        auth: true,
        root: true,
        fields:[
          '_id',
          'username',
          'email',
          'emailConfirmed',
          'telephone',
          'active',
          'country',
          'role'
        ],
      },{
        auth: true,
        role: ['admin'],
        fields:[
          '_id',
          'username',
          'email',
          'emailConfirmed',
          'telephone',
          'active',
          'country',
          'role'
        ],
      },{
        auth: true,
        fields:[
          '_id',
          'username',
          'email',
          'telephone',
          'active',
          'country',
          'role'
        ],
      }],
      data: ['record'],
      postFix: idActionPath
    },
    status:{
      method: 'get',
      rules:[{
        return: ['_id', 'role', 'active', 'email', 'username', 'emailConfirmed', 'telephoneConfirmed', 'token'],
        auth: true
      },{
        return: ['auth', 'sid', 'ip'],
        auth: false,
      }],
      postFix: actionNamePath
    },
    token:{
      method: 'get',
      rules:[{
        auth: true
      },{
        auth: false
      }],
      postFix: actionNamePath
    },
    get:{
      method: 'get',
      rules:[{
        auth: true,
        root: true
      },{
        auth: true
      }],
      fields:[
        '_id',
        'username',
        'email',
        'telephone',
        'active',
        'country',
        'role'
      ],
      postFix: idActionPath
    },
    /**
		Admin action
		**/
    create:{
      method: 'put',
      rules:[{
        auth: true,
        root: true
      },{
        auth: true,
        role: 'admin',
      }],
      fields:[
        'username',
        'email',
        'telephone',
        'password',
        'passwordRepeat',
        'active',
        'country',
        'role'
      ],
      data: ['record'],
      postFix: actionNamePath
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
      postFix: idActionPath
    },
    listAndCount:{
      method: 'get',
      data: ['record', 'search', 'filter'],
      rules:[{
        auth: true,
        root: true
      },{
        auth: true,
        role: 'admin'
      }],
      postFix: actionNamePath
    }
  }
};
