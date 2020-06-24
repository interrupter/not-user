import ncLogout from './ncLogout';
import ncProfile from './ncProfile';


let manifest = {
	router: {
		manifest: [
			{
				paths: ['logout'],
				controller: ncLogout
			},
			{
				paths: ['profie'],
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
