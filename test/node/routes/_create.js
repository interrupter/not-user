const {notRequestError} = require('not-error');

const notNode = require('not-node');
module.exports = ({
    expect,
    routes,
    stubRequest,
    stubApp,
})=>{
  const testUser = {
    username: 'test',
    email: 'test@mail.com',
    emailConfirmed: true,
    created: Date.now,
    role: 'root',
    active: true,
    country: 'ru'
  };

  const newUser = {
    username:   'new_one',
    email: 			'req.body.email',
    password: 	'req.body.password',
    role: 			'req.body.role',
    tel: 				'req.body.tel',
    country: 		'req.body.country',
    active:     false
  }

  describe('routes/user/_create', function()  {
    it('ok', async () => {
      let prepared = {some:'data'};
      notNode.Application = stubApp({
        logics: {
          'not-user//User': {
            async createUser(params) {
              expect(params).to.deep.equal(prepared);
              return {registration:1};
            }
          }
        }
      });
      let
        req = stubRequest({
          params: {
            _id: '_id_value'
          },
          user: testUser,
          body: newUser
        });
      await routes._create(req, {}, ()=>{},prepared);
    });

  });

};
