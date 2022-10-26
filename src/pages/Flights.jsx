import React from 'react';
import '../scss/pages/Flights.scss';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import Boxsearch from 'components/Booking/Boxsearch';
import BookingInputs from 'components/Booking/BookingInputs';
import BookingInputsDesktop from 'components/Booking/BookingInputsDesktop';
import FlightContainer from '../components/BookingFlightSelector/FlightContainer';
import StatusFlight from 'components/StatusFlight/StatusFlight';
import FlightInfo from 'components/StatusFlight/FlightInfo';
import { useState } from 'react';
const Flights = () => {
  const [flightFetchedData, setFlightFetchedData] = useState({});
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flightTrip, setFlightTrip] = React.useState('go');
  return (
    <>
      <HeaderRegister />
      <div className='container-flights'>
        <div>
          <Boxsearch />
          <BookingInputs />
          <BookingInputsDesktop
            setFlightFetchedData={setFlightFetchedData}
            setIsLoading={setIsLoading}
            setError={setError}
          />
        </div>
      </div>
      <div className='container-flights2'>
        <div className='cf'>
          <FlightContainer
            flightFetchedData={flightFetchedData}
            setFlightFetchedData={setFlightFetchedData}
            trigger={setShow}
            flightTrip={flightTrip}
            setFlightTrip={setFlightTrip}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            error={error}
            setError={setError}
          />
          <div className='Status'>
            {show ? (
              <FlightInfo setFlightTrip={setFlightTrip} />
            ) : (
              <StatusFlight />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Flights;
