const config = require('not-config').readerForModule('user');

const MODEL_NAME = 'Init';
exports.thisLogicName = MODEL_NAME;

exports[MODEL_NAME] = class InitLogic{

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
		app.logger.info(`Installing...`);
		return await app.getLogic('not-user//User').createRootUser(app, InitLogic.getInitialRootValues());
	}

	static async initialize(app){
		try{
			let User = app.getModel('not-user//User');
			app.logger.info('checking if not-user has been installed');
			const user = await User.findOne({
				role: 'root',
				__latest: true,
				__closed: false
			});
			if(user){
				app.logger.debug(`Root user exists!`);
				return;
			}else{
				app.logger.debug('Root user doesnt exists!');
				return await InitLogic.createRootUser(app);
			}
		}catch(e){
			app.logger.error('While searching for root user in DB!');
			app.logger.error(e);
			app.report(e);
		}
	}
};
