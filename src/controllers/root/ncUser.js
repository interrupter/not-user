/* global notFramework */

const ERROR_DEFAULT = 'Что пошло не так.';

import notTable from '../common/notTable.js';
import UserCommon from '../common/user.js';
import UserUIBreadcrumbs from '../common/ui.breadcrumbs.svelte';
import UserUIEdit from '../common/ui.edit.svelte';
import UserUIDetails from '../common/ui.details.svelte';
import UserUIErrorMessage from '../common/ui.error.svelte';

const BREADCRUMBS = [{title: 'Пользователи', url: '/user'}];

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

	setBreadcrumbs(tail){
		let crumbs = [];
		crumbs.push(...BREADCRUMBS)
		crumbs.push(...tail);

		if(this.breadcrumbs){
			this.breadcrumbs.$set({
				items: crumbs
			});
		}else{
			this.breadcrumbs = new UserUIBreadcrumbs({
				target: this.els.top,
				props:{
					items: 	crumbs,
					go:			url => this.app.getWorking('router').navigate(url)
				}
			});
		}
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
		this.setBreadcrumbs([
			{
				title: 'Добавление нового',
				url: '/user/create'
			}
		]);

		if (this.ui.create) {
			return;
		} else {
			this.$destroyUI();
		}
		this.ui.create = new UserUIEdit({
			target: this.els.main,
			props:{
				country: {enabled: false},
				user: this.createDefaultUser()
			}
		});
		this.ui.create.$on('create', (ev) => {this.onUserCreateFormSubmit(ev.detail);});
		this.ui.create.$on('rejectForm', this.goList.bind(this));
	}

	runDetails(params) {
		this.setBreadcrumbs([
			{
				title: 'Просмотр пользователя',
				url: `/user/${params[0]}`
			}
		]);

		if (this.ui.details) {
			return;
		} else {
			this.$destroyUI();
		}
		this.make.user({_id: params[0]}).$get().then((res)=>{
			if(res.status === 'ok'){
				this.ui.details = new UserUIDetails({
					target: this.els.main,
					props:{
						user: notFramework.notCommon.stripProxy(res.result)
					}
				});
			}else{
				this.ui.error = new UserUIErrorMessage({
					target: this.els.main,
					props:{
						title: 		'Произошла ошибка',
						message: 	res.error?res.error:ERROR_DEFAULT
					}
				});
			}
		})
			.catch(this.error.bind(this));
	}

	runUpdate(params) {
		this.setBreadcrumbs([
			{
				title: 'Редактирование данных',
				url: `/user/${params[0]}/update`
			}
		]);

		if (this.ui.update) {
			return;
		} else {
			this.$destroyUI();
		}
		this.make.user({_id: params[0]}).$get().then((res)=>{
			if(res.status === 'ok'){
				this.setBreadcrumbs([
					{
						title: `Редактирование данных ${res.result.userId}#${res.result.username}`,
						url: `/user/${params[0]}/update`
					}
				]);

				this.ui.update = new UserUIEdit({
					target: this.els.main,
					props:{
						mode: 			'update',
						user: 			notFramework.notCommon.stripProxy(res.result)
					}
				});
				this.ui.update.$on('update', (ev) => {this.onUserUpdateFormSubmit(ev.detail);});
				this.ui.update.$on('rejectForm', this.goList.bind(this));
			}else{
				this.ui.error = new UserUIErrorMessage({
					target: this.els.main,
					props:{
						title: 		'Произошла ошибка',
						message: 	res.error?res.error:ERROR_DEFAULT
					}
				});
			}
		})
			.catch(this.error.bind(this));
	}

	runDelete(params){
		this.setBreadcrumbs([
			{
				title: 'Удаление',
				url: `/user/${params[0]}/delete`
			}
		]);

		if (confirm('Удалить пользователя?')) {
			this.make.user({_id: params[0]}).$delete()
				.then(()=>{
					this.goList();
				})
				.catch((e)=>{
					this.error(e);
					this.goList();
				});
		}else{
			this.goList();
		}
	}

	runList(params) {
		this.setBreadcrumbs([
			{
				title: 'Список',
				url: `/user`
			}
		]);

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
					path: ':userID',
					title: 'ID',
					searchable: true,
					sortable: true
				},{
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
			delete this.ui[name];
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

	createDefaultUser(){
		return {
			username: 	'',
			email: 			'',
			telephone: 	'',
			password: 	'',
			active: 		true,
			country:		'ru',
			role: 			['user']
		};
	}

	onUserCreateFormSubmit(user){
		user.country = 'ru';
		this.ui.create.setLoading();
		this.make.user(user).$create()
			.then((res)=>{
				this.log(res);
				this.showResult(this.ui.create, res);
				if(!UserCommon.isError(res) && !res.error){
					setTimeout(() => this.goList(this.app), 3000);
				}
			})
			.catch((e)=>{
				this.showResult(this.ui.create, e);
			});
	}

	onUserUpdateFormSubmit(user){
		user.country = 'ru';
		this.ui.update.setLoading();
		this.make.user(user).$update()
			.then((res)=>{
				this.showResult(this.ui.update, res);
				if(!UserCommon.isError(res) && !res.error){
					setTimeout(() => this.goList(this.app), 3000);
				}
			})
			.catch((e)=>{
				this.showResult(this.ui.update, e);
			});
	}

	showResult(ui, res) {
		ui.resetLoading();
		if(UserCommon.isError(res)){
			notFramework.notCommon.report(res);
		}else{
			if(res.errors && Object.keys(res.errors).length > 0){
				if (!Array.isArray(res.error)){
					res.error = [];
				}
				Object.keys(res.errors).forEach((fieldName)=>{
					ui.setFieldInvalid(fieldName, res.errors[fieldName]);
					res.error.push(...res.errors[fieldName]);
				});
			}
			if(res.error){
				ui.setFormError(res.error);
			}
			if(!res.error ){
				ui.showSuccess();
			}
		}
	}


}

export default ncUser;
