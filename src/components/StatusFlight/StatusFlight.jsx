import React from 'react';
import image from '../../images/statusFlight/aeroplane.png';

const StatusFlight = () => {
  return (
    <div className='statusf'>
      <h1>Resumen de tu viaje</h1>
      <img src={image} alt='' />
      <div className='not-flight'>
        <h2>Aún no has seleccionado un vuelo</h2>
        <p>Tus vuelos aparecerán aquí una ves que los selecciones.</p>
      </div>
    </div>
  );
};

export default StatusFlight;
