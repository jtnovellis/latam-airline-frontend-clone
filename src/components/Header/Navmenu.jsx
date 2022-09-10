import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropdownMenu';

function Navmenu({ content }) {
  const [drop, setDrop] = useState(false);

  const handleClik = () => {
    if (drop) {
      setDrop(false);
    } else {
      setDrop(true);
    }
  };
  return (
    <>
      <div className='ofertas-destino'>
        <button type='button' name='ofertas-destino' onClick={handleClik}>
          <span>{content}</span>
          <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
        </button>
      </div>
      <DropdownMenu
        className={drop ? 'dropdown-menu' : 'dropdown-menu-disable'}
      />
    </>
  );
}
export default Navmenu;
