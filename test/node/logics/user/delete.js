const mongoose = require('mongoose');
const {notRequestError} = require('not-error');

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
  describe('delete', function() {
    const ip = '127.0.0.1';
    let oneTimeUsers = [];

    before(async()=>{
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
      });
      const result = await UserLogics.User.delete({
        targetUserId: oneTimeUsers[1]._id.toString(),
        ip,
        activeUser: oneTimeUsers[3]
      });
      expect(result).to.be.ok;
      expect(result.status).to.be.equal('ok');
      const resultUserData = await User.User.findById(oneTimeUsers[1]._id);
      expect(resultUserData.__closed).to.be.true;
    });

    it('ok; targetUserId is fake', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
      });
      const result = await UserLogics.User.delete({
        activeUser: oneTimeUsers[3],
        targetUserId: mongoose.Types.ObjectId(),
        ip
      });
      expect(result).to.be.ok;
      expect(result.status).to.be.equal('ok');
    });

    it('ok; targetUserId have supremacy', async () => {
      notNode.Application = stubApp({
        ...modelsEnv,
        logics:{
          'not-user//Auth':{
            userHaveSupremacy(){return false;}
          }
        }
      });
      try{
        await UserLogics.User.delete({
          activeUser: oneTimeUsers[0],
          targetUserId: oneTimeUsers[3],
          ip
        });
      }catch(e){
        expect(e).to.be.instanceof(notRequestError);
        expect(e.message).to.be.equal('not-user:insufficient_level_of_privilegies');
      }
    });
  });
};
