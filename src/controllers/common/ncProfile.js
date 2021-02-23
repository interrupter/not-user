import UserCommon from '../common/user.js';
import UserUIEdit from '../common/ui.edit.svelte';
import UserUIChangePassword from '../common/ui.change.password.svelte';

import {
	ncCRUD,
	notCommon
} from 'not-bulma';

const MODULE_NAME = '';
const MODEL_NAME = 'User';

const LABELS = {
	single: 'Профиль',
	plural: 'Профили'
};

class ncProfile extends ncCRUD {
	constructor(app, params) {
		super(app, `${MODULE_NAME}.ncProfile`);
		this.setModuleName(MODULE_NAME.toLowerCase());
		this.setModelName(MODEL_NAME.toLowerCase());
		this.setOptions('names', LABELS);
    this.setOptions('Validators', {});
    this.setOptions('params', params);
		this.start();
		return this;
	}

	runList(){
		this.runUpdate();
	}

	runUpdate() {
		if (this.ui.update) {
			return;
		} else {
			this.$destroyUI();
		}
		this.getModel()({}).$profile().then((res) => {
			if (res.status === 'ok') {
				this.ui.update = new UserUIEdit({
					target: this.els.main,
					props: {
						own: true,
						mode: 'update',
						user: notCommon.stripProxy(res.result)
					}
				});
				this.ui.update.$on('goChangePassword', () => {
					this.runChangePassword();
				});
				this.ui.update.$on('update', (ev) => {
					this.onUserUpdateFormSubmit(ev.detail);
				});
				this.ui.update.$on('rejectForm', () => UserCommon.goDashboard(this.app));
			} else {
				this.showErrorMessage(res);
			}
		})
			.catch((err)=>{
				this.showErrorMessage({ error: err.message });
			});
	}

	runChangePassword() {
		try{
			if (this.ui.changePassword) {
				return;
			} else {
				this.$destroyUI();
			}
			this.ui.changePassword = new UserUIChangePassword({
				target: this.els.main,
				props: {}
			});
			this.ui.changePassword.$on('changePassword', (ev) => {
				this.onUserChangePassword({ ...ev.detail });
			});
			this.ui.changePassword.$on('reject', () => this.goProfile());
		}catch(e){
			this.showErrorMessage({ error: e.message });
		}
	}

	onUserChangePassword(data){
		this.getModel()(data).$changePassword()
			.then(this.ui.changePassword.showRequestResult.bind(this))
			.catch((e)=>{
				this.showErrorMessage({ error: e.message });
			});
	}

	goProfile() {
		this.$destroyUI();
		this.route();
	}

	onUserUpdateFormSubmit(user) {
		this.ui.update.setLoading();
		this.getModel()(user).$update()
			.then((res) => {
				this.log(res);
				this.showResult(this.ui.update, res);
				if (!UserCommon.isError(res) && !res.error) {
					setTimeout(() => this.goProfile(), 3000);
				}
			})
			.catch((e) => {
				this.showResult(this.ui.update, e);
			});
	}

	showResult(ui, res) {
		ui.resetLoading();
		if (UserCommon.isError(res)) {
			notCommon.report(res);
		} else {
			if (res.errors && Object.keys(res.errors).length > 0) {
				if (!Array.isArray(res.error)) {
					res.error = [];
				}
				Object.keys(res.errors).forEach((fieldName) => {
					ui.setFieldInvalid(fieldName, res.errors[fieldName]);
					res.error.push(...res.errors[fieldName]);
				});
			}
			if (res.error) {
				ui.setFormError(res.error);
			}
			if (!res.error) {
				ui.showSuccess();
			}
		}
	}


}

export default ncProfile;
