import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingMedical,
  faEarthAfrica,
  faFileLines,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CovidInfo() {
  return (
    <div className='covid-communications__container'>
      <div className='covid-comunications__subcontainer'>
        <div className='covid-comunications-info'>
          <div className='covid-comunications-info-header'>
            <FontAwesomeIcon
              icon={faHandHoldingMedical}
              className='faHandHoldingMedical'
            />
            <h2>
              <span>Información para COVID-19</span>
            </h2>
          </div>
          <p>
            <span>
              En nuestro{' '}
              <Link to='/covid' className='covid-link'>
                Centro de información COVID-19
              </Link>{' '}
              encontrarás todo lo necesario para viajar, cambiar tu vuelo,
              documentación y más.
            </span>
          </p>
        </div>
      </div>
      <div className='main-options-container'>
        <div className='option-container'>
          <ul className='option-ul'>
            <li className='option-ul-li'>
              <Link to='/' className='option-ul-li-a'>
                <div className='option-one-info'>
                  <div className='one-info'>
                    <FontAwesomeIcon
                      icon={faEarthAfrica}
                      className='faEarthAfrica'
                    />
                  </div>
                  <span>Cambios y cancelaciones</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className='faAngleRight' />
              </Link>
            </li>
            <hr />
            <li className='option-ul-li'>
              <Link to='#' className='option-ul-li-a'>
                <div className='option-one-info'>
                  <div className='one-info'>
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className='faFileLines'
                    />
                  </div>
                  <span>Requisitos para tu viaje</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight} className='faAngleRight' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CovidInfo;
