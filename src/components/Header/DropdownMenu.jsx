import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function DropdownMenu(props) {
  return (
    <div className={props.className}>
      <div className='dropdown-menu-item'>
        <Link to='ofertas'>
          <FontAwesomeIcon icon={faTicket} className='faTicket' />
          <span>Ofertas de vuelos</span>
        </Link>
      </div>
      <div className='dropdown-menu-item'>
        <Link to='destinos'>
          <FontAwesomeIcon icon={faEarthAmericas} className='faEarthAmericas' />
          <span>Destinos</span>
        </Link>
      </div>
    </div>
  );
}
export default DropdownMenu;
