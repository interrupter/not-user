import ncLogin from 		'./ncLogin';
import ncRegister from 	'./ncRegister';

let manifest = {
	router: {
		manifest: [
			{
				paths: ['login'],
				controller: ncLogin
			},
			{
				paths: ['register'],
				controller: ncRegister
			}
		]
	},
	templates: {},
	paths: {
		common: '/client/common',
		modules: '/client/modules'
	}
};

export {ncLogin, ncRegister, manifest};
