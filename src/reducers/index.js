const storeInitialState = require("./../temp_API/storage.json");
const customersInitialState = require("./../temp_API/customers.json");

const addDepositFormDataInitialState = {
  addingDate: "",
  depositType: "",
  depositName: "",
  tiresAmmount: 0,
  tiresSeason: "",
  storeID: "",
  wholeWheels: {
    rimsAmmount: 0,
    screwsAmmount: 0,
    hubcapsAmmount: 0,
    TPMSSensorsAmmount: 0,
  },
  customerID: "",
  comments: "",
};

const storeReducer = (store = storeInitialState, action) => {
  return store;
};

const customersReducer = (store = customersInitialState, action) => {
  return store;
};

const addDepositFormDataReducer = (
  store = addDepositFormDataInitialState,
  action
) => {
  return store;
};

export { storeReducer, customersReducer, addDepositFormDataReducer };
