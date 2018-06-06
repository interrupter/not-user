import ncLogin from './ncLogin';

let manifest = {
	router: {
		manifest: [
			{
				paths: ['login'],
				controller: ncLogin
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
