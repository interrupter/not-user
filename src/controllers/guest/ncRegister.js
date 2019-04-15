class ncRegister extends notFramework.notController {
	constructor(app, params) {
		//notFramework.notCommon.log('init site app ', redirect, 'login');
		super(app);
		this.setModuleName('user/register');
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
			'_id': undefined,
			username: '',
			email: '',
			password: ''
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
						params.item.$login()
							.then(this.goDashboard.bind(this))
							.catch(this.showError.bind(this));
					}
				},
				action: 'register',
				targetEl: document.querySelector(this.app.getOptions('modules.user.registerFormContainerSelector'))
			}
		});
	}

	buildPage() {
		var formParent = document.querySelector(this.app.getOptions('modules.user.registerFormContainerSelector'));
		formParent.innerHTML = '';
		this.buildForm();
	}
}

export default ncRegister;
