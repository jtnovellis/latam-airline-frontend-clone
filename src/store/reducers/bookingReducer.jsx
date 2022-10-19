export const PASSENGER_AMOUNT_UP = '@passengerAmount/increment';
export const PASSENGER_AMOUNT_UP_ADULTS = '@passengerAmount_adults/increment';
export const PASSENGER_AMOUNT_UP_KIDS = '@passengerAmount_kids/increment';
export const PASSENGER_AMOUNT_UP_BABIES = '@passengerAmount_babies/increment';
export const PASSENGER_AMOUNT_DOWN = '@passengerAmount/decrement';
export const PASSENGER_AMOUNT_DOWN_ADULTS = '@passengerAmount_adults/decrement';
export const PASSENGER_AMOUNT_DOWN_KIDS = '@passengerAmount_kids/decrement';
export const PASSENGER_AMOUNT_DOWN_BABIES = '@passengerAmount_babies/decrement';
export const BOOKING_CITIES_ADD_DEPARTURE = '@booking/add-cities-departure';
export const BOOKING_CITIES_ADD_ARRIVAL = '@booking/add-cities-arrival';
export const BOOKING_DATES_ADD = '@booking/add-dates';
export const BOOKING_SET_ROUNDTRIP = '@booking/add-roundtrip';

const initialValues = {
  passengerAmount: 1,
  departureCity: null,
  arrivalCity: null,
  dates: [null, null],
  adults: 2,
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
    case PASSENGER_AMOUNT_UP_ADULTS:
      return {
        ...state,
        adults: state.adults + 1,
      };
    case PASSENGER_AMOUNT_UP_KIDS:
      return {
        ...state,
        kids: state.kids + 1,
      };
    case PASSENGER_AMOUNT_UP_BABIES:
      return {
        ...state,
        babies: state.babies + 1,
      };
    case PASSENGER_AMOUNT_DOWN:
      return {
        ...state,
        passengerAmount: state.passengerAmount - 1,
      };
    case PASSENGER_AMOUNT_DOWN_ADULTS:
      return {
        ...state,
        adults: state.adults - 1,
      };
    case PASSENGER_AMOUNT_DOWN_KIDS:
      return {
        ...state,
        kids: state.kids - 1,
      };
    case PASSENGER_AMOUNT_DOWN_BABIES:
      return {
        ...state,
        babies: state.babies - 1,
      };
    case BOOKING_CITIES_ADD_DEPARTURE:
      return {
        ...state,
        departureCity: action.payload,
      };
    case BOOKING_CITIES_ADD_ARRIVAL:
      return {
        ...state,
        arrivalCity: action.payload,
      };
    case BOOKING_DATES_ADD:
      return {
        ...state,
        dates: action.payload,
      };
    case BOOKING_SET_ROUNDTRIP:
      return {
        ...state,
        roundTrip: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
