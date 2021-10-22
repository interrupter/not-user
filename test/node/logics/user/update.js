const mongoose = require('mongoose');

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
  describe('update', function() {
  
    let oneTimeUsers = [];
    const telNum = '+75551234567';

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
      const result = await UserLogics.User.update({
        activeUser: oneTimeUsers[3],
        targetUserId: oneTimeUsers[2]._id,
        data:{
          telephone: telNum
        }
      });
      expect(result).to.be.ok;
      expect(result.status).to.be.equal('ok');
      const resultUserData = await User.User.findById(oneTimeUsers[2]._id);
      expect(resultUserData.telephone).to.be.equal(telNum);
    });

    it('failed, exception throwned; targetUserId is fake', async () => {
      try {
        await UserLogics.User.update({
          activeUser: oneTimeUsers[3],
          targetUserId: mongoose.Types.ObjectId(),
          data:{
            telephone: telNum
          }
        });
      } catch (e) {
        expect(e).to.be.instanceof(Error);
      }
    });
  });
};
