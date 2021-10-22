exports.stubRequest = (options = {}) => {
  return {
    headers: {
      'x-forwarded-for': '127.0.0.1',
      ...(options.headers?options.headers:{}),
    },
    session: {
      ...(options.session?options.session:{}),
      save() {}
    },
    body: {
      ...(options.body?options.body:{}),
    },
    params: {
      ...(options.params?options.params:{}),
    },
    query: {
      ...(options.query?options.query:{}),
    },
    user:{
      ...(options.user?options.user:{}),
    }
  };
}

exports.stubResponse = (options = {}) => {
  return {
    status(st) {
      this._status = st;
      if (options.status) {
        options.status.call(this, result)
      } else {
        return this;
      }
    },
    redirect(url){
      if (options.redirect) {
        options.redirect.call(this, url)
      } else {
        return this;
      }
    },
    json(result) {
      if (options.json) {
        options.json.call(this, result)
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
    inform() {
      if(typeof options.inform === 'function'){
        options.inform(...arguments);
      }
      return;
    },
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
  if(options.logics){
    mod.getLogic = (name) => searchInHash(name, options.logics);
  }else{
    delete mod.getLogic
  }
  if(options.models){
    mod.getModel = (name) => searchInHash(name, options.models);
  }else{
    delete mod.getModel
  }
  if(options.schemes){
    mod.getModelSchema = (name)=>searchInHash(name, options.schemes);
  }else{
    delete mod.getModelScheme
  }
};
