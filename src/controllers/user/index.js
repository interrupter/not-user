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
	menu:[{
		title: 	'Аккаунт',
		url: 		'/profile'
	}],
};

export {ncLogout, manifest};
