import Validators from '../common/validators.js';

import {
  ncCRUD, Form
} from 'not-bulma';

//Form.addVariants('country', [{id: 'ru', title: 'RU'}]);

const MODULE_NAME = '';
const MODEL_NAME = 'User';

const LABELS = {
  plural: 'Пользователи',
  single: 'Пользователь',
};

class ncUser extends ncCRUD {
  static MODULE_NAME = MODULE_NAME;
  static MODEL_NAME = MODEL_NAME;
  constructor(app, params) {
    super(app, `${MODULE_NAME}.${MODEL_NAME}`);
    this.setModuleName(MODULE_NAME.toLowerCase());
    this.setModelName(MODEL_NAME.toLowerCase());
    this.setOptions('names', LABELS);
    this.setOptions('Validators', app.getService('nsUser').augmentValidators(Validators));
    this.setOptions('params', params);
    this.setOptions('list', {
      interface: {
        combined: true,
        factory: this.make.user
      },
      endless: false,
      sorter: {
        userID: -1
      },
      actions: [{
        title: 'Создать',
        action: this.goCreate.bind(this)
      }],
      showSearch: true,
      idField: '_id',
      fields: [{
        path: ':userID',
        title: 'ID',
        searchable: true,
        sortable: true
      }, {
        path: ':username',
        title: 'Username',
        searchable: true,
        sortable: true
      }, {
        path: ':email',
        title: 'Email',
        searchable: true,
        sortable: true,
        hideOnMobile: true
      }, {
        path: ':emailConfirmed',
        title: 'Подтверждён',
        type: 'boolean',
        hideOnMobile: true
      }, {
        path: ':role',
        title: 'Роли',
        preprocessor: (value) => {
          if (Array.isArray(value)) {
            return value.join(', ');
          } else {
            return value;
          }
        }
      }, {
        path: ':_id',
        title: 'Действия',
        type: 'button',
        preprocessor: (value) => {
          return [{
            action: this.goDetails.bind(this, value),
            title: 'Подробнее',
            size: 'small'
          },
          {
            action: this.goUpdate.bind(this, value),
            title: 'Изменить',
            size: 'small'
          },
          {
            action: this.goDelete.bind(this, value),
            type: 'danger',
            title: 'Удалить',
            size: 'small',
            style: 'outlined'
          }
          ];
        },
      }]
    });

    this.preloadRoles()
      .then(()=>this.start())
      .catch(this.report);
    return this;
  }

  async preloadRoles(){
    try{
      let results = await this.make.role({}).$listAll();
      if(results.status === 'ok'){
        const data = results.result;
        Form.addVariants('role', [
          ...(data.primary.filter(name => !['root', 'guest'].includes(name)).map(name => {
            return {
              id: name,
              title: name,
              type: 'warning'
            };
          })),
          ...(data.secondary.map(name => {
            return {
              id: name,
              title: name,
              type: 'info'
            };
          }))
        ]);
      }else{
        throw new Error(results.message);
      }
    }catch(e){
      this.report(e);
    }
  }

  createDefault() {
    return {
      username: '',
      email: '',
      telephone: '',
      password: '',
      active: true,
      country: 'ru',
      role: ['user']
    };
  }

}

export default ncUser;
