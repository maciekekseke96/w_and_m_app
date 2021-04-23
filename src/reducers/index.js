const storeInitialState = require("./../temp_API/storage.json");
const customersInitialState = require("./../temp_API/customers.json");

const storeReducer = (store = storeInitialState, action) => {
  return store;
};

const customersReducer = (store = customersInitialState, action) => {
  return store;
};

export { storeReducer, customersReducer };
