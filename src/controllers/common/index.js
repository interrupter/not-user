import UIRole from './ui.role.svelte';
import UISelectUser from './UISelectUser.svelte';
import UIUserInlineInfo from './UIUserInlineInfo.svelte';

const uis = {UIRole, UISelectUser, UIUserInlineInfo};

import nsUser from './nsUser.js';

const services = { nsUser };
const manifest = {};

import * as User from './user.js';
export {
  uis,
  services,
  manifest, User,
};
