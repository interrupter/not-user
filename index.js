const 	Schema = require('mongoose').Schema,
	path = require('path'),
	notAuth = require('not-node').Auth,
	notNode = require('not-node'),
	config = require('not-config').readerForModule('user');

	let middleware = function(req, res, next){
		const App = notNode.Application;
		let User = App.getModel('User');
		req.user = res.locals.user = null;
		if (!req || !req.session || !req.session) {
			App.logger.error(`no user session data ${req.path}`);
			return next();
		}
		App.logger.debug(`load user id@${req.session.id}; user@${req.session.user}; role@${req.session.role}`);
		if (req.session && req.session.user) {
			User.getOne(req.session.user)
				.then((user)=>{
					if (user) {
						App.logger.debug(`User loaded ${user.username}`);
						req.user = res.locals.user = user;
						notAuth.setRole(req, user.role);
					} else {
						App.logger.error(`No user with such id@${req.session.user} where founded!`);
						notAuth.cleanse(req);
					}
					next();
				})
				.catch((err)=>{
					App.logger.error(`Can't find user id@${req.session.user}`);
					App.report(err);
					next();
				});
			} else {
				notAuth.setGuest(req);
				return next();
			}
	};


let createRootUser = async (app)=>{
	let User = app.getModel('not-user//User');
	let rootUser = config.get('root');
	app.logger.info(`Installing...`);
	return User.add({
			'email': 					rootUser.email,
			'username': 			rootUser.username,
			'password': 			process.env.INIT_PASS || 'letMeIn',
			'confirm': 				'',
			'emailConfirmed': true,
			'role': 					[rootUser.role],
			'__latest': 			true,
			'active': 				true
		})
		.then(()=>{
			app.logger.info('Installed!');
			app.logger.debug('Root user document created');
		})
		.catch(async (err)=>{
			app.logger.error(err);
			app.report(err);
			app.logger.error('Can\'t create root user document');
		});
};

const initialize = function(app){

	let User = app.getModel('not-user//User');
	app.logger.info('checking if not-user has been installed');
	try{
		User.findOne({role: 'root'})
			.then((user)=>{
				if(user){
					app.logger.debug(`Root user exists!`);
					return;
				}else{
					app.logger.debug('Root user doesnt exists!');
					return createRootUser(app);
				}
			})
			.catch((err) => {
				app.logger.error('While searching for root user reflection in DB!');
				app.logger.error(err);
				app.report(err);
			});
	}catch(e){
		app.report(e);
	}
};

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
		return middleware.bind(this);
	},
	initialize: initialize.bind(this)
};
