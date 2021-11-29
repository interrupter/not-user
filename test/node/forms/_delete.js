
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
			let res = stubResponse({
					json(result) {
						expect(result.error).to.be.undefined;
						expect(this._status).to.be.equal(200);
					}
				}),
				req = stubRequest({
					params: {
						_id: '_id_value'
					},
					user: testUser,
					body:{
						username: 'new_one',
						active: false
					}
				});
			notNode.Application = stubApp({
				...modelsEnv,
				logics: {
					'not-user//User': {
						async delete(params) {
							expect(params).to.have.keys(
								[
									'activeUser',
									'activeUserId',
									'targetUserId',
									'ip'
								]
							);
							expect(params.activeUserId).to.be.equal('0987654321');
							expect(params.targetUserId).to.be.equal('_id_value');
							expect(params.activeUser).to.be.deep.equal(testUser);
							return {status: 'ok'};
						}
					}
				}
			});
			stubModuleEnv(routes, modelsEnv);
			const result = await routes._delete(req, res, (err) => {
				console.error(err);
				expect(false).to.be.ok;
			}, {_id: '_id_value' });

		});

		it('exception', async () => {
			let res = stubResponse({}),
				req = stubRequest({});
			stubModuleEnv(routes, modelsEnv);
			notNode.Application = stubApp({
				...modelsEnv,
				logics: {
					'not-user//User': {
						async delete() {
							throw new Error('Some error!');
						}
					}
				}
			});
			await routes._delete(req, res, (err) => {
				expect(err).to.be.instanceof(Error);
			});
		});
	});

};
