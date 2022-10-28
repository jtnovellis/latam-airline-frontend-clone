import React, { useEffect, useState } from 'react';
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
  const bookingData = JSON.parse(sessionStorage.getItem('bookingData'));
  const listOfUsers = JSON.parse(sessionStorage.getItem('listOfUsers'));

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.put(
          // eslint-disable-next-line no-undef
          `${process.env.REACT_APP_API_LATAM_CLONE}/api/bookings/payconfirm/update`,
          bookingData
        );
      } catch (e) {
        console.error(e);
      }
    };
    const deleteData = async () => {
      try {
        await axios.delete(
          // eslint-disable-next-line no-undef
          `${process.env.REACT_APP_API_LATAM_CLONE}/api/bookings/destroy/${bookingData.bookingId}`
        );
      } catch (e) {
        console.error(e);
      }
    };
    if (show && dataPayment.success === true) {
      fetchData();
    } else {
      deleteData();
    }
  }, [show]);

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
              <h3>Pasajeros:</h3>
              <ul>
                {listOfUsers.map((user, i) => (
                  <li key={`${i} - ${user}`}>{user}</li>
                ))}
              </ul>
              <p>Id de compra: {dataPayment.data.x_id_factura}</p>
              <p>
                Precio total: {dataPayment.data.x_amount.toLocaleString('en')}
              </p>
              <button onClick={handleClick}>Volver al inicio</button>
            </>
          ) : (
            <button onClick={handleClickData}>Finalizar la compra</button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentResponse;
