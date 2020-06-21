/* global notFramework */

class ncLogout extends notFramework.notController {
	constructor(app, params) {
		//notFramework.notCommon.log('init site app ', redirect, 'login');
		super(app);
		this.setModuleName('user/logout');
		if(confirm('Хотите выйти?')){
			this.make.user({}).$logout()
				.then((result)=>{
					document.location.href = '/login';
				})
				.catch((err)=>{
					notFramework.notCommon.report(err);
				});
		}else{
			 window.history.back();
		}
		return this;
	}
}

export default ncLogout;
