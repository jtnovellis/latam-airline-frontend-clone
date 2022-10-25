import React, { useEffect } from 'react';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import FooterRegister from '../components/Footer-Register/index';
import { useState } from 'react';
import FullLuggageCard from 'components/Luggage/FullLuggageCard';

import { CONTINUE, GOBACK, NEXT } from 'store/reducers/luggageReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Luggage = () => {
  const { adults, kids } = useSelector(state => state.bookingReducer);
  const initialPassengers = adults + kids;
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
  } = useSelector(state => state.luggageReducer);
  const flightDataPrice = useSelector(state => state.bookingReducer.flightData);
  let flightTotal = 0;
  flightDataPrice.map(item => (flightTotal += item.price));

  const { departureUser, arrivalUser } = useSelector(
    state => state.flightsReducer
  );
  let totalSeatsDeparture = 0;
  departureUser.map(item => {
    let price = item.price;
    totalSeatsDeparture += parseInt(price.replace('.', ''));
  });
  let totalSeatsArival = 0;
  arrivalUser.map(item => {
    let price = item.price;
    totalSeatsArival += parseInt(price.replace('.', ''));
  });
  let seatsTotal = totalSeatsArival + totalSeatsDeparture;
  const squema = {
    departure: {
      combo: false,
      light: 0,
      heavy: 0,
      special: 0,
    },
    arrival: {
      combo: false,
      light: 0,
      heavy: 0,
      special: 0,
    },
  };

  useEffect(() => {
    for (let i = 0; i < initialPassengers; i++) {
      dispatch({
        type: '@initialSchema',
        payload: { initialPassengers, squema },
      });
    }
  }, []);

  const navigate = useNavigate();

  let toShow = [];
  for (let i = 0; i < initialPassengers; i++) {
    toShow.push(<FullLuggageCard key={`card${i}`} selected={selected} />);
  }

  const dispatch = useDispatch();

  function handleClick() {
    if (initialPassengers >= position) {
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
    dispatch({
      type: NEXT,
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
    navigate({
      pathname: '/passenger-form',
    });
  };

  const handleBack = () => {
    if (position !== initialPassengers) {
      if (position > 0) {
        dispatch({
          type: GOBACK,
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
      }
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
                  {position > 0 ? (
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
                  ) : (
                    <></>
                  )}

                  {initialPassengers === 1 ? (
                    <></>
                  ) : (
                    <p> Pasajero {position + 1}</p>
                  )}

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
            <button
              onClick={() => {
                handleContinue();
              }}
              className='status-continue'>
              Agregar y continuar
            </button>
            <div className='status-continue-details'>
              <button>Precio final</button>
              <span>
                COP {(flightTotal + seatsTotal).toLocaleString('en-US')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <FooterRegister />
    </>
  );
};

export default Luggage;
