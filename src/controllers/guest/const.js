const title = {
  login: 				'Вход',
  register: 		'Регистрация',
  restore: 			'Восстановить',
  reset: 				'Сброс пароля',
  confirmEmail: 'Подтверждение email',
  confirmTel: 	'Подтверждение номера телефона'
};

const description = {
  login: 				'Вход',
  register: 		'Регистрация',
  restore: 			'Восстановить',
  reset: 				'Сброс пароля',
};

const url = {
  register: 							'/api/user/register',
  confirmEmail: 					'/api/user/confirmEmail',
  login: 									'/api/user/login',
  requestPasswordRestore: '/api/user/requestPasswordRestore',
  restorePassword: 				'/api/user/restorePassword',
  requestLoginByEmail: 		'/api/user/requestLoginByEmail',
  loginByEmail: 					'/api/user/loginByEmail',
};

export {};
