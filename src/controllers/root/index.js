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
				id: 		'system.state',
				title: 	'Система'
			},{
				id: 		'account',
				title: 	'Аккаунт',
				priority: -100
			}],
			items: [{
				section: 'account',
				title: 	'Профиль',
				url: 		'/profile'
			},{
				break: true,
				section: 'account',
				priority: -100,
				title: 'Выход',
				url: 		'/logout'
			}]
		},
		side:{
			sections: [{
				id: 		'system',
				title: 	'Система'
			}],
			items:		[{
				title: 	'Пользователи',
				url: 		'/user'
			}]
		}
	},
	templates: {},
	paths: {}
};

export {ncLogout, manifest};
