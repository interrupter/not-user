import vUsername from '../../fields/validators/username.js';
import vEmail from '../../fields/validators/email.js';
import vTelephone from '../../fields/validators/telephone.js';
import vPassword from '../../fields/validators/password.js';
import vCode from '../../fields/validators/code.js';
import vRole from '../../fields/validators/role.js';
import vCountry from '../../fields/validators/country.js';
import vActive from '../../fields/validators/active.js';

const Validators = {
  //val - value of field
  //env - resources (constants, config reader, third party libs) needed for validation and provided from module level
  //(val:any, env: Object)=>Promise<Boolean>
  fields: {
    username:   vUsername,
    password:   vPassword,
    telephone:  vTelephone,
    email:      vEmail,
    code:       vCode,
    role:       vRole,
    country:    vCountry,
    active:     vActive,
  },
  //form - object with form values
  //env - resources needed for validation and provided from module level
  //(form:Object, env: Object)=>Promise<Boolean>
  forms:{
    create:[
      async(data, errors/*, env*/)=>{
        if (data.password !== data.passwordRepeat) {
          errors.clean = false;
          if (!Array.isArray(errors.fields.passwordRepeat)){
            errors.fields.passwordRepeat = ['Пароли должны совпадать'];
            errors.form.errors.push('Некоторые поля заполнены некорректно');
          }
        }
      }
    ],
    register:[
      async(data, errors/*, env*/)=>{
        if (data.password !== data.passwordRepeat) {
          errors.clean = false;
          errors.fields.passwordRepeat = ['Пароли должны совпадать'];
          errors.form.push('Некоторые поля заполнены некорректно');
        }
      }
    ]
  }
};

export default Validators;
