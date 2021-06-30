import {
	notController,
	notCommon
} from 'not-bulma';

class ncLogout extends notController {
	constructor(app) {
		super(app, 'User.logout');
		this.setModelName('user');
		if (confirm('Хотите выйти?')) {
			this.make.user({}).$logout()
				.then(() => {
					app.emit('user.logout');
					document.location.href = '/login';
				})
				.catch((err) => {
					notCommon.report(err);
				});
		} else {
			window.history.back();
		}
		return this;
	}
}

export default ncLogout;
