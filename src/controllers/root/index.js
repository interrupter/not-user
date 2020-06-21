import 'bulma';
import ncUser from './ncUser.js';
import ncLogout from './ncLogout';

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
			}
		]
	},
	menu:[{
		title: 	'Пользователи',
		items:[{
			title: 'Список',
			url: '/user'
		}]
	}],
	templates: {},
	paths: {}
};

export {ncLogout, manifest};
