/* import airbus from '../../Airbus';
import airbusTwo from '../../AirbusTwo'; */

export const REQ_FLIGHTS = '@flights/req-flights';
export const ADD_SEATS_DEPARTURE = '@flights/add-seat-departure';
export const ADD_SEATS_ARRIVAL = '@flights/add-seat-arrival';
export const DELETE_DEPARTURE_SEATS = '@flights/delete-departure-seat';
export const DELETE_ARRIVAL_SEATS = '@flights/delete-arrival-seat';
export const ADD_PASSENGER_FORMDATA = '@flights/add-passenger-formdata';
export const UPDATE_PASSENGER_FORMDATA = '@flights/update-passenger-formdata';
export const SET_SELECTED_GO_FLIGHT = '@flights/set-selected-go-flight';
export const SET_SELECTED_RETURN_FLIGHT = '@flights/set-selected-return-flight';

const initialState = {
  flightToGo: {
    id: '',
    price: null,
    airplane: {
      id: '',
      planeModel: '',
      plate: '',
    },
    arrivalDate: null,
    date: null,
    seats: {
      firstDiv: [],
      secondDiv: [],
      thirthDiv: [],
      headerSeats: [],
    },
    departureAirport: {
      id: '',
      name: '',
      city: '',
      cityCode: '',
      gate: '',
    },
    arrivalAirport: {
      id: '',
      name: '',
      city: '',
      gate: '',
    },
    estimatedTime: '',
    scales: '',
  },
  flightToReturn: {
    id: '',
    price: null,
    airplane: {
      id: '',
      planeModel: '',
      plate: '',
    },
    arrivalDate: null,
    date: null,
    seats: {
      firstDiv: [],
      secondDiv: [],
      thirthDiv: [],
      headerSeats: [],
    },
    departureAirport: {
      id: '',
      name: '',
      city: '',
      gate: '',
    },
    arrivalAirport: {
      id: '',
      name: '',
      city: '',
      gate: '',
    },
    estimatedTime: '',
    scales: '',
  },
  /* id: '123443ASD',
  price: {
    light: '80000',
    basic: '120000',
    plus: '180000',
  },
  departureFlightData: {
    airplane: {
      plate: 'A543',
      airBus: 319,
      seats: {
        firstDiv: airbus.firstDiv,
        secondDiv: airbus.secondDiv,
        thirthDiv: airbus.thirthDiv,
        headerSeats: airbus.headerSeats,
      },
    },
  },
  arrivalFlightData: {
    airplane: {
      plate: 'A333',
      airBus: 320,
      seats: {
        firstDiv: airbusTwo.firstDiv,
        secondDiv: airbusTwo.secondDiv,
        thirthDiv: airbusTwo.thirthDiv,
        headerSeats: airbusTwo.headerSeats,
      },
    },
  }, */
  departureUser: [],
  arrivalUser: [],
  passengerRelated: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_GO_FLIGHT:
      return {
        ...state,
        flightToGo: {
          ...state.flightToGo,
          id: action.payload._id,
          price: action.payload.price,
          airplane: {
            id: action.payload.airplane._id,
            planeModel: action.payload.airplane.planeModel,
            plate: action.payload.airplane.plate,
          },
          arrivalDate: action.payload.arrivalDate,
          date: action.payload.date,
          seats: {
            firstDiv: action.payload.seats.firstDiv,
            secondDiv: action.payload.seats.secondDiv,
            thirthDiv: action.payload.seats.thirthDiv,
            headerSeats: action.payload.seats.headerSeats,
          },
          departureAirport: {
            id: action.payload.departureAirport._id,
            name: action.payload.departureAirport.name,
            city: action.payload.departureAirport.city,
            cityCode: action.payload.departureAirport.cityCode,
            gate: action.payload.departureAirport.gate,
          },
          arrivalAirport: {
            id: action.payload.departureArrival._id,
            name: action.payload.departureArrival.name,
            city: action.payload.departureArrival.city,
            cityCode: action.payload.departureArrival.cityCode,
            gate: action.payload.departureArrival.gate,
          },
          estimatedTime: action.payload.estimatedTime,
          scales: action.payload.scales,
        },
      };
    case SET_SELECTED_RETURN_FLIGHT:
      return {
        ...state,
        flightToReturn: {
          ...state.flightToReturn,
          id: action.payload._id,
          price: action.payload.price,
          airplane: {
            id: action.payload.airplane._id,
            planeModel: action.payload.airplane.planeModel,
            plate: action.payload.airplane.plate,
          },
          arrivalDate: action.payload.arrivalDate,
          date: action.payload.date,
          seats: {
            firstDiv: action.payload.seats.firstDiv,
            secondDiv: action.payload.seats.secondDiv,
            thirthDiv: action.payload.seats.thirthDiv,
            headerSeats: action.payload.seats.headerSeats,
          },
          departureAirport: {
            id: action.payload.departureAirport._id,
            name: action.payload.departureAirport.name,
            city: action.payload.departureAirport.city,
            cityCode: action.payload.departureAirport.cityCode,
            gate: action.payload.departureAirport.gate,
          },
          arrivalAirport: {
            id: action.payload.departureArrival._id,
            name: action.payload.departureArrival.name,
            city: action.payload.departureArrival.city,
            cityCode: action.payload.departureArrival.cityCode,
            gate: action.payload.departureArrival.gate,
          },
          estimatedTime: action.payload.estimatedTime,
          scales: action.payload.scales,
        },
      };
    case REQ_FLIGHTS:
      return {
        ...state,
        departureFlightData: {
          ...state.departureFlightData,
          departureFlightData: action.payload.departure,
        },
        arrivalFlightData: {
          ...state.arrivalFlightData,
          arrivalFlightData: action.payload.arrival,
        },
      };
    case ADD_SEATS_DEPARTURE:
      return {
        ...state,
        departureUser: [...state.departureUser, action.payload],
      };
    case ADD_SEATS_ARRIVAL:
      return {
        ...state,
        arrivalUser: [...state.arrivalUser, action.payload],
      };
    case DELETE_DEPARTURE_SEATS:
      return {
        ...state,
        departureUser: state.departureUser.filter(item => {
          return (
            (item.row && item.column) !==
            (action.payload.row && action.payload.column)
          );
        }),
      };
    case DELETE_ARRIVAL_SEATS:
      return {
        ...state,
        arrivalUser: state.arrivalUser.filter(item => {
          return (
            (item.row && item.column) !==
            (action.payload.row && action.payload.column)
          );
        }),
      };
    case ADD_PASSENGER_FORMDATA:
      state.passengerRelated.push(action.payload);
      return state;
    case UPDATE_PASSENGER_FORMDATA:
      state.passengerRelated[action.payload.position] = action.payload.values;
      return state;

    default:
      return state;
  }
};

export default flightsReducer;
