import 'bulma';
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
				paths: ['profie'],
				controller: ncProfile
			}
		]
	},
	menu:[{
		title: 	'Аккаунт',
		url: 		'/profile'
	},{
		title: 	'Пользователи',
		url: 		'/user'
	}],
	templates: {},
	paths: {}
};

export {ncLogout, manifest};
