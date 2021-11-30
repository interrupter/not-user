import ncLogin from 		'./ncUniversal';
import ncRegister from 	'./ncRegister';
import ncRestore from 	'./ncRestore';

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
			},
			{
				paths: ['restore'],
				controller: ncRestore
			}
		]
	},
	templates: {},
	paths: {
		common: '/client/common',
		modules: '/client/modules'
	}
};

export {ncLogin, ncRegister, ncRestore, manifest};
