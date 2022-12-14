import React from 'react';
import CalendarRange from './CalendarRange';
import { useSelector } from 'react-redux';
import {
  BOOKING_CITIES_ADD_DEPARTURE,
  BOOKING_CITIES_ADD_ARRIVAL,
} from 'store/reducers/bookingReducer';
import { useNavigate } from 'react-router-dom';
import AutocompleteInput from './AutocompleteInput';
import { backcities } from '../../CitiesForAutocomplete';

function BookingInputsDesktop() {
  const navigate = useNavigate();

  const departureCity = useSelector(
    state => state.bookingReducer.departureCity
  );
  const { arrivalCity, dates } = useSelector(state => state.bookingReducer);

  const handleSubmit = () => {
    if (arrivalCity !== null && dates[0] !== null) {
      navigate(
        `/flights?departureCity=${departureCity}&arrivalCity=${arrivalCity}&goDate=${
          dates[0]
        }&goBackDate=${dates[1] || null}`
      );
    }
  };

  return (
    <div className='input-desktop-container'>
      <div className='form-container'>
        <div className='inputs'>
          <div className='input-text-container'>
            <div className='input'>
              <AutocompleteInput
                cities={backcities}
                id='city-departure'
                action={BOOKING_CITIES_ADD_DEPARTURE}
                value={departureCity}
                label='Ingresa Origen'
              />
            </div>
          </div>
          <div className='input-text-container-two'>
            <div className='input'>
              <AutocompleteInput
                cities={backcities}
                id='city-arrival'
                action={BOOKING_CITIES_ADD_ARRIVAL}
                value={arrivalCity}
                label='Ingresa Destino'
              />
            </div>
          </div>
          <CalendarRange />
          <div className='btn-submit-search'>
            <button onClick={handleSubmit} type='submit' className='btn-buscar'>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingInputsDesktop;
