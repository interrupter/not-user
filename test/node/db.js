const notNode = require('not-node'),
  Increment = notNode.Increment,
  Proto = require('not-node').Proto,
  OneTimeCode = require('not-one-time-code/src/models/oneTimeCode'),
  User = require('../../src/models/user.js'),
  mongoose = require('mongoose'),
  MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer,
  mongoServer = new MongoMemoryServer();

let connecting = false;
let onConnected = [];
let connected = false;
mongoose.Promise = Promise;

exports.init = (from, done) => {
  if(connected){ done();}
  if(connecting){
    onConnected.push(done);
    return;
  }
  console.log(from, 'connecting...');
  connecting = true;
  mongoServer
    .getUri()
    .then((mongoUri) => {
      console.log('mongoUri', mongoUri);
      return mongoose.connect(mongoUri, {useCreateIndex: true,useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if (err) {
          done(err);
        }
      });
    })
    .then(()=>{
      console.log(from, 'connected');
      connecting = false; connected = true;
      if (typeof User.User == 'undefined'){
        Proto.fabricate(User, {}, mongoose);
      }
      if (typeof OneTimeCode.OneTimeCode == 'undefined'){
        Proto.fabricate(OneTimeCode, {}, mongoose);
      }
      console.log(User.User, OneTimeCode.OneTimeCode);
      Increment.init(mongoose);
      onConnected.forEach(f=>f());
      done();
    })
    .catch((e)=>{
      done(e);
    });
}

exports.mongoose = mongoose;
exports.mongoServer = mongoServer;


exports.destroy = async (from, done)=>{
  await mongoose.disconnect();
  await mongoServer.stop();
  connected = false;
  console.log('Server stopped in ', from);
  done();
};
