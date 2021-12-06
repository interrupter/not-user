import ncLogout from '../common/ncLogout.js';
import ncProfile from '../common/ncProfile.js';

let manifest = {
  router: {
    manifest: [
      {
        paths: ['dashboard/logout'],
        controller: ncLogout
      },
      {
        paths: ['dashboard/profile'],
        controller: ncProfile
      }
    ]
  },
  templates: {},
  paths: {},
  menu: {
    top: {
      sections: [{
        id: 		'account',
        title: 	'Аккаунт',
        place: 	'end'
      }],
      items: [{
        id: 			'account.profile',
        section: 	'account',
        title: 		'Профиль',
        url: 			'/dashboard/profile'
      },{
        id: 				'account.logout',
        break: 			true,
        section: 		'account',
        priority: 	-100,
        title: 			'Выход',
        url: 				'/dashboard/logout'
      }]
    }
  },
};

export {ncLogout, manifest};
