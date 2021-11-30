import ncUController from '../common/ncUController.js';

import UserCommon from '../common/user.js';
import LoginComponent from './login.svelte';

class ncLogin extends ncUController {
	constructor(app) {
		super(app, 'Login');
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

	buildPage() {
		this.item = this.initItem();
		const target = document.querySelector(this.app.getOptions('modules.user.loginFormContainerSelector'));
		if(!target){
			location.href = '/login';
		}
		target.innerHTML = '';
		this.formUI = new LoginComponent({
			target,
			props: {
				user:   this.item,
				login:  {
					enabled: false,
					required: false,
					value: '',
				},
				MODES: this.app.getOptions('modules.user.loginForm.modes', ['login'])
			}
		});
		this.formUI.$on('rejectLogin', ()=>{
			window.location.assign('/');
		});
		this.formUI.$on('login', ({detail})=>{
			this.item.setAttrs(detail);
			this.formUI.setLoading();
			this.item.$login({
				username: detail.username,
				password: detail.password,
				email: detail.email,
				tel: detail.tel,
			})
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

		this.formUI.$on('loginByCode', ({detail})=>{
			this.item.setAttrs(detail);
			this.formUI.setLoading();
			this.item.$loginByCode()
				.then(this.showResult.bind(this))
				.catch(this.showResult.bind(this));
		});
	}
}

export default ncLogin;
