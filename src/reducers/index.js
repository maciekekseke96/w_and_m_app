import { getTodayDate } from "./../formatFunctions/formatFunctions";

const storeInitialState = require("./../temp_API/storage.json");
const customersInitialState = require("./../temp_API/customers.json");

const addDepositFormDataInitialState = {
  addingDate: getTodayDate(),
  depositType: "Opony",
  depositName: "",
  tiresAmmount: null,
  tiresSeason: "Letnie",
  storeID: "",
  wholeWheels: {
    rimsAmmount: null,
    screwsAmmount: null,
    hubcapsAmmount: null,
    TPMSSensorsAmmount: null,
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
  switch (action.type) {
    case "DEPOSIT_DATE_CHANGE":
      return { ...store, addingDate: action.value };
    case "DEPOSIT_TYPE_CHANGE":
      return { ...store, depositType: action.value };
    case "DEPOSIT_NAME_CHANGE":
      return { ...store, depositName: action.value };
    case "TYRES_AMMOUNT_CHANGE":
      return { ...store, tiresAmmount: action.value };
    case "TYRES_SEASON_CHANGE":
      return { ...store, tiresSeason: action.value };
    case "DEPOSIT_TYPE_CHANGE":
      return { ...store, depositType: action.value };
    case "STORE_ID_CHANGE":
      return { ...store, storeID: action.value };
    case "CUSTOMER_ID_CHANGE":
      return { ...store, customerID: action.value };
    case "COMMENTS_FIELD_CHANGE":
      return { ...store, comments: action.value };
    case "RIMS_AMMOUNT_CHANGE":
      return {
        ...store,
        wholeWheels: { ...store.wholeWheels, rimsAmmount: action.value },
      };
    case "SCREWS_AMMOUNT_CHANGE":
      return {
        ...store,
        wholeWheels: { ...store.wholeWheels, screwsAmmount: action.value },
      };
    case "HUBCAPS_AMMOUNT_CHANGE":
      return {
        ...store,
        wholeWheels: { ...store.wholeWheels, hubcapsAmmount: action.value },
      };
    case "TPMS_SENSORS_CHANGE":
      return {
        ...store,
        wholeWheels: { ...store.wholeWheels, TPMSSensorsAmmount: action.value },
      };
    default:
      return store;
  }
};

export { storeReducer, customersReducer, addDepositFormDataReducer };
