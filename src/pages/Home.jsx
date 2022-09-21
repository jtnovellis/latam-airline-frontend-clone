import React from 'react';
import Header from '../components/Header/index';
import Hero from '../components/Hero/index';
import MainInfo from '../components/MainInfo';
import Footer from 'components/Footer-Register';
import LargeFooter from 'components/LargeFooter';

function Home() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <MainInfo />
      <LargeFooter />
      <Footer />
    </div>
  );
}
export default Home;
