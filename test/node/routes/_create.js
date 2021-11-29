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
      let
        req = stubRequest({
          params: {
            _id: '_id_value'
          },
          user: testUser,
          body: newUser
        });
      await routes._create(req, {}, ()=>{});
    });

    it('exception', async () => {
      let
        prepared = {some: 'data'},
        req = stubRequest({
          body: {
            email: 'register@mail.org'
          }
        });
        notNode.Application = stubApp({
          logics: {
            'not-user//User': {
              async createUser(params) {
                expect(params).to.be.deep.equal(prepared);
                throw new notRequestError('', {})
              }
            }
          }
        });
      let throwed = false;
      await routes._create(req, {}, (err)=>{
        throwed = true;
        expect(err).to.be.instanceof(notRequestError);
      }, prepared);
      expect(throwed).to.be.true;
    });
  });

};
