import React from 'react';

const PassengersCard = ({ seat, level, numPass, price }) => {
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
        <button className='passengerCard__delete'>
          Eliminar o cambiar asiento
        </button>
      )}
    </div>
  );
};

export default PassengersCard;
