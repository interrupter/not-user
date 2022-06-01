const notNode = require('not-node');
const notAuth = notNode.Auth;
const Log = require('not-log')(module, 'User/middleware');
const {notError} = require('not-error');
const JWT = require('jsonwebtoken');
const config = require('not-config').readerForModule('user');

function getUserIdFromSession(req){
  if(req.session && req.session.user){
    return req.session && req.session.user;
  }
  return null;
}

function getUserIdFromToken(req){
  try{
    const auth = req.get('Authorization');
    if(auth && auth.length){
      const [,token] = auth.split(' ');
      const secret = config.get('secret');
      JWT.verify(token, secret);
      const decoded = JWT.decode(token, secret);
      return decoded._id;
    }
    return null;
  }catch(e){
    Log.error(e.message);
    return null;
  }
}

function getUserId(req){
  const fromSession = getUserIdFromSession(req);
  if(fromSession){
    return fromSession;
  }
  return getUserIdFromToken(req);
}

module.exports = async (req, res, next) => {
  if(!req) next();
  const App = notNode.Application;
  try{
    let User = App.getModel('User');
    req.user = res.locals.user = null;
    const userId = getUserId(req);
    if(userId === null){
      Log.error(`no user data in session or token ${req.path}`);
      return next();
    }
    let user = await User.getOne(userId);
    if (user) {
      Log.debug(`User loaded ${user.username}`);
      req.user = res.locals.user = user;
      notAuth.setRole(req, user.role);
    } else {
      Log.error(`No user with such id@${userId}`);
      notAuth.cleanse(req);
    }
    return next();
  }catch(e){
    Log.error(`Error while loading user information`);
    App.report(new notError(`Error while loading user information`, {}, e));
    notAuth.setGuest(req);
    next();
  }
};
