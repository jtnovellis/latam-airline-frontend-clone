import React from 'react';
import Header from 'components/Header-Register/HeaderRegister';
import Navigation from 'components/SelectionSeats/Navigation';
import Airplane from 'components/SelectionSeats/Airplane';
import Passengers from 'components/SelectionSeats/Passengers';
import Footer from '../components/Footer-Register';

const SelectionSeats = () => {
  return (
    <>
      <Header />
      <div className='navigation__title'>
        <h1>Elige tus asientos</h1>
      </div>
      <main className='selectionSeats'>
        <Navigation />
        <section className='selectionSeats__section'>
          <Airplane />
          <Passengers />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SelectionSeats;
