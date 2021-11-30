
module.exports = ({
		routes,
		config,
		JWT,
		notNode,
		expect,
		stubApp,
		stubResponse,
		stubRequest,
		stubModuleEnv,
		modelsEnv,
		User
})=>{
	const testUser = {
		_id: '0987654321',
		username: 'test',
		email: 'test@mail.com',
		emailConfirmed: true,
		created: Date.now,
		role: 'root',
		active: true,
		country: 'ru'
	};

	describe('routes/user/_delete', function()  {
		it('ok', async () => {
			let prepared = {_id: '_id_value'};
			notNode.Application = stubApp({
				...modelsEnv,
				logics: {
					'not-user//User': {
						async delete(params) {
							expect(params).to.be.deep.equal(prepared);
						}
					}
				}
			});
			stubModuleEnv(routes, modelsEnv);
			await routes._delete({}, {}, () => {}, prepared);
		});

	});

};
