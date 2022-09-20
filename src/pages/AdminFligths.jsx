import React from 'react';
import AdminMenu from '../components/BodyAdminFligths/AdminMenu';
import Header from 'components/Header';
import Footer from 'components/Footer-Register/index';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
const AdminFligths = () => {
  const menuOption = [
    {
      slug: '/admin-fligths',
      content: 'Solicitar acceso via email',
    },
    {
      slug: 'travel-data',
      content: 'Ingresa con los datos de tu viaje',
    },
  ];

  const [selected, setSelected] = useState({
    '/admin-fligths': true,
    'travel-data': false,
  });

  return (
    <>
      <Header />
      <div className='main-wrapper'>
        <div className='side-content toHide '>
          <div className='side-div'>
            <h1>Mis Viajes</h1>
            {menuOption.map(link => {
              const { slug, content } = link;
              return (
                <div className='admin-menu' key={content}>
                  <hr />
                  <AdminMenu
                    path={slug}
                    setCurrent={setSelected}
                    current={selected}>
                    {content}
                  </AdminMenu>
                </div>
              );
            })}
          </div>
        </div>
        <div className='admin-main-content'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminFligths;
