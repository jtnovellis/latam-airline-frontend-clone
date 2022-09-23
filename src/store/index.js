import { createStore } from 'redux';
export const PASSENGER_AMOUNT_UP = '@passengerAmount/increment';
export const PASSENGER_AMOUNT_DOWN = '@passengerAmount/decrement';
const initialValues = {
  passengerAmount: 1,
};
const reducer = (state = initialValues, action) => {
  switch (action.type) {
    case PASSENGER_AMOUNT_UP:
      return {
        ...state,
        passengerAmount: state.passengerAmount + 1,
      };
    case PASSENGER_AMOUNT_DOWN:
      return {
        ...state,
        passengerAmount: state.passengerAmount - 1,
      };
    default:
      return state;
  }
};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
