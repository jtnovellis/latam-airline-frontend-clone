import React from 'react';
import { useDispatch } from 'react-redux';
import { DECREASE_PRICE } from 'store/reducers/bookingReducer';
import {
  DELETE_DEPARTURE_SEATS,
  DELETE_ARRIVAL_SEATS,
} from '../../store/reducers/flightsReducer';

const PassengersCard = ({
  seat,
  level,
  numPass,
  price,
  column,
  row,
  param,
  setTotalseats,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (param === 'departure') {
      dispatch({ type: DELETE_DEPARTURE_SEATS, payload: { row, column } });
      setTotalseats(prev => prev - 1);
      dispatch({ type: DECREASE_PRICE, payload: price });
    }
    if (param === 'arrival') {
      dispatch({ type: DELETE_ARRIVAL_SEATS, payload: { row, column } });
      setTotalseats(prev => prev - 1);
      dispatch({ type: DECREASE_PRICE, payload: price });
    }
  };

  return (
    <div className='passengerCard'>
      <button className='passengerCard__info'>
        <div className='passengerCard__info--seats'>
          <span>{seat || '- -'}</span>
        </div>
        <div className='passengerCard__info--passenger'>
          <span>Pasajero {numPass}</span>
          <span>{level || 'Sin selección'}</span>
        </div>
        <div className='passengerCard__info--price'>
          <span>COP {price || '--.---,--'}</span>
        </div>
      </button>
      {seat && (
        <button className='passengerCard__delete' onClick={handleClick}>
          Eliminar o cambiar asiento
        </button>
      )}
    </div>
  );
};

export default PassengersCard;
