import React from 'react';

import MenuSelector from 'components/DataUser/MenuSelector';
import Header from 'components/Header';
import Footer from 'components/Footer-Register/index';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
const AdminFligths = () => {
  const menuOption = [
    {
      slug: '/admin-fligths',
      content: 'Acceso via email',
    },
  ];

  const [selected, setSelected] = useState({
    '/admin-fligths': true,
    'travel-data': false,
  });

  return (
    <>
      <Header />
      <div className='myAccount'>
        <div className='myAccount__infoContainer'>
          <div className='myAccount__infoContainer-title'>
            <h2>Mis Viajes</h2>
          </div>
          <div className='myAccount__infoContainer-menu'>
            {menuOption.map(link => {
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
          </div>
        </div>
        <div className='admin-main-content '>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminFligths;
