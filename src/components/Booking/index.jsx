import React from 'react';
import Flightpanel from './Flightpanel';
import Products from './Products';

function Booking() {
  return (
    <div className='booking-box'>
      <div className='products-wrapper'>
        <Products />
        <Flightpanel />
      </div>
    </div>
  );
}
export default Booking;
