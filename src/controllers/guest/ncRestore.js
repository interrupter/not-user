/* global notFramework */

import UserCommon from '../common/user.js';
import RestoreComponent from './restore.svelte';

class ncRestore extends notFramework.notController {
	constructor(app, params) {
		notFramework.notCommon.log('init site app ', params, 'restore');
		super(app);
		this.setModuleName('user');
		this.buildPage();
		return this;
	}

	initItem() {
		return {
			email: ''
		};
	}

	showResult(res) {
		this.formUI.resetLoading();
		if(UserCommon.isError(res)){
			notFramework.notCommon.report(res);
		}else{
			if(res.errors && Object.keys(res.errors).length > 0){
				if (!Array.isArray(res.error)){
					res.error = [];
				}
				Object.keys(res.errors).forEach((fieldName)=>{
					this.formUI.setFieldInvalid(fieldName, res.errors[fieldName]);
					res.error.push(...res.errors[fieldName]);
				});
			}
			if(res.error){
				this.formUI.setFormError(res.error);
			}
			if(!res.error ){
				this.formUI.showSuccess();
			}
		}
	}

	buildPage() {
		this.item = this.initItem();
		this.formUI = new RestoreComponent({
			target: document.querySelector(this.app.getOptions('modules.user.loginFormContainerSelector')),
			props: {
				user:   this.item
			}
		});
		this.formUI.$on('login', ({detail})=>{
			this.item.setAttrs(detail);
			this.formUI.setLoading();
			this.item.$login()
				.then((res)=>{
					this.showResult(res);
					if(!res.error){
						setTimeout(() => UserCommon.goDashboard(this.app), 3000);
					}
				})
				.catch(this.showResult.bind(this));
		});
	}
}

export default ncRestore;
