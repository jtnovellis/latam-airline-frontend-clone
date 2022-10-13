import React from 'react';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import FooterRegister from '../components/Footer-Register/index';
import { useState } from 'react';
import FullLuggageCard from 'components/Luggage/FullLuggageCard';

import {
  CONTINUE,
  GOBACK,
  DEPARTURE_COMBO_DOWN,
  ARRIVAL_COMBO_DOWN,
  DEPARTURE_LIGHT_LUGGAGE_DOWN,
  DEPARTURE_HEAVY_LUGGAGE_DOWN,
  ARRIVAL_LIGHT_LUGGAGE_DOWN,
  ARRIVAL_HEAVY_LUGGAGE_DOWN,
  SPECIAL_DEPARTURE_DOWN,
  SPECIAL_ARRIVAL_DOWN,
} from 'store/reducers/luggageReducer';
import { useDispatch, useSelector } from 'react-redux';
const Luggage = () => {
  const [selected, setSelected] = useState(true);
  const {
    departureLightLuggage,
    departureHeavyLuggage,
    arrivalLightLuggage,
    arrivalHeavyLuggage,
    specialDeparture,
    specialArrival,

    departureCombo,
    arrivalCombo,
    position,
    initialPassengers,
  } = useSelector(state => state.luggageReducer);
  let toShow = [];
  for (let i = 0; i < initialPassengers; i++) {
    toShow.push(<FullLuggageCard key={`card${i}`} selected={selected} />);
  }

  const dispatch = useDispatch();
  function handleClick() {
    if (position < initialPassengers) {
      dispatch({
        type: CONTINUE,
        payload: {
          departure: {
            combo: departureCombo,
            light: departureLightLuggage,
            heavy: departureHeavyLuggage,
            special: specialDeparture,
          },
          arrival: {
            combo: arrivalCombo,
            light: arrivalLightLuggage,
            heavy: arrivalHeavyLuggage,
            special: specialArrival,
          },
        },
      });

      console.log(position);
      console.log(initialPassengers);

      setSelected(true);
    }
  }
  const handleBack = () => {
    if (position !== initialPassengers) {
      if (position > 0) {
        dispatch({ type: GOBACK });
      }
    } else {
      dispatch({ type: DEPARTURE_COMBO_DOWN });
      dispatch({ type: ARRIVAL_COMBO_DOWN });
      dispatch({ type: DEPARTURE_LIGHT_LUGGAGE_DOWN });
      dispatch({ type: DEPARTURE_HEAVY_LUGGAGE_DOWN });
      dispatch({ type: ARRIVAL_LIGHT_LUGGAGE_DOWN });
      dispatch({ type: ARRIVAL_HEAVY_LUGGAGE_DOWN });
      dispatch({ type: SPECIAL_DEPARTURE_DOWN });
      dispatch({ type: SPECIAL_ARRIVAL_DOWN });
    }
  };
  return (
    <>
      <HeaderRegister />
      <div className='Luggage__container'>
        <div className='Luggage_wrapper'>
          <h1>Compra tu equipaje ahora y paga menos en el aeropuerto</h1>
          <div className='Luggage__selector'>
            <div className='Luggagecard__body-departure-arrival'>
              <div
                style={selected ? { borderBottom: '2px solid red' } : {}}
                onClick={() => (!selected ? setSelected(true) : <></>)}
                className='Luggagecard__body-departure'>
                <button>Ida</button>
              </div>
              <div
                style={!selected ? { borderBottom: '2px solid red' } : {}}
                onClick={() => (selected ? setSelected(false) : <></>)}
                className='Luggagecard__body-arrival'>
                <button>Vuelta</button>
              </div>
            </div>
            <div>
              {position !== initialPassengers ? (
                <div className='Luggage__passenger-selector'>
                  <svg
                    onClick={() => handleBack()}
                    style={{ transform: 'rotate(90deg)' }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='20px'
                    height='20px'
                    viewBox='0 0 20 20'
                    fill='none'
                    focusable='false'>
                    <path
                      fill='red'
                      d='M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z'></path>
                  </svg>
                  <p> Pasajero {position + 1}</p>
                  {position !== initialPassengers - 1 ? (
                    <svg
                      onClick={() => handleClick()}
                      style={{ transform: 'rotate(-90deg)' }}
                      xmlns='http://www.w3.org/2000/svg'
                      width='20px'
                      height='20px'
                      viewBox='0 0 20 20'
                      fill='none'
                      focusable='false'>
                      <path
                        fill='red'
                        d='M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z'></path>
                    </svg>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <div className='Luggage__passenger-selector'>
                  <p> Por favor, de click a continuar</p>
                </div>
              )}
            </div>
            {toShow.map((card, index) => {
              if (index === position) {
                return card;
              }
            })}
          </div>
        </div>
        <div className='Luggage_status'>
          <div className='status-info'></div>
          <div className='status-info-continue'>
            <hr />
            <button onClick={() => handleClick()} className='status-continue'>
              continuar
            </button>
            <div className='status-continue-details'>
              <button>Precio final</button>
              <span>COP 000,000,00</span>
            </div>
          </div>
        </div>
      </div>

      <FooterRegister />
    </>
  );
};

export default Luggage;
