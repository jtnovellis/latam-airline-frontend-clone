import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function PassengerDropDown({ title, description, icon, nameClick }) {
  const [add, setAdd] = useState(1);
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
    if (key === 'adults' && seats[key] < 2) {
      setErrors(prev => ({
        ...prev,
        [key]: 'Debe viajar al menos 1 adulto',
      }));
    } else if (key === 'adults') {
      setErrors(prev => ({
        ...prev,
        [key]: '',
      }));
      setSeats(prev => ({ ...prev, [key]: prev[key] - 1 }));
      setAdd(prev => prev - 1);
    }
    if (key === 'kids' && seats[key] < 1) {
      setErrors(prev => ({
        ...prev,
        [key]: '',
      }));
    } else if (key === 'kids') {
      setErrors(prev => ({
        ...prev,
        [key]: '',
      }));
      setSeats(prev => ({ ...prev, [key]: prev[key] - 1 }));
      setAdd(prev => prev - 1);
    }
    if (key === 'babies' && seats[key] < 1) {
      setErrors(prev => ({
        ...prev,
        [key]: '',
      }));
    } else if (key === 'babies') {
      setErrors(prev => ({
        ...prev,
        [key]: '',
      }));
      setSeats(prev => ({ ...prev, [key]: prev[key] - 1 }));
      setAdd(prev => prev - 1);
    }
  }

  function handleClickPlus(key) {
    if (key === 'adults' && seats[key] > add) {
      setErrors(prev => ({
        ...prev,
        [key]: 'No puedes agregar mas de 9 pasajeros',
      }));
    } else if (key === 'adults') {
      setErrors(prev => ({
        ...prev,
        [key]: '',
      }));
      setSeats(prev => ({ ...prev, [key]: prev[key] + 1 }));
      setAdd(prev => prev + 1);
    }
    if (key === 'kids' && add > 8) {
      setErrors(prev => ({
        ...prev,
        [key]: 'No puedes agregar mas de 9 pasajeros',
      }));
    } else if (key === 'kids') {
      setErrors(prev => ({
        ...prev,
        [key]: '',
      }));
      setSeats(prev => ({ ...prev, [key]: prev[key] + 1 }));
      setAdd(prev => prev + 1);
    }
    if (key === 'babies' && seats[key] > seats.adults - 1) {
      setErrors(prev => ({
        ...prev,
        [key]: 'No pueden viajar más bebés que adultos',
      }));
    } else if (key === 'babies' && add > 8) {
      setErrors(prev => ({
        ...prev,
        [key]: 'No puedes agregar mas de 9 pasajeros',
      }));
      setSeats(prev => ({ ...prev, [key]: prev[key] + 1 }));
      setAdd(prev => prev + 1);
    } else if (key === 'babies') {
      setErrors(prev => ({
        ...prev,
        [key]: '',
      }));
      setSeats(prev => ({ ...prev, [key]: prev[key] + 1 }));
      setAdd(prev => prev + 1);
    }
  }
  console.log(seats);
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
              <span>{seats[nameClick]}</span>
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
        {errors[nameClick] && <p className='err'>{errors[nameClick]}</p>}
      </div>
    </>
  );
}
export default PassengerDropDown;
