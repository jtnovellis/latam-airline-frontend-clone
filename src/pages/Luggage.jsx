import React from 'react';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import FooterRegister from '../components/Footer-Register/index';
import { useState } from 'react';
import FullLuggageCard from 'components/Luggage/FullLuggageCard';

import { CONTINUE } from 'store/reducers/luggageReducer';
import { useDispatch, useSelector } from 'react-redux';
const Luggage = () => {
  const [selected, setSelected] = useState(true);
  const [actualCard, setActualCard] = useState(0);
  const {
    departureLightLuggage,
    departureHeavyLuggage,
    arrivalLightLuggage,
    arrivalHeavyLuggage,
    specialDeparture,
    specialArrival,
    passengers,
    departureCombo,
    arrivalCombo,
  } = useSelector(state => state.luggageReducer);

  let passengerAmount = 3;
  let toShow = [];
  for (let i = 0; i <= passengerAmount; i++) {
    toShow.push(<FullLuggageCard key={`card${i}`} selected={selected} />);
  }
  const dispatch = useDispatch();
  function handleClick() {
    console.log(passengers);
    if (actualCard < passengerAmount) {
      setActualCard(actualCard + 1);
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
      setSelected(true);
    }
  }

  return (
    <>
      <HeaderRegister />
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
            {actualCard !== passengerAmount ? (
              <>
                {' '}
                pasajero {actualCard + 1}{' '}
                <button onClick={() => handleClick()}>
                  Siguiente pasajero
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          {toShow.map((card, index) => {
            if (index === actualCard) {
              return card;
            } else {
              return 'hola';
            }
          })}
        </div>
      </div>

      <FooterRegister />
    </>
  );
};

export default Luggage;
