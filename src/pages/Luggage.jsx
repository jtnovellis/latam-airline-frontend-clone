import React from 'react';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import FooterRegister from '../components/Footer-Register/index';
import { useState } from 'react';
import FullLuggageCard from 'components/Luggage/FullLuggageCard';

import { CONTINUE } from 'store/reducers/luggageReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  let passengerAmount = 3;
  let toShow = [];
  for (let i = 0; i < passengerAmount; i++) {
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
  const handleContinue = () => {
    navigate({
      pathname: '/passenger-form',
    });
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
              {actualCard !== passengerAmount ? (
                <div className='Luggage__passenger-selector'>
                  <p> Pasajero {actualCard + 1}</p>

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
                </div>
              ) : (
                <div className='Luggage__passenger-selector'>
                  <p> Pasajero {actualCard + 1}</p>
                </div>
              )}
            </div>
            {toShow.map((card, index) => {
              if (index === actualCard) {
                return card;
              }
            })}
          </div>
        </div>
        <div className='Luggage_status'>
          <div className='status-info'></div>
          <div className='status-info-continue'>
            <hr />
            <button onClick={handleContinue} className='status-continue'>
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
