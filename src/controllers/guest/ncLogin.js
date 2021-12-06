import ncFormFrame from './ncFormFrame.js';

const MODES_TITLES = {
  login: 'not-user:form_mode_login_label',
  requestLoginCodeOnEmail: 'not-user:form_mode_requestLoginCodeOnEmail_label',
  requestLoginCodeOnTelephone: 'not-user:form_mode_requestLoginCodeOnTelephone_label',
  loginByCode: 'not-user:form_mode_loginByCode_label'
};

class ncLogin extends ncFormFrame {
  constructor(app) {
    super({app, name: 'Login', mode: 'login'});
  }

  getTargetContainer(){
    return document.querySelector(this.app.getOptions('modules.user.loginFormContainerSelector'));
  }

  getMainURL(){
    return '/login';
  }

  getFrameProps(mode){
    return {
      mode,
      MODES: this.app.getOptions('modules.user.loginForm.modes', ['login']),
      MODES_TITLES
    };
  }

}

export default ncLogin;
