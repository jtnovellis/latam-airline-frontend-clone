import React, { useEffect } from 'react';
import Footer from 'components/Footer-Register';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import { MuiAccordion } from 'components/MuiComponents/MuiAccordion';
import { useSelector } from 'react-redux';
import BodyPassengerForm from 'components/BodyPassengerForm';
import CommonButton from 'components/Buttons/CommonButton';

const Passenger = () => {
  const { adults, kids } = useSelector(state => state.bookingReducer);
  const { passengerRelated } = useSelector(state => state.flightsReducer);
  const passengersToRender = adults + kids;

  useEffect(() => {
    console.log(passengerRelated);
  }, [passengerRelated]);

  const flightData = useSelector(state => state.flightsReducer);
  const { name, documentType, phoneNumber, documentNumber } = useSelector(
    state => state.userReducer
  );
  const { departureCity, arrivalCity } = useSelector(
    state => state.bookingReducer
  );

  const handler = window.ePayco.checkout.configure({
    // eslint-disable-next-line no-undef
    key: process.env.REACT_APP_PUBLIC_KEY,
    test: true,
  });

  const data = {
    name: `LA${flightData.id}`,
    description: `Vuelo de ${departureCity} a ${arrivalCity}`,
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
    name_billing: `${name}`,
    address_billing: '',
    type_doc_billing: `${documentType}`,
    mobilephone_billing: `${phoneNumber}`,
    number_doc_billing: `${documentNumber}`,

    //atributo deshabilitación metodo de pago
    methodsDisable: ['PSE', 'SP', 'CASH', 'DP'],
  };

  const handleClick = () => {
    handler.open(data);
  };

  return (
    <div>
      <HeaderRegister />
      <div className='Passenger__bodycontainer'>
        <div className='Passenger__LATAM__grid'>
          <section className='Passenger__Form'>
            <ol className='Passenger__Form__list'>
              {[...Array(passengersToRender)].map((item, index) => (
                <li key={`pass${index}`}>
                  <MuiAccordion
                    classname='eachform'
                    idItem={index + 1}
                    title={`Pasajero ${index + 1}`}>
                    <BodyPassengerForm passengerId={index} />
                  </MuiAccordion>
                </li>
              ))}
            </ol>
          </section>
          <aside className='Passenger__FlightDetails'>
            <div className='Passenger__FlightDetails__shoppingCart'>
              <div className='Passenger__FlightDetails__shoppingCart__button'></div>
              <div className='Passenger__FlightDetails__shoppingCart__button'>
                <CommonButton trigger={handleClick}>Continuar</CommonButton>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};
//

export default Passenger;
