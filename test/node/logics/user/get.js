const mongoose = require('mongoose');
const {
  notError,
  notValidationError,
  notRequestError
} = require('not-error');

module.exports = ({
  UserLogics,
  AuthLogics,
  MailerLogics,
  InitLogics,
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
}) => {

  describe('get', function() {
    const ip = '127.0.0.1';
    let oneTimeUsers = [];

    before(async () => {
      oneTimeUsers.push(
        await User.User.add({
          username: 'usernameTest_1',
          email: 'register@mail.user',
          password: 'register_mail.org',
          role: ['user']
        }),
        await User.User.add({
          username: 'usernameTest_2',
          email: 'register@mail.client',
          password: 'register_mail.org',
          role: ['client']
        }),
        await User.User.add({
          username: 'usernameTest_3',
          email: 'register@mail.admin',
          password: 'register_mail.org',
          role: ['admin']
        }),
        await User.User.add({
          username: 'usernameTest_4',
          email: 'register@mail.root',
          password: 'register_mail.org',
          role: ['root']
        })
      );
    });

    it('ok', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            userHaveSupremacy(){return true;}
          }
        }
      });
      const res = await UserLogics.User.get({
        activeUser:   oneTimeUsers[2],
        targetUserId: oneTimeUsers[1]._id,
        ip
      });
      expect(res).to.be.ok;
      expect(res._id.toString()).to.be.equal(oneTimeUsers[1]._id.toString());
    });

    it('failed, fake _id', async () => {
      try {
        notNode.Application = stubApp({
          ...modelsEnv,
          logics:{
            'not-user//Auth':{
              userHaveSupremacy(){return true;}
            }
          }
        });
        await UserLogics.User.get({
          activeUser:   oneTimeUsers[2],
          targetUserId: mongoose.Types.ObjectId(),
          ip
        });
      } catch (e) {
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:user_not_found');
        expect(e.options.code).to.be.equal(403);
      }
    });

    it('ok, same _id', async () => {
        notNode.Application = stubApp({
          ...modelsEnv,
          logics:{
            'not-user//Auth':{
              userHaveSupremacy(){return true;}
            }
          }
        });
        const res =  await UserLogics.User.get({
          activeUser:   oneTimeUsers[2],
          targetUserId: oneTimeUsers[2]._id,
          ip
        });
        expect(res).to.be.ok;
        expect(res._id.toString()).to.be.equal(oneTimeUsers[2]._id.toString());
    });

  });

};
