import ncLogin from './ncLogin';
import ncRegister from './ncRegister';
import ncRestore from './ncRestore';

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

export {ncLogin, manifest};
