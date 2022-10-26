import React from 'react';
import Header from 'components/Header-Register/HeaderRegister';
import Footer from '../components/Footer-Register';
import { useNavigate, useParams } from 'react-router-dom';

const PaymentResponse = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log('Params', params);
  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <Header />
      <div className='paymentResponse'>
        <div className='paymentResponse__card'>
          <h1>Datos de compra</h1>
          <h2>Compra exitosa</h2>
          <p>Nombre:</p>
          <p>Id de compra:</p>
          <p>Precio total:</p>
          <button onClick={handleClick}>Volver al inicio</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentResponse;
