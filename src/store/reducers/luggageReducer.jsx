export const LIGHT_LUGGAGE_UP = '@lightLuggageAmount/increment';
export const LIGHT_LUGGAGE_DOWN = '@lightLuggageAmount/decrement';
export const HEAVY_LUGGAGE_UP = '@heavyLuggageAmount/increment';
export const HEAVY_LUGGAGE_DOWN = '@heavyLuggageAmount/decrement';
const initialValues = {
  lightLuggage: 0,
  heavyLuggage: 0,
  totalPrice: 0,
};

const bookingReducer = (state = initialValues, action) => {
  switch (action.type) {
    case LIGHT_LUGGAGE_UP:
      return {
        ...state,
        lightLuggage: state.lightLuggage + 1,
      };
    case LIGHT_LUGGAGE_DOWN:
      return {
        ...state,
        lightLuggage: state.lightLuggage - 1,
      };
    case HEAVY_LUGGAGE_UP:
      return {
        ...state,
        heavyLuggage: state.heavyLuggage + 1,
      };
    case HEAVY_LUGGAGE_DOWN:
      return {
        ...state,
        heavyLuggage: state.heavyLuggage - 1,
      };
    default:
      return state;
  }
};

export default bookingReducer;
