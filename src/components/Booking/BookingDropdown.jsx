import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function BookingDropdown() {
  const [Passenger, setCountPassenfer] = useState(1);
  const [countChild, setCountChild] = useState(1);
  const [countBaby, setCountBaby] = useState(1);
  return (
    <div className='passenger-dropdown'>
      <div className='adults'>
        <div className='adults-title'>
          <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
          <div className='adults-title-info'>
            <span>Adultos</span>
            <span>12 o más años</span>
          </div>
        </div>
        <div className='adults-counter'>
          <div className='icon'>
            <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
          </div>
          <div>
            <span>1</span>
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingDropdown;
