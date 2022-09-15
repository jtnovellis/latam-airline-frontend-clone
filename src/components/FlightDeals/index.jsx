import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import FlightCard from '../FlightCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { flightsArr } from '../../DummyData';
import { Link } from 'react-router-dom';

function FlightDeals() {
  const [flights, setFlights] = useState([]);

  const [selectedCity] = useState('Bogotá');

  useEffect(() => {
    const newFlights = flightsArr.filter(
      flight => flight.from === selectedCity
    );
    setFlights(newFlights);
  }, [selectedCity]);

  return (
    <>
      <div className='fly-offers-menu-container'>
        <div className='city-selector-label'>
          <span className='menu-label-offers'>Ofertas de vuelo desde </span>
          <button id='cityselector'>
            <h2 className='cityselected'>
              <span className='cityselectedname'>{selectedCity}</span>
              <span className='dropdown-arrow-menu'>
                <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
              </span>
            </h2>
          </button>
        </div>
      </div>
      <div className='offers-imgs-container'>
        <div id='deals-carousel' className='doxKgH'>
          <div className='cQREGG'>
            <ul className='offers-carousel'>
              {flights.map(flight => (
                <FlightCard flightDetails={flight} key={flight.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="terms-container">
            <a href="#" className="termsAndConditions">
              <span id="terms-and-conditions-sr-label" className="t-and-c-label">
                <span>Conocer los términos y condiciones de vuelos recomendados.</span>
              </span>
              Términos y condiciones generales
              <i className="icon-redirect" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 20 20" fill="none" focusable="false">
                  <path fill="currentColor" d="M7 2v2H4v12h12v-3h2v5H2V2h5zm11 0v8h-2V5.379L8.38 13 7 11.62 14.62 4H10V2h8z">                    
                  </path>
                </svg>
              </i>
            </a>
          </div> */}
      <div className='terms-container'>
        <Link to='/terminos-y-condiciones' className='terms-container'>
          <span>Términos y condiciones generales</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className='faArrowUpRightFromSquare'
          />
        </Link>
      </div>
    </>
  );
}

export default FlightDeals;
