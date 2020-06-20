module.exports = (app, notApp)=>{
  	//можно запросить манифест для клиент-серверного обмена
  	app.get('/api/manifest', function (req, res, next) {
  		res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  		res.header('Expires', '-1');
  		res.header('Pragma', 'no-cache');
  		res.json(notApp.getManifest());
  	});
};
