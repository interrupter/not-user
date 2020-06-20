const notApp = require('not-node').Application;

module.exports = async ()=>{
  try{
    let User = notApp.getModel('User');
    await (new User({
      username: 'VasyaPupkin',
      email:    'vasya@pupkin.hacker',
      password: 'password',
      ip: '127.0.0.1'
    })).save();
  }catch(e){
    notApp.report(e);
  }
}
