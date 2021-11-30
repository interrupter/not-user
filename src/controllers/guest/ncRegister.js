import ncUController from '../common/ncUController.js';

import UserCommon from '../common/user.js';
import RegisterComponent from './register.svelte';


class ncRegister extends ncUController {
	constructor(app) {
		super(app, 'Register');
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

	buildPage() {
		this.item = this.initItem();
		const target = document.querySelector(this.app.getOptions('modules.user.registerFormContainerSelector'));
		if(!target){
			location.href = '/register';
		}
		target.innerHTML = '';
		this.formUI = new RegisterComponent({
			target,
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
}

export default ncRegister;
