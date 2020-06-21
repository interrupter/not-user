import notTable from './notTable.js';

class ncUser extends notFramework.notController {
	constructor(app, params) {
		notFramework.notCommon.log('init site app ', params, 'list');
		super(app);
		this.ui = {};
		this.setModuleName('user/list');
		this.buildPage();
		return this;
	}

	buildPage() {
		if(this.ui.list){ return; }
		this.ui.list = new notTable({
			options: {
				targetEl: document.querySelector(this.app.getOptions('crud.containerSelector', 'body')),
				interface: {
					combined: true,
					factory: this.make.user
				},
				endless: false,
				preload: {},
				fields: [{
					path: ':userID',
					title: 'ID',
					searchable: true,
					sortable: true
				}, {
					path: ':username',
					title: 'Username',
					searchable: true,
					sortable: true
				}, {
					path: ':email',
					title: 'Email',
					searchable: true,
					sortable: true
				}, {
					path: ':_id',
					title: 'ID',
					searchable: true,
					sortable: true
				}]
			}
		});
	}
}

export default ncUser;
