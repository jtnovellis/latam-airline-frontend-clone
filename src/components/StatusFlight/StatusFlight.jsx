import React from 'react';
import image from '../../images/statusFlight/aeroplane.png';

const StatusFlight = () => {
  return (
    <div>
      <div className='statusf'>
        <h1>resumen de tu viaje</h1>
        <img src={image} alt='' />
        <h2>Aún no has seleccionado un vuelo</h2>
        <p>Tus vuelos aparecerán aquí una ves que los selecciones.</p>
      </div>
    </div>
  );
};

export default StatusFlight;
