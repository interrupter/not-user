import ncLogin from 		'./ncLogin.js';
import ncRegister from 	'./ncRegister.js';

let manifest = {
  router: {
    manifest: [
      {
        paths: ['login'],
        controller: ncLogin
      },
      {
        paths: ['register'],
        controller: ncRegister
      }
    ]
  },
  templates: {},
  paths: {
    common: '/client/common',
    modules: '/client/modules'
  }
};

export {ncLogin, ncRegister, manifest};
