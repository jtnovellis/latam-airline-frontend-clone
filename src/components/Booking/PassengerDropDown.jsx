import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function PassengerDropDown({
  title,
  description,
  icon,
  nameClick,
  seats,
  addSeat,
  removeSeat,
  errors,
}) {
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
                onClick={() => removeSeat(nameClick)}
              />
            </div>
            <div className='icon-number'>
              <span>{seats[nameClick]}</span>
            </div>
            <div className='icon'>
              <FontAwesomeIcon
                icon={faCirclePlus}
                className='faCirclePlus'
                onClick={() => addSeat(nameClick)}
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
