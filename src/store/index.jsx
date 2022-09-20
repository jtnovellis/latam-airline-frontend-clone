import { createStore, combineReducers } from 'redux';
import bookingReducer from './reducers/bookingReducer';

const rootReducer = combineReducers({
  bookingReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
