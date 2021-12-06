const config = require('not-config').readerForModule('user');
const Log = require('not-log')(module, 'not-user//logic');
const MODEL_NAME = 'Init';
module.exports.thisLogicName = MODEL_NAME;

module.exports[MODEL_NAME] = class InitLogic{

  static getInitialRootValues(){
    const rootUserConfig = config.get('root');
    const root ={};
    if(rootUserConfig){
      rootUserConfig.username && (root.username =	rootUserConfig.username);
      rootUserConfig.email && (root.email =	rootUserConfig.email);
      rootUserConfig.password && (root.password =	rootUserConfig.password);
    }
    if(process.env.INIT_ROOT_USERNAME){root.username = process.env.INIT_ROOT_USERNAME;}
    if(process.env.INIT_ROOT_EMAIL){root.email = process.env.INIT_ROOT_EMAIL;}
    if(process.env.INIT_ROOT_PASSWORD){root.password = process.env.INIT_ROOT_PASSWORD;}
    return root;
  }

  static async createRootUser(app){
    Log.info(`Installing...`);
    return await app.getLogic('not-user//User').createRootUser(app, InitLogic.getInitialRootValues());
  }

  static async initialize(app){
    try{
      let User = app.getModel('not-user//User');
      Log.info('checking if not-user has been installed');
      const user = await User.findOne({
        role: 'root',
        __latest: true,
        __closed: false
      });
      if(user){
        Log.debug(`Root user exists!`);
        return;
      }else{
        Log.debug('Root user doesnt exists!');
        const root = await InitLogic.createRootUser(app);
        Log.info(`Installed ${root.userID}#${root.username}`);
        return root;
      }
    }catch(e){
      Log.error('While searching for root user in DB!');
      Log.error(e);
      app.report(e);
    }
  }
};
