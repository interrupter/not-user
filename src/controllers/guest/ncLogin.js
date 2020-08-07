
import {
	notController,
	notCommon
} from 'not-framework';

import UserCommon from '../common/user.js';
import LoginComponent from './login.svelte';

class ncLogin extends notController {
	constructor(app, params) {
		notCommon.log('init site app ', params, 'login');
		super(app);
		this.setModuleName('user');
		this.buildPage();
		return this;
	}

	initItem() {
		let newRecord = this.make.user({
			'_id': undefined,
			username: '',
			tel: '',
			code: '',
			email: '',
			password: ''
		});
		return newRecord;
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

	buildPage() {
		this.item = this.initItem();
		this.formUI = new LoginComponent({
			target: document.querySelector(this.app.getOptions('modules.user.loginFormContainerSelector')),
			props: {
				user:   this.item,
				login:  {
					enabled: false,
					required: false,
					value: '',
				}
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

		this.formUI.$on('requestLoginCodeOnEmail', ({detail})=>{
			this.item.setAttrs(detail);
			this.formUI.setLoading();
			this.item.$requestLoginCodeOnEmail()
				.then(this.showResult.bind(this))
				.catch(this.showResult.bind(this));
		});
	}
}

export default ncLogin;
