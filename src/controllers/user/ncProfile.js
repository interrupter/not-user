/* global notFramework */

const ERROR_DEFAULT = 'Что пошло не так.';

import UserCommon from '../common/user.js';
import UserUIEdit from '../common/ui.edit.svelte';
import UserUIErrorMessage from '../common/ui.error.svelte';

class ncProfile extends notFramework.notController {
	constructor(app, params) {
		notFramework.notCommon.log('init site app ', params, 'profile');
		super(app);
		this.ui = {};
		this.els = {};
		this.setModuleName('user');
		this.buildFrame();
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
		return this.runUpdate(params);
	}

	runUpdate(params) {
		if (this.ui.update) {
			return;
		} else {
			this.$destroyUI();
		}
		this.make.user({_id: params[0]}).$profile().then((res)=>{
			if(res.status === 'ok'){
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

	$destroyUI() {
		for (let name in this.ui) {
			this.ui[name].$destroy && this.ui[name].$destroy();
		}
	}

	goProfile(){
		this.app.getWorking('router').navigate('/profile');
	}

	onUserUpdateFormSubmit(user){
		user.country = 'ru';
		this.ui.update.setLoading();
		this.make.user(user).$update()
			.then((res)=>{
				this.log(res);
				this.showResult(this.ui.update, res);
				if(UserCommon.isError(res)){
					setTimeout(() => UserCommon.goDashboard(this.app), 3000);
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

export default ncProfile;
