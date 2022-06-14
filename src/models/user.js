const
  {log} = require('not-log')(module, 'Model'),
  {objHas} = require('not-node').Common,
  phrase = require('not-locale').modulePhrase('not-user'),
  crypto = require('crypto'),
  {
    notError,
    notValidationError,
    notRequestError
  } = require('not-error'),
  Auth = require('not-node').Auth,

  generator = require('generate-password'),
  validator = require('validator'),

  {DEFAULT_ROLES_LIST,DEFAULT_HASH_ALGO} = require('../const.js');

const MODEL_NAME = 'User';

module.exports.thisModelName = MODEL_NAME;
module.exports.keepNotExtended = false;

module.exports.enrich = {
  versioning: true,
  increment: true,
  validators: true
};
const FIELDS = [
  ['username', 'not-user//username'],
  ['email', 'not-user//email'],
  ['emailConfirmed', 'not-user//emailConfirmed'],
  ['telephone', 'not-user//telephone'],
  ['telephoneConfirmed', 'not-user//telephoneConfirmed'],
  ['hashedPassword', 'not-user//hashedPassword'],
  ['salt', 'not-user//salt'],
  ['created', 'not-user//created'],
  ['role', 'not-user//role'],
  ['active', 'not-user//active'],
  ['ip', 'not-user//ip'],
  ['country', 'not-user//country'],
  ['confirm', 'not-user//confirm'],
];

module.exports.FIELDS = FIELDS;

module.exports.indexes = [
  [{__latest: 1, __closed: 1, __version: 1, username:1 }, { unique: true }],
  [{__latest: 1, __closed: 1, __version: 1, email:1 }, { unique: true }]
];

function validateEmailOrThrow(email){
  try{
    let val = validator.isEmail(email);
    if(!val){
      throw new notValidationError(
        phrase('email_is_not_valid'),
        {
          email: [phrase('email_is_not_valid')]
        },
        null,
        {email}
      );
    }
  }catch(e){
    if(e instanceof notValidationError){
      throw e;
    }else{
      throw new notValidationError(
        phrase('email_is_not_valid'),
        {email:[phrase('email_is_not_valid')]},
        e,
        {email}
      );
    }
  }
}

function checkPasswordOrThrow(user, password){
  if (user.checkPassword(password)) {
    return user;
  } else {
    throw new notRequestError(
      phrase('password_incorrect'),
      {
        code: 404,
        //error messages
        errors:{
          password: [phrase('password_incorrect')]
        }
      }
    );
  }
}

function throwUserNotFound(errors = {}, params = {}, e = null){
  throw new notRequestError(
    phrase('user_not_found'),
    {
      code: 404,
      errors,
      params
    },
    e
  );
}


module.exports.thisStatics = {
  async loadSafe(id){
    const result = await this.find({_id: id, __latest: true, __closed: false}, '_id username email emailConfirmed role active').exec();
    if(Array.isArray(result) && result.length === 1){
      return result[0];
    }else{
      return null;
    }
  },
  DEFAULT_ROLES_LIST,
  randomPassword: function(){
    return generator.generate({
      length: 12,
      uppercase: true,
      numbers: true
    });
  },
  authorize: async function(email, password) {
    validateEmailOrThrow(email);
    let user = await this.getByEmail(email);
    if (user) {
      return checkPasswordOrThrow(user, password);
    } else {
      throwUserNotFound({email: [phrase('user_not_found')]}, {email});
    }
  },
  toggleActive: async function(id){
    try{
      let user = await	this.findById(id);
      if (user) {
        user.active = !user.active;
        await user.save();
        return user;
      }else{
        throwUserNotFound({id: [phrase('user_not_found')]}, {id});
      }
    }catch(e){
      if(e instanceof notRequestError){throw e;}
      else{
        throwUserNotFound({id: [phrase('user_not_found')]}, {id}, e);
      }
    }
  },
  clearFromUnsafe: function(data) {
    let unsafeList = ['hashedPassword', 'salt'];
    for (let i of unsafeList) {
      delete data[i];
    }
    return data;
  },
  async fieldValueExists(key, val){
    let user = await this.makeQuery('findOne', {[key]: val}).exec();
    return !!user;
  },
  usernameExists: function(username) {
    return this.fieldValueExists('username', username);
  },
  emailExists: function(email) {
    return this.fieldValueExists('email', email);
  },
  getByFieldValue: function(key, val) {
    return this.makeQuery('findOne', {
      [key]: val
    }).exec();
  },
  getByFieldValueWithoutVersioningRespect: function(key, val) {
    return this.findOne({
      [key]: val
    }).exec();
  },
  getByUsername: function(username) {
    return this.getByFieldValue('username', username);
  },
  getByEmail: function(email) {
    return this.getByFieldValue('email', email);
  },
  getByTelephone: function(telephone) {
    return this.getByFieldValue('telephone', telephone);
  },
  isUnique: async function(username, email) {
    try{
      let results = await Promise.all([this.usernameExists(username), this.emailExists(email)]);
      if(((!results[0]) && (!results[1]))){
        return true;
      }else{
        const errors = {};
        if(results[0]){
          errors.username = [phrase('username_taken')];
        }
        if(results[1]){
          errors.email = [phrase('email_taken')];
        }
        return errors;
      }
    }catch(e){
      throw new notError(
        phrase('user_uniqueness_verification_error'),
        {
          username,
          email
        },
        e
      );
    }
  },
  Update(data, roles, actorId, system = false) {
    if (!objHas(data, '_id')) {
      throw new Error('No data _id');
    }
    let safeData = this.extractSafeFields('update', data, roles, actorId, system);
    //может быть пусто, тогда не тратим время
    if(Object.keys(safeData).length === 0) {
      throw new notError(phrase('insufficient_level_of_privilegies'));
    }
    if (module.exports.enrich.versioning) {
      return this.findOneAndUpdate(
        {
          _id: data._id,
          __latest: true
        },
        safeData,
        {new: true}
      ).exec()
        .then(async(item) => {
          if (typeof item !== 'undefined' && item !== null) {
            await this.saveVersion(item._id);
            return item;
          } else {
            throw new notError('-version not saved, empty response', { _id: data._id, safeData });
          }
        });
    } else {
      return this.findOneAndUpdate({
        _id: data._id
      }, safeData, {
        new: true
      }).exec();
    }
  },
  extractSafeFields(action, data, roles, actorId, system = false) {
    log(action, roles, this.isOwner(data, actorId), system);
    let fields = this.getSafeFieldsForRoleAction(action, roles, this.isOwner(data, actorId), system);
    log(action, fields);
    let result = {};
    fields.forEach((field) => {
      if (objHas(data, field)) {
        result[field] = data[field];
      }
    });
    return result;
  },
  getSafeFieldsForRoleAction(action, roles, owner, system) {
    let fields = [];
    let special = [];
    if (owner) {
      special.push('@owner');
    }
    if (system) {
      special.push('@system');
    }
    for (let t in module.exports.thisSchema) {
      let field = module.exports.thisSchema[t];
      log(t, field);
      if (
        objHas(field, 'safe') &&
        objHas(field.safe, action) &&
        this.isFieldSafeForAction(field.safe[action], roles, special)
      ) {
        fields.push(t);
      }
    }
    return fields;
  },
  isFieldSafeForAction(fieldActionSafety, roles, special){
    return (
      //свободный
      (fieldActionSafety === '*')
      ||
      (
        //доступ по ролям
        Array.isArray(fieldActionSafety)
        &&
        ( //роли присутствуют в списке
          //если роли пользователя в списке
          Auth.intersect_safe(roles, fieldActionSafety)
          ||
          //или он в спец группе (владелец, система)
          Auth.intersect_safe(special, fieldActionSafety)
        )
      )
    );
  },
  isOwner(data, user_id) {
    if(typeof user_id === 'undefined' || user_id === 0){
      return false;
    }
    return (objHas(data, '_id') && data._id.toString() === user_id.toString());
  },
  validatePassword(password){
    return (typeof password === 'string') && (validator.isLength(password, {
      min: 6,
      max: 100
    }));
  },
  validateEmail(email){
    return (typeof email === 'string') && (validator.isEmail(email));
  }
};

