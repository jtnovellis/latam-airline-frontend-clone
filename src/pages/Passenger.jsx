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
                <CommonButton>Continuar</CommonButton>
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
