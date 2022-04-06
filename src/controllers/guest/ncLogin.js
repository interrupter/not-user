import ncFormFrame from './ncFormFrame.js';

import LoginForm from './forms/login.js';
import LoginByCodeForm from './forms/loginByCode.js';
import RequestLoginCodeOnTelephoneForm from './forms/requestLoginCodeOnTelephone.js';
import RequestLoginCodeOnEmailForm from './forms/requestLoginCodeOnEmail.js';


const FORMS = [
  {
    mode: 'login',
    title: 'not-user:form_mode_login_label',
    form: LoginForm
  },
  {
    mode: 'requestLoginCodeOnEmail',
    title: 'not-user:form_mode_requestLoginCodeOnEmail_label',
    form: RequestLoginCodeOnEmailForm
  },
  {
    mode: 'requestLoginCodeOnTelephone',
    title: 'not-user:form_mode_requestLoginCodeOnTelephone_label',
    form: RequestLoginCodeOnTelephoneForm
  },
  {
    mode: 'loginByCode',
    title: 'not-user:form_mode_loginByCode_label',
    form: LoginByCodeForm
  }
];

class ncLogin extends ncFormFrame {
  constructor(app) {
    super({
      app,
      name: 'Login',
      mode: 'login'
    });
  }

  getTargetContainer() {
    return document.querySelector(this.app.getOptions('modules.user.loginFormContainerSelector'));
  }

  getMainURL() {
    return '/login';
  }

  getFormsSet() {
    return FORMS;
  }

}

export default ncLogin;
