import React from 'react';

const NonExistingRoute = () => {
  return (
    <div className='Non-existing-route'>
      <div>
        <img
          src='https://s.latamairlines.com/images/web-air-offers/girl-in-desk.svg'
          rel='preload'
          aria-hidden='true'
          alt='Fail'></img>
      </div>
      <h1>No hay vuelos para esta fecha</h1>
      <span>
        ¡Tenemos más opciones para ti!
        <strong>Cambia los días en el calendario</strong> para tu viaje.
      </span>
    </div>
  );
};

export default NonExistingRoute;
