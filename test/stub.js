exports.stubRequest = (options = {}) => {
  return {
    headers: {
      'x-forwarded-for': '127.0.0.1',
      ...(options.headers?options.headers:{}),
    },
    session: {
      save() {}
    },
    body: {
      ...(options.body?options.body:{}),
    }
  };

}


exports.stubResponse = (options = {}) => {
  return {
    status(st) {
      this._status = st;
      if (options.status) {
        options.status(result)
      } else {
        return this;
      }
    },
    json(result) {
      if (options.status) {
        options.json(result)
      } else {
        return this;
      }
    }
  };
}

function searchInHash(what, where){
  if(where){
    if(Object.keys(where).includes(what)){
      return where[what];
    }
  }
  return undefined;
}

exports.stubApp = (options = {})=>{
  return {
    inform() {},
    report() {},
    logger: {
      log() {},
      info() {},
      error: console.error,
      debug() {},
    },
    log(){},
    getLogic(name) {
      return searchInHash(name, options.logics);
    },
    getModel(name) {
      return searchInHash(name, options.models);
    },
    getModelSchema(name) {
      return searchInHash(name, options.schemes);
    }
  };
}


exports.stubModuleEnv = (mod, options)=>{
  if(options.models){
    mod.getLogic = (name) => searchInHash(name, options.logics);
  }else{
    delete module.getLogic
  }
  if(options.models){
    mod.getModel = (name) => searchInHash(name, options.models);
  }else{
    delete module.getModel
  }
  if(options.schemes){
    mod.getModelSchema = (name)=>searchInHash(name, options.schemes);
  }else{
    delete module.getModelScheme
  }
};
