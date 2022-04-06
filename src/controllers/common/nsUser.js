import { Builder } from 'not-validation';
import Validator from 'validator';

export default class nsUser{

  constructor(app){
    this.app = app;
  }

  destroy(){
    delete this.app;
  }

  augmentValidators(validators){
    return Builder(validators, () => this.getValidatorEnv());
  }

  getValidatorEnv(){
    return {
      config:   this.app.getConfigReaderForModule('user'),
      validator: Validator
    };
  }
}
