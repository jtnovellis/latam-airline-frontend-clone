import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropdownMenu';

function Navmenu() {
  const [drop, setDrop] = useState(false);
  const [dropTwo, setDropTwo] = useState(false);

  const handleOyFClik = () => {
    if (drop) {
      setDrop(false);
    } else {
      setDrop(true);
      setDropTwo(false);
    }
  };
  const handleMVClik = () => {
    if (dropTwo) {
      setDropTwo(false);
    } else {
      setDropTwo(true);
      setDrop(false);
    }
  };
  return (
    <>
      <div className='ofertas-destino'>
        <button type='button' name='ofertas-destino' onClick={handleOyFClik}>
          <span>Ofertas y destinos</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={!drop ? 'faAngleDown' : 'faAngleDownR'}
          />
        </button>
      </div>
      <div className='ofertas-destino'>
        <button type='button' name='ofertas-destino' onClick={handleMVClik}>
          <span>Mis viajes</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={!dropTwo ? 'faAngleDown' : 'faAngleDownR'}
          />
        </button>
      </div>
      <DropdownMenu
        className={drop ? 'dropdown-menu-OyD' : 'dropdown-menu-disable'}
        classforStyle={dropTwo ? 'dropdown-menu-MV' : 'dropdown-menu-disable'}
      />
    </>
  );
}
export default Navmenu;
