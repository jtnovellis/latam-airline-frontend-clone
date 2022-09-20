import React from 'react';
import Header from '../components/Header/index';
import Hero from '../components/Hero/index';
import MainInfo from '../components/MainInfo';
import Footer from 'components/Footer-Register';

function Home() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <MainInfo />
      <Footer />
    </div>
  );
}
export default Home;
