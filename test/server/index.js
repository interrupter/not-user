//пустой not-node сервер для проверки одного модуля
const env = process.env.NODE_ENV;
const path = require('path');
const configPath = path.join(__dirname, 'config');
const configModule = require('not-config');
//инициализируем доступ к логам
const log = require('not-log')(module, 'init');
log.info(['Environment', env]);
//иницилизируем доступ к настройкам
const configLoaded = configModule.init(configPath);
if (configLoaded !== false){
	log.info('Config loaded: ', configPath);
	require('./app.js')();
}else{
	log.error('Config not loaded: ', configPath);
}
