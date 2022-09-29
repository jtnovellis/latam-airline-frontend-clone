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
        totalPrice: state.totalPrice + 44900,
      };
    case LIGHT_LUGGAGE_DOWN:
      return {
        ...state,
        lightLuggage: state.lightLuggage - 1,
        totalPrice: state.totalPrice - 44900,
      };
    case HEAVY_LUGGAGE_UP:
      if (state.heavyLuggage >= 1 && state.heavyLuggage < 2) {
        return {
          ...state,
          heavyLuggage: state.heavyLuggage + 1,
          totalPrice: state.totalPrice + 74900,
        };
      }
      if (state.heavyLuggage >= 2) {
        return {
          ...state,
          heavyLuggage: state.heavyLuggage + 1,
          totalPrice: state.totalPrice + 79900,
        };
      }
      return {
        ...state,
        heavyLuggage: state.heavyLuggage + 1,
        totalPrice: state.totalPrice + 54900,
      };
    case HEAVY_LUGGAGE_DOWN:
      if (state.heavyLuggage >= 1 && state.heavyLuggage < 2) {
        return {
          ...state,
          heavyLuggage: state.heavyLuggage - 1,
          totalPrice: state.totalPrice - 74900,
        };
      }
      if (state.heavyLuggage > 2) {
        return {
          ...state,
          heavyLuggage: state.heavyLuggage - 1,
          totalPrice: state.totalPrice - 79900,
        };
      }
      return {
        ...state,
        heavyLuggage: state.heavyLuggage - 1,
        totalPrice: state.totalPrice - 54900,
      };
    default:
      return state;
  }
};

export default bookingReducer;
