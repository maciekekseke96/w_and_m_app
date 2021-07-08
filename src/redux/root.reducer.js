import { customerBaseReducer } from './customerBase/customerBase.reducer';
import { storageBaseReducer } from './storageBase/storageBase.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  storageBase: storageBaseReducer,
  customerBase: customerBaseReducer,
});

export { rootReducer };