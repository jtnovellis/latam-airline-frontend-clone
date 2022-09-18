import React from 'react';
import CovidInfo from './CovidInfo';
import FlightDeals from '../FlightDeals';
import PromosSection from './PromosSection';
import AdviceSection from '../AdviceSection';
import AdvertisementLatamPass from '../AdvertisementLatamPass';

function MainInfo() {
  return (
    <main className='main-content'>
      <section className='section-main-content'>
        <CovidInfo />
        <hr />
        <FlightDeals />
        <PromosSection />
        <AdviceSection />
        <AdvertisementLatamPass />
      </section>
    </main>
  );
}
export default MainInfo;
