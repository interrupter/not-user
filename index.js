const 	Schema = require('mongoose').Schema,
	path = require('path'),
	notAuth = require('not-node').Auth,
	notNode = require('not-node'),
	App = require('not-node').Application,
	config = require('not-config').readerForModule('user');

	let middleware = function(req, res, next){
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
	let User = App.getModel('User');
	App.logger.info(`Installing...`);
	let rootUser = config.get('root'),
		root  = new User({
			'userID':					await notNode.Increment.next('User'),
			'email': 					rootUser.email,
			'username': 			rootUser.username,
			'password': 			rootUser.password,
			'confirm': 				'',
			'emailConfirmed': true,
			'role': 					[rootUser.role],
			'__latest': 			true,
			'status': 				true
		});
	return root.save()
		.then(()=>{
			App.logger.info('Installed!');
			App.logger.debug('Root user document created');
		})
		.catch((err)=>{
			App.logger.error(err.message);
			App.report(err);
			App.logger.error('Can\'t create root user document');
		});
};

const initialize = function(app){
	let User = App.getModel('not-user//User');
	App.logger.info('checking if not-user has been installed');
	try{
		User.findOne({role: 'root'})
			.then((user)=>{
				if(user){
					App.logger.debug(`Root user exists!`);
					return;
				}else{
					App.logger.debug('Root user doesnt exists!');
					return createRootUser(app);
				}
			})
			.catch((err) => {
				App.logger.error('While searching for root user reflection in DB!');
				App.logger.error(err);
				App.report(err);
			});
	}catch(e){
		App.logger.error(e);
	}
};

module.exports = {
	name: 'not-user',
	paths: {
		routes:				path.join(__dirname, 'src', 'routes'),
		controllers:	path.join(__dirname, 'src', 'controllers'),
		views:				path.join(__dirname, 'src', 'views'),
		templates:		path.join(__dirname, 'src', 'templates'),
		models:				path.join(__dirname, 'src', 'models'),
		styles:				path.join(__dirname, 'src', 'styles'),
		locales:			path.join(__dirname, 'src', 'locales')
	},
	getMiddleware(options){
		App.logger.info('...loadUser middleware');
		return middleware.bind(this);
	},
	initialize: initialize.bind(this)
};
