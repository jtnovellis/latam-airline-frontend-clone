import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChild, faBaby } from '@fortawesome/free-solid-svg-icons';
/* import { useState } from 'react'; */
import PassengerDropDown from './PassengerDropDown';

export function BookingDropdown() {
  return (
    <div className='passenger-dropdown'>
      <PassengerDropDown
        title='Adultos'
        description='12 o más años'
        nameClick='adults'
        icon={<FontAwesomeIcon icon={faUser} className='faUser' />}
      />
      <PassengerDropDown
        title='Niños'
        description='De 2 a 11 años'
        nameClick='kids'
        icon={<FontAwesomeIcon icon={faChild} className='faChild' />}
      />
      <PassengerDropDown
        title='Bebés'
        description='Menores de 2 años'
        nameClick='babies'
        icon={<FontAwesomeIcon icon={faBaby} className='faBaby' />}
      />
    </div>
  );
}
