import React from 'react';
import Header from 'components/Header-Register/HeaderRegister';
import Footer from '../components/Footer-Register';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'components/Spinner';
import { useQuery } from '@tanstack/react-query';

const PaymentResponse = () => {
  /* const [paymentData, setPaymentData] = useState(null); */
  const { isLoading, error, data } = useQuery(['paymentData'], () => {
    axios
      .get(`https://secure.epayco.co/validation/v1/reference/${ePaycoRef}`)
      .then(res => res.data);
  });
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [queries, _] = useSearchParams();
  const ePaycoRef = queries.get('ref_payco');
  console.log('Params', ePaycoRef);
  const handleClick = () => {
    navigate('/');
  };

  /* useEffect(() => {
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
  }, []); */

  if (isLoading) return <Spinner />;
  if (error) return console.error(' algo paso compa revise');
  return (
    <>
      <Header />
      <div className='paymentResponse'>
        <div className='paymentResponse__card'>
          <h1>Datos de compra</h1>
          <h2>{data.success ? 'Compra exitosa' : 'Compra no exitosa'}</h2>
          <p>Nombre: {data.data.x_customer_name}</p>
          <p>Id de compra: {data.data.x_id_factura}</p>
          <p>Precio total: {data.data.x_amount}</p>
          <button onClick={handleClick}>Volver al inicio</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PaymentResponse;
