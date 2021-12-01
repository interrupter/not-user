import {Form} from 'not-bulma';

function passValidator(value) {
  let errors = [];
  if (!Form.validator.isLength(value, {
      min: 6
    })) {
    errors.push('Минимальный размер пароля 6 знаков');
  }
  return errors;
}


const Validators = {
  fields: {
    username(value) {
      let errors = [];
      if (!Form.validator.isLength(value, {
          min: 6
        })) {
        errors.push('Минимальная длина 6 знаков');
      }
      return errors;
    },
    password: passValidator,
    passwordRepeat: passValidator,
    telephone(value) {
      let errors = [];
      const str = value.replaceAll(/[^0-9\+]/g,'');
      if (!Form.validator.isMobilePhone(str)) {
        errors.push('Необходимо ввести полный номер телефона из 11 цифр');
      }
      return errors;
    },
    email(value) {
      let errors = [];
      if (!Form.validator.isEmail(value)) {
        errors.push('Необходимо ввести email адрес');
      }
      return errors;
    },
    code(value) {
      let errors = [];
      if (!Form.validator.isUUID(value, 4)) {
        errors.push('Необходимо ввести валидный код');
      }
      return errors;
    }
  },
  forms:{
    register(form) {
      let errors = {
        clean: true,
        fields: {},
        form: []
      };
      if (form.password !== form.passwordRepeat) {
        errors.clean = false;
        errors.fields.password = ['Пароли должны совпадать'];
        errors.fields.passwordRepeat = ['Пароли должны совпадать'];
        errors.form.push('Некоторые поля заполнены некорректно');
      }
      return errors;
    },
    edit(form) {
      let errors = {
        clean: true,
        fields: {},
        form: []
      };
      if (form.password !== form.passwordRepeat) {
        errors.clean = false;
        errors.fields.password = ['Пароли должны совпадать'];
        errors.fields.passwordRepeat = ['Пароли должны совпадать'];
        errors.form.push('Некоторые поля заполнены некорректно');
      }
      return errors;
    }
  }
};

export default Validators;
