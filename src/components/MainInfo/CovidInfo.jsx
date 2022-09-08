import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

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
        </div>
      </div>
    </div>
  );
}
export default CovidInfo;
