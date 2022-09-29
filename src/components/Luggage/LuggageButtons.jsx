import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  DEPARTURE_LIGHT_LUGGAGE_UP,
  DEPARTURE_LIGHT_LUGGAGE_DOWN,
  DEPARTURE_HEAVY_LUGGAGE_UP,
  DEPARTURE_HEAVY_LUGGAGE_DOWN,
  ARRIVAL_LIGHT_LUGGAGE_UP,
  ARRIVAL_LIGHT_LUGGAGE_DOWN,
  ARRIVAL_HEAVY_LUGGAGE_UP,
  ARRIVAL_HEAVY_LUGGAGE_DOWN,
} from 'store/reducers/luggageReducer';
const LuggageButtons = ({ action, types }) => {
  const dispatch = useDispatch();
  const departureLightLuggage = useSelector(
    state => state.luggageReducer.departureLightLuggage
  );
  const departureHeavyLuggage = useSelector(
    state => state.luggageReducer.departureHeavyLuggage
  );
  const arrivalLightLuggage = useSelector(
    state => state.luggageReducer.arrivalLightLuggage
  );
  const arrivalHeavyLuggage = useSelector(
    state => state.luggageReducer.arrivalHeavyLuggage
  );

  function validateAmount(action, types) {
    switch (action) {
      case 'lightIncrement':
        if (types === 'departure') {
          if (departureLightLuggage < 1) {
            dispatch({ type: DEPARTURE_LIGHT_LUGGAGE_UP });
          }
        } else {
          if (arrivalLightLuggage < 1) {
            dispatch({ type: ARRIVAL_LIGHT_LUGGAGE_UP });
          }
        }

        break;
      case 'lightDecrement':
        if (types === 'departure') {
          if (departureLightLuggage > 0) {
            dispatch({ type: DEPARTURE_LIGHT_LUGGAGE_DOWN });
          }
        }
        if (types === 'arrival') {
          if (arrivalLightLuggage > 0) {
            dispatch({ type: ARRIVAL_LIGHT_LUGGAGE_DOWN });
          }
        }
        break;
      case 'heavyIncrement':
        if (types === 'departure') {
          if (departureHeavyLuggage < 9) {
            dispatch({ type: DEPARTURE_HEAVY_LUGGAGE_UP });
          }
        }
        if (types === 'arrival') {
          if (arrivalHeavyLuggage < 9) {
            dispatch({ type: ARRIVAL_HEAVY_LUGGAGE_UP });
          }
        }

        break;
      case 'heavyDecrement':
        if (types === 'departure') {
          if (departureHeavyLuggage > 0) {
            dispatch({ type: DEPARTURE_HEAVY_LUGGAGE_DOWN });
          }
        }
        if (types === 'arrival') {
          if (arrivalHeavyLuggage > 0) {
            dispatch({ type: ARRIVAL_HEAVY_LUGGAGE_DOWN });
          }
        }
    }
  }

  return (
    <div>
      {/* {{lightLuggage}
      {<br />}
      {heavyLuggage}} */}

      {action === 'lightIncrement' || action === 'heavyIncrement' ? (
        <span onClick={() => validateAmount(action, types)}>
          <svg
            height={20}
            width={20}
            fill='#000'
            viewBox='0 0 24 24'
            aria-hidden='true'>
            <circle
              cx='12'
              cy='12'
              r='11.5'
              fill='white'
              stroke='#E8114b'></circle>
            <path
              d='M18.2398 12.5054H12.5054V18.2398H11.5249V12.5054H5.75977V11.5249H11.5249V5.75977H12.5054V11.5249H18.2398V12.5054Z'
              fill='#E8114b'></path>
          </svg>
        </span>
      ) : (
        <span onClick={() => validateAmount(action, types)}>
          <svg viewBox='0 0 24 24' height={20} width={20} aria-hidden='true'>
            <circle
              cx='12'
              cy='12'
              r='11.5'
              fill='white'
              stroke='#E8114b'></circle>
            <path
              d='M18.2554 11.5097V12.4902H5.77539V11.5097H18.2554Z'
              fill='#E8114b'></path>
          </svg>
        </span>
      )}
    </div>
  );
};

export default LuggageButtons;
