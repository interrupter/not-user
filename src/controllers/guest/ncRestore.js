/* global notFramework */

class ncRestore extends notFramework.notController {
	constructor(app, params) {
		//notFramework.notCommon.log('init site app ', redirect, 'login');
		super(app);
		this.setModuleName('user');
		this.viewsPrefix = '/client/modules/main/';
		this.commonViewsPrefix = this.app.getOptions().commonPath;
		this.viewsPostfix = '.html';
		this.renderFromURL = true;
		this.tableView = null;
		this.form = null;
		this.buildPage();
		return this;
	}

	goDashboard() {
		document.location.href = '/dashboard';
		window.location.reload(true);
	}

	goLogin() {
		document.location.href = '/login';
	}

	initItem() {
		var newRecord = this.make.user({
			email: ''
		});
		return newRecord;
	}

	showError(e) {
		this.item.error = true;
		this.item.message = e.error;
		notFramework.notCommon.report(e);
	}

	buildForm() {
		this.item = this.initItem();
		this.form = new notFramework.notForm({
			data: this.item,
			options: {
				prefix: 'user-form-',
				helpers: {
					submit: (params) => {
						params.item.$requestPasswordRestore()
							.then(this.successRequestMessage.bind(this))
							.catch(this.showError.bind(this));
					}
				},
				action: 'requestPasswordRestore',
				targetEl: document.querySelector(this.app.getOptions('modules.user.restoreFormContainerSelector'))
			}
		});
	}

	buildPage() {
		var formParent = document.querySelector(this.app.getOptions('modules.user.restoreFormContainerSelector'));
		formParent.innerHTML = '';
		this.buildForm();
	}

	successRequestMessage(){
		var formParent = document.querySelector(this.app.getOptions('modules.user.restoreFormContainerSelector'));
		formParent.innerHTML = '';
		this.buildForm();
	}
}

export default ncRestore;
