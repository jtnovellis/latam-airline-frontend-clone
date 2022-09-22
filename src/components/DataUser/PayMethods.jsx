import React from 'react';
import cards from '../../svg/MyAccount/PayMethods/cards.svg';

const PayMethods = () => {
  return (
    <div className='myAccount__bodyContainer-section'>
      <h1 className='myAccount__bodyContainer-title'>
        Tarjetas de crédito guardadas
      </h1>
      <div className='PayMethod__bodyContainer'>
        <section className='PayMethod__bodyContainer-section'>
          <div className=''>
            <img src={cards} alt='credit cards' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PayMethods;
