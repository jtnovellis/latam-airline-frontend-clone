import React from 'react';
import CovidInfo from './CovidInfo';
import Flightdeals from '../FlightDeals/Flightdeals';
function MainInfo() {
  return (
    <main className='main-content'>
      <section className='section-main-content'>
        <CovidInfo />
        <hr />
        <Flightdeals />
      </section>
    </main>
  );
}
export default MainInfo;
