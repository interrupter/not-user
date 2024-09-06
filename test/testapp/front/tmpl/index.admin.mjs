import {
  Frame
} from 'not-bulma';

window.NOT_NODE_ERROR_URL_BROWSER = '/api/key/collect';

const {notCommon, notApp, COMPONENTS} = Frame;

notCommon.register('backlog', true);

window.dumpBacklog = notCommon.dumpBacklog.bind(notCommon);

import notErrorReporter from 'not-error/src/reporter.browser.mjs';

window.addEventListener('error', (e) => {
  new notErrorReporter().report(e);
}, true);


//Базовые настройки
let appDefaultOptions = {
  //url from which will take interfaceManifest json file
  manifestURL: '/api/manifest',
  //routes for client-side
  router: {
    root: '/',
    manifest: [],
    index: ''
  },
  language: 'ru',
  crud: {
    navigateBackAfter: ['create', 'update', 'delete']
  },
  modules: {
    user: {
      redirectTimout: 1000,
      afterLoginURL: '/dashboard',
      loginModes: [
          'login',
          'requestLoginCodeOnEmail',
          'loginByCode'
      ],
      colorsOfRoles: {
        //style_color_name:[string]
        primary:{
          danger: ['guest'],
          warning: ['user'],
          link: ['client'],        
          success: ['admin'],
          primary: ['root'],
        },
        secondary: {
          info: ['confirmed', 'manager', 'hr', 'logist'],          
        }        
      },
      loginFormContainerSelector: '.main-container',
      restoreFormContainerSelector: '.main-container',
      registerFormContainerSelector: '.main-container'
    }
  }
};

let services = {}, uis = {}, wsc = {}, fields = {};


import * as mod_0
from '/home/cypher/proj/not-lib/not-user/node_modules/not-options/src/controllers/common';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_0,
  services, uis, wsc, fields
});

import * as mod_1
from '/home/cypher/proj/not-lib/not-user/node_modules/not-filter/src/controllers/common';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_1,
  services, uis, wsc, fields
});

import * as mod_2
from '/home/cypher/proj/not-lib/not-user/node_modules/not-notification/src/controllers/admin';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_2,
  services, uis, wsc, fields
});

import * as mod_3
from '/home/cypher/proj/not-lib/not-user/node_modules/not-locale/src/controllers/common';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_3,
  services, uis, wsc, fields
});

import * as mod_4
from '/home/cypher/proj/not-lib/not-user/node_modules/not-key/src/controllers/common';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_4,
  services, uis, wsc, fields
});

import * as mod_5
from '/home/cypher/proj/not-lib/not-user/node_modules/not-error/src/controllers/common';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_5,
  services, uis, wsc, fields
});

import * as mod_6
from '/home/cypher/proj/not-lib/not-user/node_modules/not-ws/src/controllers/common';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_6,
  services, uis, wsc, fields
});

import * as mod_7
from '/home/cypher/proj/not-lib/not-user/test/testapp/front/src/common';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_7,
  services, uis, wsc, fields
});

import * as mod_8
from '/home/cypher/proj/not-lib/not-user/test/testapp/front/src/admin/main';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_8,
  services, uis, wsc, fields
});


COMPONENTS.import(uis);

import 'bulma';



appDefaultOptions.services = services;
appDefaultOptions.wsc = wsc;

notCommon.startApp(() => new notApp(appDefaultOptions));
