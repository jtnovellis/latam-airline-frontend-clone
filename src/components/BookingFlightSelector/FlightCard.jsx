import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  SET_SELECTED_GO_FLIGHT,
  SET_SELECTED_RETURN_FLIGHT,
} from 'store/reducers/flightsReducer';

const FlightCard = prop => {
  const dispatch = useDispatch();
  const { flightData } = useSelector(state => state.bookingReducer);

  const handleClick = () => {
    prop.trigger(true);
    prop.setFlightTrip('return');
    if (!(flightData.length > 0)) {
      console.log('setGo');
      dispatch({
        type: SET_SELECTED_RETURN_FLIGHT,
        payload: prop.flightsAllData,
      });
      dispatch({ type: '@booking/addGoFlight', payload: prop.data });
    } else {
      console.log('setReturn');
      dispatch({ type: SET_SELECTED_GO_FLIGHT, payload: prop.flightsAllData });
      dispatch({ type: '@booking/addGoFlight', payload: prop.data });
    }
  };

  return (
    <div className='FlightCard__body'>
      <div className='FlightCard__header'>
        <div
          className={`FlightCard__header-${
            prop.type === 'Basic'
              ? 'blue'
              : prop.type === 'Light'
              ? 'green'
              : prop.type === 'Plus'
              ? 'aqua'
              : 'none'
          }`}></div>
        <div className='FlightCard__header-title'>
          <span>
            {prop.type === 'Basic'
              ? 'Basic'
              : prop.type === 'Light'
              ? 'Light'
              : prop.type === 'Plus'
              ? 'Plus'
              : 'none'}
          </span>
        </div>
      </div>
      <div className='FlightCard__list'>
        <div className='FlightCard__list-content'>
          <div className='FlightCard__list-content-svg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 20 20'
              fill='none'
              focusable='false'>
              <path
                fill='#00B5AD'
                d='M10 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S0 15.5 0 10 4.5 0 10 0zm3.825 6.055l-5.62 5.643L5.39 8.804l-1.361 1.43 4.175 4.272 7.032-7.098-1.412-1.353z'></path>
            </svg>
          </div>
          <div className='FlightCard__list-content-li'>
            <span>Bolso o mochila pequeña</span>
          </div>
        </div>
        <div className='FlightCard__list-content'>
          <div className='FlightCard__list-content-svg'>
            {prop.type === 'Basic' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='grey'
                  d='M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z'></path>
              </svg>
            ) : prop.type === 'Light' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='#00B5AD'
                  d='M10 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S0 15.5 0 10 4.5 0 10 0zm3.825 6.055l-5.62 5.643L5.39 8.804l-1.361 1.43 4.175 4.272 7.032-7.098-1.412-1.353z'></path>
              </svg>
            ) : prop.type === 'Plus' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='#00B5AD'
                  d='M10 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S0 15.5 0 10 4.5 0 10 0zm3.825 6.055l-5.62 5.643L5.39 8.804l-1.361 1.43 4.175 4.272 7.032-7.098-1.412-1.353z'></path>
              </svg>
            ) : (
              'none'
            )}
          </div>
          <div className='FlightCard__list-content-li'>
            <span>Equipaje de mano 10 kg</span>
          </div>
        </div>
        <div className='FlightCard__list-content'>
          <div className='FlightCard__list-content-svg'>
            {prop.type !== 'Basic' && prop.type !== 'Light' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='#00B5AD'
                  d='M10 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S0 15.5 0 10 4.5 0 10 0zm3.825 6.055l-5.62 5.643L5.39 8.804l-1.361 1.43 4.175 4.272 7.032-7.098-1.412-1.353z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='grey'
                  d='M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z'></path>
              </svg>
            )}
          </div>
          <div className='FlightCard__list-content-li'>
            <span>Equipaje bodega 23 kg</span>
          </div>
        </div>
        <div className='FlightCard__list-content'>
          <div className='FlightCard__list-content-svg'>
            {prop.type === 'Basic' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='grey'
                  d='M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='#00B5AD'
                  d='M10 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S0 15.5 0 10 4.5 0 10 0zm3.825 6.055l-5.62 5.643L5.39 8.804l-1.361 1.43 4.175 4.272 7.032-7.098-1.412-1.353z'></path>
              </svg>
            )}
          </div>
          <div className='FlightCard__list-content-li'>
            <span>
              {prop.type === 'Basic' ? 'Cambio de pasaje' : 'Cambio con cargo'}
            </span>
          </div>
        </div>
        <div className='FlightCard__list-content'>
          <div className='FlightCard__list-content-svg'>
            {prop.type !== 'Basic' && prop.type !== 'Light' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='#00B5AD'
                  d='M10 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S0 15.5 0 10 4.5 0 10 0zm3.825 6.055l-5.62 5.643L5.39 8.804l-1.361 1.43 4.175 4.272 7.032-7.098-1.412-1.353z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='grey'
                  d='M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z'></path>
              </svg>
            )}
          </div>
          <div className='FlightCard__list-content-li'>
            <span>Seleccion de asiento</span>
          </div>
        </div>
        <div className='FlightCard__list-content'>
          <div className='FlightCard__list-content-svg'>
            {prop.type !== 'Basic' && prop.type !== 'Light' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='#F2C94C'
                  d='M10 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S0 15.5 0 10 4.5 0 10 0zm3.825 6.055l-5.62 5.643L5.39 8.804l-1.361 1.43 4.175 4.272 7.032-7.098-1.412-1.353z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20px'
                height='20px'
                viewBox='0 0 20 20'
                fill='none'
                focusable='false'>
                <path
                  fill='grey'
                  d='M10 2a8 8 0 110 16 8 8 0 010-16zm2.121 4.464L10 8.586 7.879 6.464 6.464 7.88 8.586 10l-2.123 2.12 1.414 1.414L10 11.414l2.121 2.122 1.415-1.415L11.414 10l2.12-2.122-1.413-1.414z'></path>
              </svg>
            )}
          </div>
          <div className='FlightCard__list-content-li'>
            <span>
              {prop.type !== 'Basic' && prop.type !== 'Light'
                ? '30% de devolución'
                : 'Devolución de pasaje'}
            </span>
          </div>
        </div>
        <div
          style={prop.type !== 'Basic' ? { visibility: 'hidden' } : null}
          className='FlightCard__list-content'>
          <div className='FlightCard__list-content-svg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 20 20'
              fill='none'
              focusable='false'>
              <path
                fill='red'
                d='M10 .007C4.484.007.007 4.484.007 10S4.484 19.993 10 19.993s9.993-4.477 9.993-9.993S15.516.007 10 .007zm.999 15.992H9V14h1.999v1.999zm0-4H9.001V4h1.998v8z'></path>
            </svg>
          </div>
          <div className='FlightCard__list-content-li'>
            <span>No aplican beneficios por categorías de socio</span>
          </div>
        </div>
      </div>
      <div className='FlightCard__details-price'>
        <Link to={'/'}>
          <div className='FlightCard__detail'>Más detalles</div>
        </Link>
        <div className='FlightCard__price'>
          <div className='FlightCard__price-amount'>
            {prop.type === 'Basic'
              ? Math.floor(prop.price * 0.8)
              : prop.type === 'Light'
              ? prop.price
              : Math.floor(prop.price * 1.2)}
          </div>
          <div className='FlightCard__price-description'>Por pasajero</div>
        </div>
      </div>

      <div className='FlightCard__choose'>
        <div className='FlightCard__choose-button'>
          <button onClick={handleClick}>Elegir</button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
