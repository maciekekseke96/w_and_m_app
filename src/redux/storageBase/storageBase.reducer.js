const INITIAL_STATE = require('./../../temp_API/storage.json');

const storageBaseReducer = (store = INITIAL_STATE, action) => {
  return store;
};

export { storageBaseReducer };
