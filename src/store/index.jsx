import { createStore, combineReducers } from 'redux';
import bookingReducer from './reducers/bookingReducer';
import userReducer from './reducers/userReducer';
import flightsReducer from './reducers/flightsReducer';

const rootReducer = combineReducers({
  bookingReducer,
  userReducer,
  flightsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
