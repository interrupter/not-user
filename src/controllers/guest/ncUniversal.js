import ncUController from '../common/ncUController.js';

import LoginComponent from './login.forms.frame.svelte';

import {Form} from 'not-bulma';

class ncUniversal extends ncUController {
	constructor(app) {
		super(app, 'Form');
		this.mode = 'login';
		this.buildFrame(this.mode);
		this.buildForm(this.mode);
		return this;
	}

	buildFrame(mode) {
		const target = document.querySelector(this.app.getOptions('modules.user.loginFormContainerSelector'));
		if(!target){
			location.href = '/login';
		}
		target.innerHTML = '';
		this.frame = new LoginComponent({
			target,
			props: {
				mode,
				MODES: this.app.getOptions('modules.user.loginForm.modes', ['login'])
			}
		});
		this.frame.$on('mode', (ev)=>{this.setMode(ev.detail);});
	}

	buildForm(action = 'login') {
		this.form = Form.build({
			target: document.querySelector('.user-login-form'),
			manifest: this.app.getInterfaceManifest('user'),
			action,
			options: {},
			validators: {},
			data:{}
		});
		this.form.$on('submit', (ev) => this.submit(ev.detail));
		this.form.$on('reject', () => {location.href = '/';});
	}

	async submit(data){
		try{
			const fields = Object.keys(data);
			this.form.setLoading();
			const result = await this.getModel('user', data)[`$${this.mode}`]();
			if(result.status === 'ok'){
				this.frame.$set({status: 'ok', message: result.message});
				this.form.showSuccess();
			}else{
				this.setFormErrors(result, fields);
			}
		}catch(e){
			this.frame.$set({status: 'error', message: e.message});
		}finally{
			this.form.resetLoading();
		}
	}

	setMode(val){
		if(val !== this.mode){
			this.mode = val;
			this.form.$destroy();
			this.buildForm(this.mode);
		}
	}

	setFormErrors(result, fields){
		if(result.message){
			this.frame.$set({
				status: 'error',
				message: result.message
			});
		}
		if(result.errors && Object.keys(result.errors) > 0 ){
			fields.forEach(fieldName => {
				if(Object.keys(result.errors).includes(fieldName)){
					this.form.setFormFieldInvalid(fieldName, result.errors[fieldName]);
				}else{
					this.form.setFormFieldValid(fieldName);
				}
			});
		}else{
			fields.forEach(fieldName => {
				this.form.setFormFieldValid(fieldName);
			});
		}
	}

}

export default ncUniversal;
