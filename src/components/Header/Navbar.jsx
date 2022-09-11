import React from 'react';
import Anchormenu from './Anchormenu';
import Navmenu from './Navmenu';
import WindowSize from '../Hero/WindowSize';

const navClassList = {
  enable: 'container-nav',
  disable: 'disable',
};
function Navbar() {
  const { width } = WindowSize();
  return (
    <div className={width >= 1024 ? navClassList.enable : navClassList.disable}>
      <nav>
        <Navmenu />
        <Anchormenu
          className='centro-ayuda'
          content='Centro de ayuda'
          anchorClass='ayuda'
        />
      </nav>
      <Anchormenu
        className='e-vuelo-container'
        content='Estado de vuelo'
        anchorClass='e-vuelo'
      />
    </div>
  );
}

export default Navbar;
