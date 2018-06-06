const 	Schema = require('mongoose').Schema,
	path = require('path'),
	notAuth = require('not-node').Auth,
	App = require('not-node').App,
	config = require('not-config').readerForModule('user'),
	log = require('not-log')(module);

let middleware = function(req, res, next){
	let User = this.getModel('User');
	req.user = res.locals.user = null;
	if (!req || !req.session || !req.session) {
		log.error('no user session data', req.path);
		return next();
	}
	log.info('load user', req.session.id, req.session.user, req.session.role);
	if (req.session && req.session.user) {
		User.getOne(req.session.user)
			.then((user)=>{
				if (user) {
					log.info('User loaded', user.username);
					req.user = res.locals.user = user;
					notAuth.setRole(req, user.role);
				} else {
					log.error('No user with such id where founded!', user);
					notAuth.cleanse(req);
				}
				return next();
			})
			.catch((err)=>{
				log.error("Can't find user ", req.session.user);
				log.error(err);
				return next();
			});
	} else {
		return next();
	}
};


let createRootUser = (app)=>{
	let User = app.getModel('User');
	log.info('Installing...');
	let rootUser = config.get('root'),
		root  = new User({
			'email': 			rootUser.username,
			'username': 		rootUser.username,
			'password': 		rootUser.password,
			'confirm': 			'',
			'emailConfirmed': 	true,
			'role': 			[rootUser.role],
			'__latest': 		true,
			'status': 			true
		});
	return root.save()
		.then(()=>{
			log.info('Installed!');
			log.debug('Root user document created');
		})
		.catch((err)=>{
			log.error('errored', err);
			log.error('Can\'t create root user document');
			routine.returnErrors(err, log.error);
		});
};

const initialize = function(app){
	let User = app.getModel('User');
	log.info('checking if not-user has been installed');
	User.findOne({role: 'root'})
		.then((user)=>{
			if(user){
				log.info('yeah!');
				log.debug('Root user exists!', user._id.toString());
			}else{
				log.info('nay!');
				log.debug('Root user doesnt exists!');
				return createRootUser(app);
			}
		})
		.catch((err)=>{
			log.error('While searching for root user reflection in DB!', err);
		});
};

module.exports = {
	name: 'not-user',
	paths: {
		routes:			path.join(__dirname, 'src', 'routes'),
		controllers:	path.join(__dirname, 'src', 'controllers'),
		views:			path.join(__dirname, 'src', 'views'),
		templates:		path.join(__dirname, 'src', 'templates'),
		models:			path.join(__dirname, 'src', 'models'),
		locales:		path.join(__dirname, 'src', 'locales')
	},
	getMiddleware(options){
		log.info('...loadUser middleware');
		return middleware.bind(this);
	},
	initialize: initialize.bind(this)
};
