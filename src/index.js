import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import {
  storeReducer,
  customersReducer,
  addDepositFormDataReducer,
} from "./reducers/index";

const rootReducer = combineReducers({
  storeBase: storeReducer,
  customersBase: customersReducer,
  addDepositFormData: addDepositFormDataReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
