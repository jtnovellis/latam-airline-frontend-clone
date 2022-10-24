export const DEPARTURE_LIGHT_LUGGAGE_UP =
  'departureLightLuggageAmount/increment';
export const DEPARTURE_LIGHT_LUGGAGE_DOWN =
  'departureLightLuggageAmount/decrement';
export const DEPARTURE_HEAVY_LUGGAGE_UP =
  'departureHeavyLuggageAmount/increment';
export const DEPARTURE_HEAVY_LUGGAGE_DOWN =
  'departureHeavyLuggageAmount/decrement';
export const ARRIVAL_LIGHT_LUGGAGE_UP = '@arrivalLightLuggageAmount/increment';
export const ARRIVAL_LIGHT_LUGGAGE_DOWN =
  '@arrivalLightLuggageAmount/decrement';
export const ARRIVAL_HEAVY_LUGGAGE_UP = '@arrivalHeavyLuggageAmount/increment';
export const ARRIVAL_HEAVY_LUGGAGE_DOWN =
  '@arrivalHeavyLuggageAmount/decrement';
export const DEPARTURE_COMBO_UP = '@departureCombo/increment';
export const DEPARTURE_COMBO_DOWN = '@departureCombo/decrement';
export const ARRIVAL_COMBO_UP = '@arrivalCombo/increment';
export const ARRIVAL_COMBO_DOWN = '@arrivalCombo/decrement';
export const SPECIAL_DEPARTURE_UP = '@specialDeparture/increment';
export const SPECIAL_DEPARTURE_DOWN = '@specialDeparture/decrement';
export const SPECIAL_ARRIVAL_UP = '@specialArrival/increment';
export const SPECIAL_ARRIVAL_DOWN = '@specialArrival/decrement';
export const CONTINUE = '@continue/nowayback';
export const GOBACK = '@goback/thereswayback';
export const NEXT = '@next/gonext';
/* 
const squema = {
  departure: {
    combo: 0,
    light: 0,
    heavy: 0,
    special: 0,
  },
  arrival: {
    combo: 0,
    light: 0,
    heavy: 0,
    special: 0,
  },
};
 */
const initialValues = {
  departureLightLuggage: 0,
  departureHeavyLuggage: 0,
  specialDeparture: 0,
  arrivalLightLuggage: 0,
  arrivalHeavyLuggage: 0,
  specialArrival: 0,
  departureCombo: false,
  arrivalCombo: false,
  passengersLuggage: [],
  position: 0,
  totalPrice: 0,
  initialPassengers: 3,
};

/* const initializePassengers = (state = initialValues) => {
  for (let i = 0; i < state.initialPassengers; i++) {
    state.passengersLuggage.push(squema);
  }
};
initializePassengers(); */

