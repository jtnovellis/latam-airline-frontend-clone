import axios from 'axios';
import FlightHistoryCard from 'components/FlightHistoryCard';
import Spinner from 'components/Spinner';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const MyTrips = ({ noLoginEmail }) => {
  const { email, name } = useSelector(state => state.userReducer);
  const [userBookingData, setUserBookingData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const emailToUse = email || noLoginEmail;
  useEffect(() => {
    const fetchData = async data => {
      try {
        setIsLoading(true);
        const res = await axios.post(
          // eslint-disable-next-line no-undef
          `${process.env.REACT_APP_API_LATAM_CLONE}/api/users/userflights`,
          {
            email: data,
          }
        );
        setUserBookingData(res.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(emailToUse);
  }, []);

  const { bookings } = userBookingData;
  if (isLoading) return <Spinner />;

  return (
    <div className='myAccount__bodyContainer-section'>
      <h1 className='myAccount__bodyContainer-title'>
        Bienvenido a Mi historial de viajes
      </h1>
      <div className='myTrips__bodyContainer'>
        <ul className='myTrips__ulBody latam-grid'>
          {bookings ? (
            bookings.map(booking => {
              const { tripGoFlight, _id } = booking;
              const { departureAirport, departureArrival, date } = tripGoFlight;
              const departureDate = `${new Date(date).getFullYear()} ${
                new Date(date).getMonth() < 10
                  ? `0${new Date(date).getMonth()}`
                  : `${new Date(date).getMonth()}`
              } ${new Date(date).getDay()}`;
              return (
                <li key={_id} className='myTrips__liBody'>
                  <FlightHistoryCard
                    imgUrl={departureAirport.cityImage}
                    departureCity={departureAirport.city}
                    arrivalCity={departureArrival.city}
                    departureDate={departureDate}
                  />
                </li>
              );
            })
          ) : (
            <div className='myTrips--emptyHistory'>
              <h3 className='myTrips--emptyHistory-subtitle'>
                {name}, no encontramos viajes
              </h3>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyTrips;
