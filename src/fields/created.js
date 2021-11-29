//дата создания
module.exports = {
	model: {
		type: Date,
		default: Date.now,
		safe: {
			update: ['*'],
			read: ['*']
		}
	}
};
