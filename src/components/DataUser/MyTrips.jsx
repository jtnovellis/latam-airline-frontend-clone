import FlightHistoryCard from 'components/FlightHistoryCard';
import React from 'react';
import { Link } from 'react-router-dom';

const MyTrips = () => {
  const tripHistory = true;

  return (
    <div className='myAccount__bodyContainer-section'>
      <h1 className='myAccount__bodyContainer-title'>
        Bienvenido a Mi historial de viajes
      </h1>
      <div className='myTrips__bodyContainer'>
        {tripHistory === false ? (
          <div className='myTrips--emptyHistory'>
            <h3 className='myTrips--emptyHistory-subtitle'>
              USERNAME, no encontramos viajes
            </h3>
          </div>
        ) : (
          <ul className='myTrips__ulBody latam-grid'>
            <li className='myTrips__liBody'>
              <Link to={''}>
                <FlightHistoryCard />
              </Link>
            </li>
            <li className='myTrips__liBody'>
              <Link to={''}>
                <FlightHistoryCard />
              </Link>
            </li>
            <li className='myTrips__liBody'>
              <Link to={''}>
                <FlightHistoryCard />
              </Link>
            </li>
            <li className='myTrips__liBody'>
              <Link to={''}>
                <FlightHistoryCard />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyTrips;
