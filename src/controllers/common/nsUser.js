import {Form, FormValidationBuilder} from 'not-bulma';

export default class nsUser{
  constructor(app){
    this.app = app;
    this.validatorsBuilder = new FormValidationBuilder(app, () => this.getValidatorEnv() );
  }

  destroy(){
    delete this.app;
  }

  augmentValidators(validators){
    return this.validatorsBuilder.augmentValidators(validators);
  }

  getValidatorEnv(){
    return {
      config:   this.app.getConfigReaderForModule('user'),
      validator: Form.validator
    };
  }
}
