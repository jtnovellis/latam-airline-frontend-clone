import { createStore, combineReducers } from 'redux';
import bookingReducer from './reducers/bookingReducer';
import userReducer from './reducers/userReducer';
import luggageReducer from './reducers/luggageReducer';
const rootReducer = combineReducers({
  bookingReducer,
  userReducer,
  luggageReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
