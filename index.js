const 	Schema = require('mongoose').Schema,
	path = require('path'),
	notNode = require('not-node'),
	loadUserMiddleware = require('./src/middleware/load.user');

const content = [
	'fields', 'forms', 'routes', 'logics',
	'controllers', 'views', 'models', 'styles',
	'locales'
];

const toPath = (name) => path.join(__dirname, 'src', name);
const paths = content.reduce((prev, cur)=>{
	prev[cur] = toPath(cur);
	return prev;
}, {});

module.exports = {
	name: require('./src/const').MODULE_NAME,
	paths,
	getMiddleware(options){
		const App = notNode.Application;
		App.logger.info('...loadUser middleware');
		return loadUserMiddleware.bind(this);
	},
	initialize: async (app)=>{
		const App = notNode.Application;
		App.logger.info('...initalizing');
		await app.getLogic('not-user//Init').initialize(app);
	}
};
