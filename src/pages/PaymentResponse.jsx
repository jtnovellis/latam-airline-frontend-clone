import React, { useEffect } from 'react';
import Header from 'components/Header-Register/HeaderRegister';
import Footer from '../components/Footer-Register';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const PaymentResponse = () => {
  const [paymentData, setPaymentData] = useState(null);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [queries, _] = useSearchParams();
  const ePaycoRef = queries.get('ref_payco');
  console.log('Params', ePaycoRef);
  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const { data } = await axios.get(
          `https://secure.epayco.co/validation/v1/reference/${ePaycoRef}`
        );
        setPaymentData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchingData();
  }, []);
  return (
    <>
      <Header />
      <div className='paymentResponse'>
        <div className='paymentResponse__card'>
          <h1>Datos de compra</h1>
          <h2>
            {paymentData.success ? 'Compra exitosa' : 'Compra no exitosa'}
          </h2>
          <p>Nombre: {paymentData.data.x_customer_name}</p>
          <p>Id de compra: {paymentData.data.x_id_factura}</p>
          <p>Precio total: {paymentData.data.x_amount}</p>
          <button onClick={handleClick}>Volver al inicio</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentResponse;
