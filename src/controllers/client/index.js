import ncLogout from './ncLogout';

let manifest = {
	router: {
		manifest: [
			{
				paths: ['logout'],
				controller: ncLogout
			}
		]
	},
	templates: {},
	paths: {}
};

export {ncLogout, manifest};
