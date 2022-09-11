import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Flightdeals({citySelected="Bogotá"}){
    return(
        <div className="fly-offers-menu-container">
            <div className="city-selector-label">
              <span className="menu-label-offers">Ofertas de vuelo desde </span>
              <button id="cityselector">
                <h2 className="cityselected">
                  <span className="cityselectedname">{citySelected}</span>
                  <span className="dropdown-arrow-menu">
                  <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
                  </span>
                </h2>
              </button>
            </div>
            
        </div>
    )
}

export default Flightdeals;