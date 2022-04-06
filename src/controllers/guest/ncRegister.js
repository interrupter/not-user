import ncFormFrame from './ncFormFrame.js';

import RegisterForm from './forms/register.js';

const FORMS = [
  {
    mode: 'register',
    title: 'not-user:form_mode_register_label',
    form: RegisterForm
  }];

class ncRegister extends ncFormFrame {
  constructor(app) {
    super({app, name: 'Register', mode: 'register'});
  }

  getTargetContainer(){
    return document.querySelector(this.app.getOptions('modules.user.registerFormContainerSelector'));
  }

  getMainURL(){
    return '/register';
  }

  getFormsSet() {
    return FORMS;
  }

}

export default ncRegister;
