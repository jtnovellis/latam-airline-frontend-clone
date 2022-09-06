import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Navmenu({ content }) {
  return (
    <div className='ofertas-destino'>
      <button type='button' name='ofertas-destino'>
        <span>{content}</span>
        <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
      </button>
    </div>
  );
}
export default Navmenu;
