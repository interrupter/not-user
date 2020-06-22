/* global notFramework */

import notTable from './notTable.js';

class ncUser extends notFramework.notController {
	constructor(app, params) {
		notFramework.notCommon.log('init site app ', params, 'list');
		super(app);
		this.ui = {};
		this.els = {};
		this.setModuleName('user');
		this.buildFrame();
		this.route(params);
		return this;
	}

	buildFrame(){
		let el = document.querySelector(this.app.getOptions('crud.containerSelector', 'body'));
		while (el.firstChild){
			el.removeChild(el.firstChild);
		}
		this.els.top = document.createElement('div');
		this.els.top.id = 'crud-top';
		this.els.top.classList.add('box');
		el.appendChild(this.els.top);
		this.els.main = document.createElement('div');
		this.els.main.id = 'crud-main';
		this.els.main.classList.add('box');
		el.appendChild(this.els.main);
		this.els.bottom = document.createElement('div');
		this.els.bottom.id = 'crud-bottom';
		this.els.bottom.classList.add('box');
		el.appendChild(this.els.bottom);
	}


	route(params = []) {
		if (params.length == 1) {
			if (params[0] === 'create') {
				return this.runCreate(params);
			} else {
				return this.runDetails(params);
			}
		} else if (params.length == 2) {
			if (params[1] === 'delete') {
				return this.runDelete(params);
			} else if (params[1] === 'update') {
				return this.runUpdate(params);
			} else {
				let routeRunnerName = 'run' + notFramework.notCommon.capitalizeFirstLetter(params[1]);
				if (this[routeRunnerName] && typeof this[routeRunnerName] === 'function') {
					return this[routeRunnerName](params);
				}
			}
		}
		return this.runList(params);
	}

	runCreate(params){
		if(this.ui.create){
			return;
		}else{
			this.distroyUIs();
		}
	}

	runDetails(params){
		if(this.ui.details){
			return;
		}else{
			this.distroyUIs();
		}
	}

	runUpdate(params){
		if(this.ui.update){
			return;
		}else{
			this.distroyUIs();
		}
	}

	runList() {
		if(this.ui.list){
			return;
		}else{
			this.distroyUIs();
		}
		this.ui.list = new notTable({
			options: {
				targetEl: this.main,
				interface: {
					combined: true,
					factory: this.make.user
				},
				endless: false,
				preload: {},
				actions:[
					{
						title: 'Создать',
						action: this.runCreate.bind(this, ['create'])
					}
				],
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
				},{
					path: ':emailConfirmed',
					title: 'Подтверждён',
					type: 	'boolean',
				}, {
					path: ':role',
					title: 'Роли',
					preprocessor: (value) => {
						if(Array.isArray(value)){
							return value.join(', ');
						}else{
							return value;
						}
					}
				},{
					path: ':_id',
					title: 'Действия',
					type: 'link',
					preprocessor: (value) => {
						return [
							{
								url: '/' + [this.getModelURL(), value, 'view'].join('/'),
								title: 'Подробнее'
							},
							{
								url: '/' + [this.getModelURL(), value, 'update'].join('/'),
								title: 'Изменить'
							},
							{
								url: '/' + [this.getModelURL(), value, 'delete'].join('/'),
								type: 'danger',
								title: 'Удалить'
							}
						];
					},
				}]
			}
		});
	}

	distroyUIs(){
		for(let ui in this.ui){
			ui.$destroy && ui.$destroy();
		}
	}
}

export default ncUser;
