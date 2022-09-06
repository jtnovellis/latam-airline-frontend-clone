import React from 'react';
import Anchormenu from './Anchormenu';
import Navmenu from './Navmenu';

function Navbar() {
  return (
    <div className='container-nav'>
      <nav>
        <Navmenu content='Ofertas y destinos' />
        <Navmenu content='Mis viajes' />
        <Anchormenu className='centro-ayuda' content='Centro de ayuda' />
      </nav>
      <Anchormenu className='e-vuelo-container' content='Estado de vuelo' />
    </div>
  );
}

export default Navbar;
