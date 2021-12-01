import ncFormFrame from './ncFormFrame';

const MODES_TITLES = {
	register: 'not-user:form_mode_register_label'
};

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

	getFrameProps(mode){
		return {
			mode,
			MODES: this.app.getOptions('modules.user.registerForm.modes', ['register']),
			MODES_TITLES
		};
	}

}

export default ncRegister;
