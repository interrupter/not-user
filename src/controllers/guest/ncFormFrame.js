import validators from '../common/validators.js';

import UserCommon from '../common/user.js';
import FormFrameComponent from './form.frame.svelte';

import {notController, Form} from 'not-bulma';

class ncFormFrame extends notController {
  constructor({
    app, name, mode
  }) {
    super(app, `${name}Form`);
    this.setModelName('user');
    this.mode = mode;
    this.buildFrame(this.mode);
    this.buildForm(this.mode);
    return this;
  }

  buildFrame(mode) {
    const target = this.getTargetContainer();
    if(!target){
      location.href = this.getMainURL();
    }
    target.innerHTML = '';
    this.frame = new FormFrameComponent({
      target,
      props: this.getFrameProps(mode)
    });
    this.frame.$on('mode', (ev)=>{this.setMode(ev.detail);});
  }

  buildForm(action) {
    this.form = Form.build({
      target: document.querySelector(`.user-frame-form`),
      manifest: this.app.getInterfaceManifest('user'),
      action,
      options: {},
      validators: this.app.getService('nsUser').augmentValidators(validators),
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
      this.processResult(result, fields);
    }catch(e){
      this.frame.$set({ status: 'error', message: e.message });
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

  processResult(result){
    if(result.status === 'ok'){
      this.frame.$set({ status: 'ok', message: result.message });
      this.form.showSuccess();
      setTimeout(
        () => UserCommon.goDashboard(this.app),
        UserCommon.getRedirectTimeout(this.app)
      );
    }else{
      this.setFormErrors(result);
    }
  }

  setFormErrors(result){
    const status = {
      form: [],
      fields: {}
    };
    if(result.message){
      result.form.push(result.message);
    }
    if(result.errors && Object.keys(result.errors).length > 0 ){
      result.errors = {...result.errors};
    }
    this.form.updateFormValidationStatus(status);
  }

}

export default ncFormFrame;
