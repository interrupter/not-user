import {
  notFormUtils
} from 'not-bulma';

import UIRole from './role.svelte';
import UISelectUser from './UISelectUser.svelte';

notFormUtils.addComponent('UIRole', UIRole);
notFormUtils.addComponent('UISelectUser', UISelectUser);

import nsUser from './nsUser.js';

const services = { nsUser };

const manifest = {};

import * as User from './user.js';
export {
  services,
  manifest, User,
};
