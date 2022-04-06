import {
  Frame
} from 'not-bulma';

const {notController} = Frame;

class ncLogout extends notController {
  constructor(app) {
    super(app, 'User.logout');
    this.setModelName('user');
    if (confirm('Хотите выйти?')) {
      this.make.user({}).$logout()
        .then(() => {
          app.emit('user.logout');
          document.location.href = '/login';
          return true;
        })
        .catch((err) => {
          this.report(err);
        });
    } else {
      window.history.back();
    }
    return this;
  }
}

export default ncLogout;
