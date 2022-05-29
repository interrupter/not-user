import notValidationError from 'not-error/src/validation.error.browser.js';
import validator from 'validator';
import {Builder} from 'not-validation';

import vUsername from '../../fields/validators/username.js';
import vEmail from '../../fields/validators/email.js';
import vTelephone from '../../fields/validators/telephone.js';
import vPassword from '../../fields/validators/password.js';
import vCode from '../../fields/validators/code.js';
import vRole from '../../fields/validators/role.js';
import vCountry from '../../fields/validators/country.js';
import vActive from '../../fields/validators/active.js';

const ERR_MSG_FORM_IS_DIRTY = 'not-user:form_is_dirty';
const ERR_MSG_FORM_PASSWORDS_SHOULD_BE_EQUAL = 'not-user:form_passwords_should_be_equal';

const createUserValidation = async (data) => {
  if (data.password !== data.passwordRepeat) {
    throw new notValidationError(ERR_MSG_FORM_PASSWORDS_SHOULD_BE_EQUAL, {
      form: [ERR_MSG_FORM_IS_DIRTY],
      fields: {
        passwordRepeat: [ERR_MSG_FORM_PASSWORDS_SHOULD_BE_EQUAL]
      }
    });
  }
};

const Validators = Builder({
    //val - value of field
    //env - resources (constants, config reader, third party libs) needed for validation and provided from module level
    //(val:any, env: Object)=>Promise<Boolean>
    fields: {
      username: vUsername,
      password: vPassword,
      telephone: vTelephone,
      email: vEmail,
      code: vCode,
      role: vRole,
      country: vCountry,
      active: vActive,
    },
    //form - object with form values
    //env - resources needed for validation and provided from module level
    //(form:Object, env: Object)=>Promise<Boolean>
    forms: {
      create: [createUserValidation],
      register: [createUserValidation]
    }
  },
  () => {
    return {
      validator
    };
  });

export default Validators;
