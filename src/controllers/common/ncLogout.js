import {
	notController,
	notCommon
} from 'not-framework';

class ncLogout extends notController {
	constructor(app) {
		super(app);
		this.setModuleName('user');
		if (confirm('Хотите выйти?')) {
			this.make.user({}).$logout()
				.then(() => {
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
