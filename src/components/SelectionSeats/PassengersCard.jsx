import React from 'react';

const selection = (lvl, clmn) => {
  lvl && clmn ? `${lvl} - ${clmn}` : null;
};
const PassengersCard = ({ seat, level, column, passenger, numPass, price }) => {
  return (
    <div className='passengerCard'>
      <button className='passengerCard__info'>
        <div className='passengerCard__info--seats'>
          <span>{seat || '- -'}</span>
        </div>
        <div className='passengerCard__info--passenger'>
          <span>
            {passenger || 'Adulto 1'} {numPass}
          </span>
          <span>{selection(level, column) || 'Sin selección'}</span>
        </div>
        <div className='passengerCard__info--price'>
          <span>COP {price || '23.343,32'}</span>
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
