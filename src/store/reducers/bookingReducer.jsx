export const PASSENGER_AMOUNT_UP = '@passengerAmount/increment';
export const PASSENGER_AMOUNT_DOWN = '@passengerAmount/decrement';

const initialValues = {
  passengerAmount: 1,
  origin: '',
  destination: '',
  departureDate: '',
  returnDate: '',
  adults: 1,
  kids: 0,
  babies: 0,
  roundTrip: true,
};

const bookingReducer = (state = initialValues, action) => {
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

export default bookingReducer;
