/* global notFramework */

const ERROR_DEFAULT = 'Что пошло не так.';

import notTable from './notTable.js';
import UserUICreate from './ui.create.svelte';
import UserUIUpdate from './ui.update.svelte';
import UserUIDetails from './ui.details.svelte';
import UserUIErrorMessage from './ui.error.svelte';

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

	buildFrame() {
		let el = document.querySelector(this.app.getOptions('crud.containerSelector', 'body'));
		while (el.firstChild) {
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

	runCreate(params) {
		if (this.ui.create) {
			return;
		} else {
			this.$destroyUI();
		}
	}

	runDetails(params) {
		if (this.ui.details) {
			return;
		} else {
			this.$destroyUI();
		}
		this.make.user({_id: params[0]}).$get().then((res)=>{
			if(rs.status === 'ok'){
				this.ui.details = new UserUIDetails({
					targetEl: this.main,
					props:{
						user: res.result
					}
				});
			}else{
				this.ui.error = new UserUIErrorMessage({
					targetEl: this.main,
					props:{
						title: 		'Произошла ошибка',
						message: 	res.error?res.error:ERROR_DEFAULT
					}
				});
			}
		})
		.catch(this.error);
	}

	runUpdate(params) {
		if (this.ui.update) {
			return;
		} else {
			this.$destroyUI();
		}
	}

	runDelete(params){
		if (confirm('Удалить пользователя?')) {
			this.make.user({_id: params[0]}).$delete()
				.then(()=>{
					this.goList();
				})
				.catch(notFramework.notCommon.report);
		}else{
			this.goList();
		}
	}

	runList(params) {
		if (this.ui.list) {
			return;
		} else {
			this.$destroyUI();
		}
		this.ui.list = new notTable({
			options: {
				targetEl: this.els.main,
				interface: {
					combined: true,
					factory: this.make.user
				},
				endless: false,
				preload: {},
				actions: [{
					title: 'Создать',
					action: this.goCreate.bind(this)
				}],
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
					path: ':emailConfirmed',
					title: 'Подтверждён',
					type: 'boolean',
				}, {
					path: ':role',
					title: 'Роли',
					preprocessor: (value) => {
						if (Array.isArray(value)) {
							return value.join(', ');
						} else {
							return value;
						}
					}
				}, {
					path: ':_id',
					title: 'Действия',
					type: 'button',
					preprocessor: (value) => {
						return [{
							action: this.goDetails.bind(this, value),
							title: 'Подробнее'
						},
						{
							action: this.goUpdate.bind(this, value),
							title: 'Изменить'
						},
						{
							action: this.goDelete.bind(this, value),
							type: 'danger',
							title: 'Удалить'
						}
						];
					},
				}]
			}
		});
	}

	$destroyUI() {
		for (let name in this.ui) {
			this.ui[name].$destroy && this.ui[name].$destroy();
		}
	}

	goCreate(){
		this.app.getWorking('router').navigate('/' + [this.getModelURL(), 'create'].join('/'));
	}

	goDetails(value){
		this.app.getWorking('router').navigate('/' + [this.getModelURL(), value].join('/'));
	}

	goUpdate(value){
		this.app.getWorking('router').navigate('/' + [this.getModelURL(), value, 'update'].join('/'));
	}

	goDelete(value){
		this.app.getWorking('router').navigate('/' + [this.getModelURL(), value, 'delete'].join('/'));
	}

	goList(){
		this.app.getWorking('router').navigate('/' + this.getModelURL());
	}
}

export default ncUser;
