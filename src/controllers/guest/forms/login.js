import {Frame, notCommon} from 'not-bulma';
const {notForm} = Frame;

import ValidatorsLib from '../../common/validators.js';

export default class LoginForm extends notForm{
  constructor({data = {}, options = {}}){
    options.action = 'login';
    options.model = 'user';
    super({
      name: 'Login',
      options,
      data
    });
    //events after user button actions
    this.on('submit', e => this.onSubmit(e));
    this.on('reject', () => {
      location.href = '/';
    });
    this.on('success', () => {
      location.href = '/dashboard';
    });
  }

  getFormValidators(){
    return notCommon.getApp().getService('nsUser').augmentValidators(ValidatorsLib);
  }

  async onSubmit(data){
    try{
      this.setLoading();
      const result = await this.getModel('user', data)[`$${this.getFormAction()}`]();
      //maybe error or success
      this.processResult(result);
    }catch(e){
      //if exactly error
      this.processResult(e);
    }finally{
      //should unlock UI anyway
      this.resetLoading();
    }
  }

}
