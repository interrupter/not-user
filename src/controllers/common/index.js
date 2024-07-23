import UIRole from './ui.role.svelte';
import UISelectUser from './UISelectUser.svelte';
import UISelectUserInline from './UISelectUserInline.svelte';
import UIUserInlineInfo from './UIUserInlineInfo.svelte';

const uis = {UIRole, UISelectUser, UISelectUserInline, UIUserInlineInfo};

import nsUser from './nsUser.js';

const services = { nsUser };
const manifest = {};

import * as User from './user.js';
export {
  uis,
  services,
  manifest, User,
};
