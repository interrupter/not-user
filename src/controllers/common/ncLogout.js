/* global notFramework */

class ncLogout extends notFramework.notController {
	constructor(app) {
		//notFramework.notCommon.log('init site app ', redirect, 'login');
		super(app);
		this.setModuleName('user');
		if (confirm('Хотите выйти?')) {
			this.make.user({}).$logout()
				.then(() => {
					document.location.href = '/login';
				})
				.catch((err) => {
					notFramework.notCommon.report(err);
				});
		} else {
			window.history.back();
		}
		return this;
	}
}

export default ncLogout;
