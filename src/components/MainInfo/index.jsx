import React from 'react';
import CovidInfo from './CovidInfo';
import FlightDeals from '../FlightDeals/Flightdeals';

function MainInfo() {
  return (
    <main className='main-content'>
      <section className='section-main-content'>
        <CovidInfo />
        <hr />
        <FlightDeals />
      </section>
    </main>
  );
}
export default MainInfo;
