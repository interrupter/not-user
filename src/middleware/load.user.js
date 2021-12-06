const notNode = require('not-node');
const notAuth = notNode.Auth;
const Log = require('not-log')(module, 'User/middleware');
const {notError} = require('not-error');

module.exports = async (req, res, next) => {
  const App = notNode.Application;
  try{
    let User = App.getModel('User');
    req.user = res.locals.user = null;
    if (!req || !req.session || !req.session) {
      Log.error(`no user session data ${req.path}`);
      return next();
    }
    Log.debug(`load user id@${req.session.id}; user@${req.session.user}; role@${req.session.role}`);
    if (req.session && req.session.user) {
      let user = await User.getOne(req.session.user);
      if (user) {
        Log.debug(`User loaded ${user.username}`);
        req.user = res.locals.user = user;
        notAuth.setRole(req, user.role);
      } else {
        Log.error(`No user with such id@${req.session.user}`);
        notAuth.cleanse(req);
      }
    }
    next();
  }catch(e){
    Log.error(`Error while loading user information`);
    App.report(new notError(`Error while loading user information`, {}, e));
    notAuth.setGuest(req);
    next();
  }
};
