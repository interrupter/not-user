const notNode = require('not-node');

module.exports = async ()=>{
  try{
    let User = notNode.Application.getModel('User');
    await (User.add({
      username: 'VasyaPupkin',
      email:    'vasya@pupkin.hacker',
      password: 'password',
      ip:        '127.0.0.1',
      telephone: '+1-234-234-2345'
    }));
    console.log('test user added');
  }catch(e){
    console.error(e);
  }
}
