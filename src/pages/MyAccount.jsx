import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MyAccount = () => {
  return (
    <div>
      <h1>My Account</h1>
      <Link to='my-trips'>mis viajes</Link>
      <Link to='pay-methods'>metodos de pago</Link>
      <Outlet />
    </div>
  );
};

export default MyAccount;
