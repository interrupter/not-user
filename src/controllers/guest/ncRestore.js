import ncUController from '../common/ncUController.js';

import UserCommon from '../common/user.js';
import RestoreComponent from './restore.svelte';

class ncRestore extends ncUController {
	constructor(app) {
		super(app, 'Restore');
		this.buildPage();
		return this;
	}

	initItem() {
		return {
			email: ''
		};
	}

	buildPage() {
		this.item = this.initItem();
		const target = document.querySelector(this.app.getOptions('modules.user.loginFormContainerSelector'));
		if(!target){return;}
		target.innerHTML = '';
		this.formUI = new RestoreComponent({
			target,
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
