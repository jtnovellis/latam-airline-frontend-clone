import React, { useEffect } from 'react';
import Footer from 'components/Footer-Register';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import { MuiAccordion } from 'components/MuiComponents/MuiAccordion';
import { useSelector } from 'react-redux';
import BodyPassengerForm from 'components/BodyPassengerForm';

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
      <div className='LATAM__grid'>
        <div className='Passenger__Form'>
          {[...Array(passengersToRender)].map((item, index) => (
            <MuiAccordion
              key={`pass${index}`}
              idItem={index + 1}
              title={`Pasajero${index + 1}`}>
              <BodyPassengerForm passengerId={index} />
            </MuiAccordion>
          ))}
        </div>
        <div className='Passenger__FlightDetails'></div>
      </div>
      <Footer />
    </div>
  );
};
//

export default Passenger;
