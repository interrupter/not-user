import {
	notController,
	notCommon
} from 'not-framework';

import UserCommon from '../common/user.js';
import RegisterComponent from './register.svelte';


class ncRegister extends notController {
	constructor(app, params) {
		notCommon.log('init site app ', params, 'register');
		super(app);
		this.setModuleName('user');
		this.buildPage();
		return this;
	}

	initItem() {
		return this.make.user({
			'_id': undefined,
			username: '',
			tel: '',
			email: '',
			password: '',
			password2: ''
		});
	}

	showError(e) {
		this.item.error = true;
		this.item.message = e.error;
		notCommon.report(e);
	}

	buildPage() {
		this.item = this.initItem();
		this.formUI = new RegisterComponent({
			target: document.querySelector(this.app.getOptions('modules.user.registerFormContainerSelector')),
			props: {
				user:   this.item,
				login:  {
					enabled: false,
					required: false,
					value: '',
				}
			}
		});

		this.formUI.$on('register', ({detail})=>{
			this.item.setAttrs(detail);
			this.formUI.setLoading();
			this.item.$register()
				.then((res)=>{
					this.showResult(res);
					if(!res.error){
						setTimeout(() => UserCommon.goDashboard(this.app), 3000);
					}
				})
				.catch(this.showResult.bind(this));
		});
	}

	showResult(res) {
		this.formUI.resetLoading();
		if(UserCommon.isError(res)){
			notCommon.report(res);
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
}

export default ncRegister;
