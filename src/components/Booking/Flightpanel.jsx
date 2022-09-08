import React from 'react';
import BookingInputs from './BookingInputs';
import Boxsearch from './Boxsearch';
import BookingInputsDesktop from './BookingInputsDesktop';

function Flightpanel() {
  return (
    <div className='panel-flight'>
      <div className='panel-flight-container'>
        <div className='wrapper-flight'>
          <Boxsearch />
          <BookingInputs />
          <BookingInputsDesktop />
        </div>
      </div>
    </div>
  );
}
export default Flightpanel;
