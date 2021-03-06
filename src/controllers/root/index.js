import ncUser from './ncUser.js';
import ncLogout from '../common/ncLogout';
import ncProfile from '../common/ncProfile';

let manifest = {
	router: {
		manifest: [
			{
				paths: ['logout'],
				controller: ncLogout
			},
			{
				paths: ['user\/([^\/]+)\/([^\/]+)', 'user\/([^\/]+)', 'user'],
				controller: ncUser
			},
			{
				paths: ['profile'],
				controller: ncProfile
			}
		]
	},
	menu: {
		top: {
			sections: [{
				id: 		'account',
				title: 	'Аккаунт',
				place: 	'end'
			}],
			items: [{
				id: 			'account.profile',
				section: 	'account',
				title: 		'Профиль',
				url: 			'/profile'
			},{
				id: 				'account.logout',
				break: 			true,
				section: 		'account',
				priority: 	-100,
				title: 			'Выход',
				url: 				'/logout'
			}]
		},
		side:{
			sections: [{
				id: 		'system',
				title: 	'Система'
			}],
			items:		[{
				id: 		'system.users',
				section:'system',
				title: 	'Пользователи',
				url: 		'/user'
			}]
		}
	},
	templates: {},
	paths: {}
};

export {ncLogout, manifest};
