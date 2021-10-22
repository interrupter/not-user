const 	Schema = require('mongoose').Schema,
	path = require('path'),
	notNode = require('not-node'),

	loadUserMiddleware = require('./src/middleware/load.user');

module.exports = {
	name: 'not-user',
	paths: {
		routes:				path.join(__dirname, 'src', 'routes'),
		logics:				path.join(__dirname, 'src', 'logics'),
		controllers:	path.join(__dirname, 'src', 'controllers'),
		views:				path.join(__dirname, 'src', 'views'),
		models:				path.join(__dirname, 'src', 'models'),
		styles:				path.join(__dirname, 'src', 'styles'),
		locales:			path.join(__dirname, 'src', 'locales')
	},
	getMiddleware(options){
		const App = notNode.Application;
		App.logger.info('...loadUser middleware');
		return loadUserMiddleware.bind(this);
	},
	initialize: async(app)=>{
		const App = notNode.Application;
		App.logger.info('...loadUser middleware');
		await App.getLogic('not-user/Init').initialize(app)
	}
};
