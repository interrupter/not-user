const Log = require('not-log')(module, 'role:routes');
const {MODULE_NAME} = require('../const');
const notNode = require('not-node');
const {objHas} = notNode.Common;
const say = require('not-locale').sayForModule(MODULE_NAME);

module.exports.listAll = module.exports._listAll = async (/*req, res, next*/) => {
  Log.log('role/(_)listAll');
  return await (notNode.Application.getLogic('not-user//Role').listAll());
};

module.exports.after = (req, res, next, result)=>{
  Log.log('after');
  if(res.headersSent){return;}
  const name = req.notRouteData.actionName;
  Log.log('after hedaers not sent');
  if(result && objHas(result, '__redirect__')){
    res.status(200).redirect(result.__redirect__);
  }else{
    res.status(200).json({
      status: 'ok',
      message: say(`action_message_${name}_success`, {}, res.locals.locale),
      result
    });
  }
};
