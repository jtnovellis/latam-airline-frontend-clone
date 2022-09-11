import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCircleMinus,
  faCirclePlus,
  faChild,
  faBaby,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export function BookingDropdown() {
  const [passenger, setCountPassenger] = useState(1);
  /*   const [countChild, setCountChild] = useState(1);
  const [countBaby, setCountBaby] = useState(1); */

  function handleClickMinus() {
    if (passenger === 1) {
      alert('Debe viajar al menos 1 adulto');
    } else {
      setCountPassenger(passenger - 1);
    }
  }
  function handleClickPlus() {
    if (passenger === 9) {
      alert('No puedes agregar más de 9 pasajeros');
    } else {
      setCountPassenger(passenger + 1);
    }
  }
  return (
    <div className='passenger-dropdown'>
      <div className='adults'>
        <div className='adults-title'>
          <FontAwesomeIcon icon={faUser} className='faUser' />
          <div className='adults-title-info'>
            <span>Adultos</span>
            <span>
              <small>12 o más años</small>
            </span>
          </div>
        </div>
        <div className='adults-counter'>
          <div className='icon-adults-minus'>
            <FontAwesomeIcon
              icon={faCircleMinus}
              className='faCircleMinus'
              onClick={handleClickMinus}
            />
          </div>
          <div className='icon-number'>
            <span>{passenger}</span>
          </div>
          <div className='icon'>
            <FontAwesomeIcon
              icon={faCirclePlus}
              className='faCirclePlus'
              onClick={handleClickPlus}
            />
          </div>
        </div>
      </div>
      <div className='adults'>
        <div className='adults-title'>
          <FontAwesomeIcon icon={faChild} className='faChild' />
          <div className='adults-title-info'>
            <span>Niños</span>
            <span>
              <small>De 2 a 11 años</small>
            </span>
          </div>
        </div>
        <div className='adults-counter'>
          <div className='icon'>
            <FontAwesomeIcon
              icon={faCircleMinus}
              className='faCircleMinus'
              onClick={handleClickMinus}
            />
          </div>
          <div className='icon-number'>
            <span>0</span>
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faCirclePlus} className='faCirclePlus' />
          </div>
        </div>
      </div>
      <div className='adults'>
        <div className='adults-title'>
          <FontAwesomeIcon icon={faBaby} className='faBaby' />
          <div className='adults-title-info'>
            <span>Bebé</span>
            <span>
              <small>Menores de 2 años</small>
            </span>
          </div>
        </div>
        <div className='adults-counter'>
          <div className='icon'>
            <FontAwesomeIcon
              icon={faCircleMinus}
              className='faCircleMinus'
              onClick={handleClickMinus}
            />
          </div>
          <div className='icon-number'>
            <span>0</span>
          </div>
          <div className='icon'>
            <FontAwesomeIcon icon={faCirclePlus} className='faCirclePlus' />
          </div>
        </div>
      </div>
    </div>
  );
}