module.exports.thisVirtuals = {
  'imageFile': {
    ref: 'File',
    localField: 'image',
    foreignField: 'hash',
    justOne: true
  },
  'password': {
    'set': function(password) {
      if (module.exports.User.validatePassword(password)){
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
      }else{
        throw new notValidationError(
          phrase('password_length_not_valid'),
          {
            password: [phrase('password_length_not_valid')]
          }
        );
      }
    },
    'get': function() {
      return this._plainPassword;
    }
  }
};

module.exports.thisMethods = {
  encryptPassword(password) {
    return crypto.createHmac(DEFAULT_HASH_ALGO, this.salt).update(password).digest('hex');
  },
  createNewPassword() {
    let pass = module.exports[module.exports.thisModelName].randomPassword();
    this.password = pass;
    return pass;
  },
  checkPassword(password) {
    if (typeof password === 'string') {
      return this.encryptPassword(password) === this.hashedPassword;
    } else {
      return false;
    }
  },
  registerAs(role) {
    if(!Array.isArray(this.role)){
      this.role = [];
    }
    if (this.role.indexOf(role) == -1) {
      this.role.push(role);
    }
    return this;
  },
  deregisterAs(role) {
    if(!Array.isArray(this.role)){
      this.role = [];
    }
    if (this.role.indexOf(role) > -1) {
      this.role.splice(this.role.indexOf(role), 1);
    }
    return this;
  },
  isRole(role) {
    return Array.isArray(this.role) && this.role.indexOf(role) > -1;
  },
  isRoot() {
    return this.isRole('root');
  },
  isAdmin() {
    return this.isRole('admin');
  },
  isClient() {
    return this.isRole('client');
  },
  isUser() {
    return this.isRole('user');
  },
  getPrimaryRole(roles = DEFAULT_ROLES_LIST){
    return this.role.find((itm) => {
      return roles.includes(itm);
    });
  },
  confirmEmail() {
    this.emailConfirmed = true;
    this.confirm = '';
    this.registerAs('confirmed');
    return this;
  },
  confirmTelephone() {
    this.telephoneConfirmed = true;
    this.confirm = '';
    this.registerAs('confirmed');
    return this;
  },
  Update(roles, actorId, system = false) {
    return module.exports[module.exports.thisModelName].Update(this.toObject(), roles, actorId, system);
  },
  isOwner(user_id) {
    return module.exports[module.exports.thisModelName].isOwner(this.toObject(), user_id);
  }
};

module.exports.thisPre = {
  'updateOne': async()=>{
    //	console.debug('user model pre updateOne');

  },
  'insert': async()=>{
    //console.log('user model pre insert');

  },
  'save': async()=>{
    //console.log('user model pre save');
  },
  'update': async()=>{
    //console.log('user model pre update' );

  },
};

module.exports.thisPost = {
  'save': async()=>{
    //console.log('user model post save');
  },
  'update': async()=>{
    //console.log('user model post update');
  },
};
