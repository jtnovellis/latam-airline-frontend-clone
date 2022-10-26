import React, { useState } from 'react';
import Header from 'components/Header-Register/HeaderRegister';
import Footer from '../components/Footer-Register';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'components/Spinner';

const PaymentResponse = () => {
  // eslint-disable-next-line no-unused-vars
  const [queries, _] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const ePaycoRef = queries.get('ref_payco');
  const [dataPayment, setDataPayment] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  const handleClickData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://secure.epayco.co/validation/v1/reference/${ePaycoRef}`
      );
      setDataPayment(data);
    } catch {
      console.error(' algo paso compa revise');
    } finally {
      setIsLoading(false);
      setShow(true);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Header />
      <div className='paymentResponse'>
        <div className='paymentResponse__card'>
          <h1>Datos de compra</h1>
          {show ? (
            <>
              <h2>
                {dataPayment.success ? 'Compra exitosa' : 'Compra no exitosa'}
              </h2>
              <p>Nombre: {dataPayment.data.x_customer_name}</p>
              <p>Id de compra: {dataPayment.data.x_id_factura}</p>
              <p>Precio total: {dataPayment.data.x_amount}</p>
              <button onClick={handleClick}>Volver al inicio</button>
            </>
          ) : (
            <button onClick={handleClickData}>Mostrar Datos</button>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaymentResponse;
