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

<% for(var i = 0; i < mods.length; i++) {%>
import * as mod_<%=i%>
from '<%=mods[i]%>';
appDefaultOptions = notCommon.absorbModule({
  defaultConf: appDefaultOptions,
  mod: mod_<%=i%>,
  services, uis, wsc, fields
});
<% } %>

COMPONENTS.import(uis);

import 'bulma';

<% for(var i = 0; i < scss.length; i++) {%>
import '<%=scss[i]%>';
<% } %>

appDefaultOptions.services = services;
appDefaultOptions.wsc = wsc;

notCommon.startApp(() => new notApp(appDefaultOptions));