const bookingReducer = (state = initialValues, action) => {
  switch (action.type) {
    case '@initialSchema':
      state.passengersLuggage.push(action.payload.squema);
      return {
        ...state,
        initialPassengers: action.payload.initialPassengers,
      };
    case DEPARTURE_LIGHT_LUGGAGE_UP:
      return {
        ...state,
        departureLightLuggage: state.departureLightLuggage + 1,
        totalPrice: state.totalPrice + 44900,
      };
    case DEPARTURE_LIGHT_LUGGAGE_DOWN:
      return {
        ...state,
        departureLightLuggage: state.departureLightLuggage - 1,
        totalPrice: state.totalPrice - 44900,
      };
    case DEPARTURE_HEAVY_LUGGAGE_UP:
      if (state.departureHeavyLuggage >= 1 && state.departureHeavyLuggage < 2) {
        return {
          ...state,
          departureHeavyLuggage: state.departureHeavyLuggage + 1,
          totalPrice: state.totalPrice + 74900,
        };
      }
      if (state.departureHeavyLuggage >= 2) {
        return {
          ...state,
          departureHeavyLuggage: state.departureHeavyLuggage + 1,
          totalPrice: state.totalPrice + 79900,
        };
      }
      return {
        ...state,
        departureHeavyLuggage: state.departureHeavyLuggage + 1,
        totalPrice: state.totalPrice + 54900,
      };
    case DEPARTURE_HEAVY_LUGGAGE_DOWN:
      if (state.departureHeavyLuggage > 1 && state.departureHeavyLuggage <= 2) {
        return {
          ...state,
          departureHeavyLuggage: state.departureHeavyLuggage - 1,
          totalPrice: state.totalPrice - 74900,
        };
      }
      if (state.departureHeavyLuggage > 2) {
        return {
          ...state,
          departureHeavyLuggage: state.departureHeavyLuggage - 1,
          totalPrice: state.totalPrice - 79900,
        };
      }
      return {
        ...state,
        departureHeavyLuggage: state.departureHeavyLuggage - 1,
        totalPrice: state.totalPrice - 54900,
      };
    case ARRIVAL_LIGHT_LUGGAGE_UP:
      return {
        ...state,
        arrivalLightLuggage: state.arrivalLightLuggage + 1,
        totalPrice: state.totalPrice + 44900,
      };
    case ARRIVAL_LIGHT_LUGGAGE_DOWN:
      return {
        ...state,
        arrivalLightLuggage: state.arrivalLightLuggage - 1,
        totalPrice: state.totalPrice - 44900,
      };
    case ARRIVAL_HEAVY_LUGGAGE_UP:
      if (state.arrivalHeavyLuggage >= 1 && state.arrivalHeavyLuggage < 2) {
        return {
          ...state,
          arrivalHeavyLuggage: state.arrivalHeavyLuggage + 1,
          totalPrice: state.totalPrice + 74900,
        };
      }
      if (state.arrivalHeavyLuggage >= 2) {
        return {
          ...state,
          arrivalHeavyLuggage: state.arrivalHeavyLuggage + 1,
          totalPrice: state.totalPrice + 79900,
        };
      }
      return {
        ...state,
        arrivalHeavyLuggage: state.arrivalHeavyLuggage + 1,
        totalPrice: state.totalPrice + 54900,
      };
    case ARRIVAL_HEAVY_LUGGAGE_DOWN:
      if (state.arrivalHeavyLuggage > 1 && state.arrivalHeavyLuggage <= 2) {
        return {
          ...state,
          arrivalHeavyLuggage: state.arrivalHeavyLuggage - 1,
          totalPrice: state.totalPrice - 74900,
        };
      }
      if (state.arrivalHeavyLuggage > 2) {
        return {
          ...state,
          arrivalHeavyLuggage: state.arrivalHeavyLuggage - 1,
          totalPrice: state.totalPrice - 79900,
        };
      }
      return {
        ...state,
        arrivalHeavyLuggage: state.arrivalHeavyLuggage - 1,
        totalPrice: state.totalPrice - 54900,
      };
    case DEPARTURE_COMBO_UP:
      return {
        ...state,
        departureCombo: true,
        totalPrice: state.totalPrice + 44900,
      };
    case DEPARTURE_COMBO_DOWN:
      return {
        ...state,
        departureCombo: false,
        totalPrice: state.totalPrice - 44900,
      };
    case ARRIVAL_COMBO_UP:
      return {
        ...state,
        arrivalCombo: true,
        totalPrice: state.totalPrice + 44900,
      };
    case ARRIVAL_COMBO_DOWN:
      return {
        ...state,
        arrivalCombo: false,
        totalPrice: state.totalPrice - 44900,
      };
    case SPECIAL_DEPARTURE_UP:
      return {
        ...state,

        specialDeparture: state.specialDeparture + 1,
        totalPrice: state.totalPrice + 100000,
      };
    case SPECIAL_DEPARTURE_DOWN:
      return {
        ...state,
        specialDeparture: state.specialDeparture - 1,
        totalPrice: state.totalPrice - 100000,
      };
    case SPECIAL_ARRIVAL_UP:
      return {
        ...state,
        specialArrival: state.specialArrival + 1,
        totalPrice: state.totalPrice + 100000,
      };
    case SPECIAL_ARRIVAL_DOWN:
      return {
        ...state,
        specialArrival: state.specialArrival - 1,
        totalPrice: state.totalPrice - 100000,
      };
    case CONTINUE:
      state.passengersLuggage[state.position] = action.payload;
      state.position += 1;
      if (state.position < state.initialPassengers)
        return {
          ...state,
          departureLightLuggage:
            state.passengersLuggage[state.position].departure.light,
          departureHeavyLuggage:
            state.passengersLuggage[state.position].departure.heavy,
          arrivalLightLuggage:
            state.passengersLuggage[state.position].arrival.light,
          arrivalHeavyLuggage:
            state.passengersLuggage[state.position].arrival.heavy,
          specialDeparture:
            state.passengersLuggage[state.position].departure.special,
          specialArrival:
            state.passengersLuggage[state.position].arrival.special,
          departureCombo:
            state.passengersLuggage[state.position].departure.combo,
          arrivalCombo: state.passengersLuggage[state.position].arrival.combo,
          departureComboFlag:
            state.passengersLuggage[state.position].departure.comboFlag,
          arrivalComboFlag:
            state.passengersLuggage[state.position].arrival.comboFlag,
        };
      return state;
    case GOBACK:
      state.passengersLuggage[state.position] = action.payload;
      state.position -= 1;
      if (state.position !== state.initialPassengers) {
        return {
          ...state,
          departureLightLuggage:
            state.passengersLuggage[state.position].departure.light,
          departureHeavyLuggage:
            state.passengersLuggage[state.position].departure.heavy,
          arrivalLightLuggage:
            state.passengersLuggage[state.position].arrival.light,
          arrivalHeavyLuggage:
            state.passengersLuggage[state.position].arrival.heavy,
          specialDeparture:
            state.passengersLuggage[state.position].departure.special,
          specialArrival:
            state.passengersLuggage[state.position].arrival.special,
          arrivalCombo: state.passengersLuggage[state.position].arrival.combo,
          departureCombo:
            state.passengersLuggage[state.position].departure.combo,
        };
      } else {
        return {
          ...state,
          departureLightLuggage: 0,
          departureHeavyLuggage: 0,
          arrivalLightLuggage: 0,
          arrivalHeavyLuggage: 0,
          specialDeparture: 0,
          specialArrival: 0,
          arrivalCombo: false,
          departureCombo: false,
          position: state.position - 1,
        };
      }
    case NEXT:
      state.passengersLuggage[state.position] = action.payload;
      if (state.position < state.initialPassengers)
        return {
          ...state,
          departureLightLuggage:
            state.passengersLuggage[state.position].departure.light,
          departureHeavyLuggage:
            state.passengersLuggage[state.position].departure.heavy,
          arrivalLightLuggage:
            state.passengersLuggage[state.position].arrival.light,
          arrivalHeavyLuggage:
            state.passengersLuggage[state.position].arrival.heavy,
          specialDeparture:
            state.passengersLuggage[state.position].departure.special,
          specialArrival:
            state.passengersLuggage[state.position].arrival.special,
          arrivalCombo: state.passengersLuggage[state.position].arrival.combo,
          departureCombo:
            state.passengersLuggage[state.position].departure.combo,
        };
      return state;
    default:
      return state;
  }
};

export default bookingReducer;
