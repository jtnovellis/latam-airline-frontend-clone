import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faMapPin } from '@fortawesome/free-solid-svg-icons';

function BookingInputs() {
  return (
    <ul className='input-container'>
      <li>
        <div className='origen-container'>
          <div className='svg-origen'>
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              className='faPlaneDeparture'
            />
          </div>
          <div className='origen'>
            <input type='text' name='origen' placeholder='Origen' />
          </div>
        </div>
      </li>
      <li>
        <div className='origen-container'>
          <div className='svg-origen'>
            <FontAwesomeIcon icon={faMapPin} className='faMapPin' />
          </div>
          <div className='origen'>
            <input type='text' name='destino' placeholder='Destino' />
          </div>
        </div>
      </li>
    </ul>
  );
}
export default BookingInputs;
