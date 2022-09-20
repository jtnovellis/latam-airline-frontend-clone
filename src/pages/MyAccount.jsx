import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MenuSelector from '../components/DataUser/MenuSelector';
import Header from '../components/Header';
import Footer from '../components/Footer-Register';

const menuOptions = [
  {
    slug: '/my-account',
    content: 'Mi cuenta',
  },
  {
    slug: 'my-trips',
    content: 'Mis viajes',
  },
  {
    slug: 'pay-methods',
    content: 'Metodos de pago',
  },
];

const MyAccount = () => {
  const [selected, setSelected] = useState({
    '/my-account': false,
    'my-trips': false,
    'pay-methods': false,
  });

  return (
    <>
      <Header />
      <div className='myAccount'>
        <div className='myAccount__infoContainer'>
          <div className='myAccount__infoContainer-title'>
            <h2>Mi Cuenta</h2>
          </div>
          <div className='myAccount__infoContainer-menu'>
            {menuOptions.map(link => {
              const { slug, content } = link;
              return (
                <div key={content}>
                  <hr />
                  <MenuSelector
                    path={slug}
                    setCurrent={setSelected}
                    current={selected}>
                    {content}
                  </MenuSelector>
                </div>
              );
            })}
            <hr />
          </div>
        </div>
        <div className='myAccount__bodyContainer'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;
