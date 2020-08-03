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
				paths: ['profile'],
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
				title: 	'Аккаунт'
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
		}
	},
};

export {ncLogout, manifest};
