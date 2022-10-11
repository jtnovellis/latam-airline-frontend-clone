import { useSelector } from 'react-redux';

export const Payment = ({ children }) => {
  const flightData = useSelector(state => state.flightsReducer);
  const userData = useSelector(state => state.userReducer);

  const handler = window.ePayco.checkout.configure({
    // eslint-disable-next-line no-undef
    key: process.env.REACT_APP_PUBLIC_KEY,
    test: true,
  });

  const data = {
    name: `LA${flightData.id}`,
    description: 'Vestido Mujer Primavera',
    invoice: `${flightData.id}`,
    currency: 'cop',
    amount: `${flightData.price.light}`,
    tax_base: '0',
    tax: '0',
    country: 'co',
    lang: 'es',
    external: 'false',
    extra1: `${flightData.departureUser}`,
    extra2: `${flightData.arrivalUser}`,
    extra3: 'extra3',
    response: 'http://secure2.payco.co/prueba_curl.php',
    name_billing: `${userData.name}`,
    address_billing: '',
    type_doc_billing: `${userData.documentType}`,
    mobilephone_billing: `${userData.phoneNumber}`,
    number_doc_billing: `${userData.documentNumber}`,

    //atributo deshabilitación metodo de pago
    methodsDisable: ['PSE', 'SP', 'CASH', 'DP'],
  };

  const handleClick = () => {
    handler.open(data);
  };
  return <button onClick={handleClick}>{children}</button>;
};
