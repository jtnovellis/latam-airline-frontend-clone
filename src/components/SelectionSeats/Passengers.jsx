import React from 'react';

const Passengers = () => {
  return (
    <div className='passengersContainer'>
      <h2>Pasajeros</h2>
      <div></div>
      <div className='passengersContainer__flightSelector'>
        <button>Pasar al siguiente vuelo</button>
        <div>
          <button>Precio Final</button>
          <p>COP 408.254,45</p>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
