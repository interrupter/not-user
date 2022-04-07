import {
  notFormUtils
} from 'not-bulma';

import UIRole from './role.svelte';

notFormUtils.addComponent('UIRole', UIRole);

import nsUser from './nsUser.js';

const services = { nsUser };

const manifest = {};

import * as User from './user.js';
export {
  services,
  manifest, User,
};
