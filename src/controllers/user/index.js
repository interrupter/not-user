import ncLogout from '../common/ncLogout';
import ncProfile from '../common/ncProfile';

let manifest = {
	router: {
		manifest: [
			{
				paths: ['dashboard/logout'],
				controller: ncLogout
			},
			{
				paths: ['dashboard/profile'],
				controller: ncProfile
			}
		]
	},
	templates: {},
	paths: {},
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
				url: 			'dashboard/profile'
			},{
				id: 			'account.profile',
				break: true,
				section: 'account',
				priority: -100,
				title: 'Выход',
				url: 		'dashboard/logout'
			}]
		}
	},
};

export {ncLogout, manifest};
