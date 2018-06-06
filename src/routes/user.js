const log = require('not-log')(module),
	query = require('not-filter'),
	notError = require('not-error'),
	notLocale = require('not-locale'),
	notAuth = require('not-node').Auth;

/**
*   Guest actions
*/
exports.register = (req, res)=>{
	res.status(200).json({});
};

exports.login = (req, res, next)=>{
	log.debug('login');
	let User = this.getModel('User'),
		UserSchema = this.getModelSchema('User'),
		email = req.body.email,
		password = req.body.password,
		ip = req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;
	User.authorize(email, password)
		.then((user)=>{
			if(user && user._id){
				notAuth.setAuth(req, user._id, user.role);
				log.info('user authorized as', req.session.user, req.session.role);
				user.ip = ip;
				req.session.save();
				query.return.process(req, UserSchema, user);
				return res.status(200).json({user});
			}else{
				let err = new notError(notLocale.say('user_not_found'));
				return res.status(403).json({
					error: err.message
				});
			}
		})
		.catch((err)=> {
			if (err instanceof notError) {
				return res.status(403).json({
					error: err.message
				});
			} else {
				return next(err);
			}
		});
};

exports.restorePassword = (req, res)=>{
	res.status(200).json({});
};

/**
*   Authorized user actions
*/
exports.logout = (req, res)=>{
	req.session.user = null;
	req.session.role = 'guest';
	res.status(200).json({});
};

exports.changePassword = (req, res)=>{
	res.status(200).json({});
};

exports.profile = (req, res)=>{
	res.status(200).json({});
};

exports.update = (req, res)=>{
	res.status(200).json({});
};

exports.status = (req, res)=>{
	res.status(200).json({});
};

/**
*   Admin actions
*/
exports._steal = (req, res)=>{
	res.status(200).json({});
};

exports._list = (req, res)=>{
	res.status(200).json({});
};

exports._update = (req, res)=>{
	res.status(200).json({});
};
