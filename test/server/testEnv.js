const notApp = require('not-node').Application;
module.exports = async ()=>{
  try{
    let User = notApp.getModel('User');
    await (User.add({
      username: 'VasyaPupkin',
      email:    'vasya@pupkin.hacker',
      password: 'password',
      ip:        '127.0.0.1',
      telephone: '+1-234-234-2345'
    }));
  }catch(e){
    notApp.logger.error(e);
  }
}
