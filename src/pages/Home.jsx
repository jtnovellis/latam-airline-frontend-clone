import React from 'react';
import Header from '../components/Header/index';
import Hero from '../components/Hero/Hero';
import MainInfo from '../components/MainInfo/MainInfo';

function Home() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <MainInfo />
    </div>
  );
}
export default Home;
