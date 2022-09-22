import { createStore, combineReducers } from 'redux';
import bookingReducer from './reducers/bookingReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  bookingReducer,
  loginReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
