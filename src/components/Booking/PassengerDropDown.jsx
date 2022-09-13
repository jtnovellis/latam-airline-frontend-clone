import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function PassengerDropDown({ title, description, icon, nameClick }) {
  const [seats, setSeats] = useState({
    adults: 1,
    kids: 0,
    babies: 0,
  });
  const [errors, setErrors] = useState({
    adults: '',
    kids: '',
    babies: '',
  });

  function handleClickMinus(key) {
    console.log(key);
    if (key === 'adults' && seats[key] < 2) {
      setErrors(prevState => ({
        ...prevState,
        [key]: 'Debe viajar al menos 1 adulto',
      }));
    } else {
      setSeats(prevState => ({ ...prevState, [key]: prevState[key] - 1 }));
    }
  }
  function handleClickPlus(key) {
    if (key === 'adults' && seats[key] >= 9) {
      setErrors(prevState => ({
        ...prevState,
        [key]: 'No puedes agregar mas de 9 pasajeros',
      }));
    } else {
      setSeats(prevState => ({ ...prevState, [key]: prevState[key] + 1 }));
    }
  }

  return (
    <>
      <div className='adults'>
        <div className='box'>
          <div className='adults-title'>
            {icon}
            <div className='adults-title-info'>
              <span>{title}</span>
              <span>
                <small>{description}</small>
              </span>
            </div>
          </div>
          <div className='adults-counter'>
            <div className='icon-adults-minus'>
              <FontAwesomeIcon
                icon={faCircleMinus}
                className='faCircleMinus'
                onClick={() => handleClickMinus(nameClick)}
              />
            </div>
            <div className='icon-number'>
              <span>{seats.adults}</span>
            </div>
            <div className='icon'>
              <FontAwesomeIcon
                icon={faCirclePlus}
                className='faCirclePlus'
                onClick={() => handleClickPlus(nameClick)}
              />
            </div>
          </div>
        </div>
        {errors[nameClick] ? <p className='err'>{errors.adults}</p> : null}
      </div>
    </>
  );
}
export default PassengerDropDown;
