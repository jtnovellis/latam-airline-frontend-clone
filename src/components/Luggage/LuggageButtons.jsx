import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  LIGHT_LUGGAGE_UP,
  LIGHT_LUGGAGE_DOWN,
  HEAVY_LUGGAGE_UP,
  HEAVY_LUGGAGE_DOWN,
} from 'store/reducers/luggageReducer';
const LuggageButtons = ({ action }) => {
  const dispatch = useDispatch();
  const lightLuggage = useSelector(state => state.luggageReducer.lightLuggage);
  const heavyLuggage = useSelector(state => state.luggageReducer.heavyLuggage);

  function validateAmount(action) {
    switch (action) {
      case 'lightIncrement':
        if (lightLuggage < 1) {
          dispatch({ type: LIGHT_LUGGAGE_UP });
        }
        break;
      case 'lightDecrement':
        if (lightLuggage > 0) {
          dispatch({ type: LIGHT_LUGGAGE_DOWN });
        }
        break;
      case 'heavyIncrement':
        if (heavyLuggage < 9) {
          dispatch({ type: HEAVY_LUGGAGE_UP });
        }

        break;
      case 'heavyDecrement':
        if (heavyLuggage > 0) {
          dispatch({ type: HEAVY_LUGGAGE_DOWN });
        }
    }
  }

  return (
    <div>
      {lightLuggage}
      {<br />}
      {heavyLuggage}

      {action === 'lightIncrement' ? <>hola</> : <>chao</>}
      <span onClick={() => validateAmount(action)}>
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
      <span onClick={() => validateAmount(action)}>
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
    </div>
  );
};

export default LuggageButtons;
