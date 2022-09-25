import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChild, faBaby } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PassengerDropDown from './PassengerDropDown';
import { useDispatch, useSelector } from 'react-redux';
import {
  PASSENGER_AMOUNT_DOWN,
  PASSENGER_AMOUNT_UP,
} from 'store/reducers/bookingReducer';

export function BookingDropdown() {
  const dispatch = useDispatch();
  const passengerAmount = useSelector(state => state.passengerAmount);
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

  function validateSeats(seats, key, action, passengerAmount) {
    if (action === 'add') {
      switch (key) {
        case 'adults':
          if (seats[key] > 8 || passengerAmount > 8) {
            return 'No puedes agregar más de 9 pasajeros';
          }
          break;
        case 'kids':
          if (passengerAmount > 8) {
            return 'No puedes agregar más de 9 pasajeros';
          }
          break;
        case 'babies':
          if (passengerAmount > 8) {
            return 'No puedes agregar más de 9 pasajeros';
          }
          if (seats[key] > seats.adults - 1) {
            return 'No pueden viajar más bebés que adultos';
          }
          break;
      }
    }
    if (action === 'remove') {
      if (key === 'adults' && seats[key] < 2) {
        return 'Debe viajar al menos un adulto';
      }
    }
  }

  function handleClickPlus(key) {
    const error = validateSeats(seats, key, 'add', passengerAmount);
    if (error) {
      setErrors(prev => ({ ...prev, [key]: error }));
      return;
    }
    switch (key) {
      case 'adults':
        setErrors(prev => ({
          ...prev,
          [key]: '',
        }));
        // setSeats(prev => ({ ...prev, [key]: prev[key] + 1 }));
        dispatch({ type: PASSENGER_AMOUNT_UP });
        break;
      case 'kids':
        setErrors(prev => ({
          ...prev,
          [key]: '',
        }));
        // setSeats(prev => ({ ...prev, [key]: prev[key] + 1 }));
        dispatch({ type: PASSENGER_AMOUNT_UP });
        break;
      case 'babies':
        setErrors(prev => ({
          ...prev,
          [key]: '',
        }));
        // setSeats(prev => ({ ...prev, [key]: prev[key] + 1 }));
        dispatch({ type: PASSENGER_AMOUNT_UP });
        break;
    }
  }

  function handleClickMinus(key) {
    const error = validateSeats(seats, key, 'remove', passengerAmount);
    if (error) {
      setErrors(prev => ({ ...prev, [key]: error }));
      return;
    }
    switch (key) {
      case 'adults':
        setErrors(prev => ({
          ...prev,
          [key]: '',
        }));
        setSeats(prev => ({ ...prev, [key]: prev[key] - 1 }));
        dispatch({ type: PASSENGER_AMOUNT_DOWN });
        break;
      case 'kids':
        if (seats[key] > 0) {
          setErrors(prev => ({
            ...prev,
            [key]: '',
          }));
          setSeats(prev => ({ ...prev, [key]: prev[key] - 1 }));
          dispatch({ type: PASSENGER_AMOUNT_DOWN });
        }
        break;
      case 'babies':
        if (seats[key] > 0) {
          setErrors(prev => ({
            ...prev,
            [key]: '',
          }));
          setSeats(prev => ({ ...prev, [key]: prev[key] - 1 }));
          dispatch({ type: PASSENGER_AMOUNT_DOWN });
        }
        break;
    }
  }
  const passengerData = [
    {
      title: 'Adults',
      description: '12 o más años',
      nameClick: 'adults',
      icon: faUser,
      iconClass: 'faUser',
      seats: seats,
      addSeat: handleClickPlus,
      removeSeat: handleClickMinus,
      errors: errors,
    },
    {
      title: 'Niños',
      description: 'De 2 a 11 años',
      nameClick: 'kids',
      icon: faChild,
      iconClass: 'faChild',
      seats: seats,
      addSeat: handleClickPlus,
      removeSeat: handleClickMinus,
      errors: errors,
    },
    {
      title: 'Bebés',
      description: 'Menores de 2 años',
      nameClick: 'babies',
      icon: faBaby,
      iconClass: 'faBaby',
      seats: seats,
      addSeat: handleClickPlus,
      removeSeat: handleClickMinus,
      errors: errors,
    },
  ];

  return (
    <div className='passenger-dropdown'>
      {passengerData.map(
        ({
          title,
          description,
          nameClick,
          icon,
          iconClass,
          seats,
          addSeat,
          removeSeat,
          errors,
        }) => (
          <PassengerDropDown
            key={title}
            title={title}
            description={description}
            nameClick={nameClick}
            icon={<FontAwesomeIcon icon={icon} className={iconClass} />}
            seats={seats}
            addSeat={addSeat}
            removeSeat={removeSeat}
            errors={errors}
          />
        )
      )}
    </div>
  );
}
