import React from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PassengersCard from './PassengersCard';

const Passengers = () => {
  return (
    <div className='passengersContainer'>
      <div className='passengersContainer__header'>
        <h2>Pasajeros</h2>
        <div className='passengersContainer__data'>
          <PassengersCard />
        </div>
      </div>
      <div className='passengersContainer__flightSelector'>
        <button className='passengersContainer__flightSelector--buttonNext'>
          Pasar al siguiente vuelo
        </button>
        <div>
          <button>
            <span>Precio final</span>
            <KeyboardArrowUpOutlinedIcon />
          </button>
          <p>COP 408.254,45</p>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
