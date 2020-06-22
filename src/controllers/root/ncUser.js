/* global notFramework */

import notTable from './notTable.js';

class ncUser extends notFramework.notController {
	constructor(app, params) {
		notFramework.notCommon.log('init site app ', params, 'list');
		super(app);
		this.ui = {};
		this.setModuleName('user');
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
					type: 'link',
					preprocessor: (value) => {
						return [
								{
									url: [this.getModelURL(), value, 'view'].join('/'),
									title: 'Подробнее'
								},
								{
									url: [this.getModelURL(), value, 'update'].join('/'),
									title: 'Изменить'
								},
								{
									url: [this.getModelURL(), value, 'delete'].join('/'),
									type: 'danger',
									title: 'Удалить'
								}
						];
					},
				}]
			}
		});
	}
}

export default ncUser;
