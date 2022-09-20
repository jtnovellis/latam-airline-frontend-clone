export const PASSENGER_AMOUNT_UP = '@passengerAmount/increment';
export const PASSENGER_AMOUNT_DOWN = '@passengerAmount/decrement';
export const BOOKING_CITIES_ADD = '@booking/add-cities';
export const BOOKING_DATES_ADD = '@booking/add-dates';

const initialValues = {
  passengerAmount: 1,
  origin: '',
  destination: '',
  dates: [null, null],
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
    case BOOKING_CITIES_ADD:
      return {
        ...state,
        origin: action.payload.origin,
        destination: action.payload.destination,
      };
    case BOOKING_DATES_ADD:
      return {
        ...state,
        dates: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
