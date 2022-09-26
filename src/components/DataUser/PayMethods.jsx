import React from 'react';

import { ReactComponent as CardLogo } from '../../svg/MyAccount/PayMethods/cards.svg';
import AddCardModal from './AddCardModal';

const PayMethods = () => {
  return (
    <div className='myAccount__bodyContainer-section'>
      <h1 className='myAccount__bodyContainer-title'>
        Tarjetas de crédito guardadas
      </h1>
      <div className='PayMethod__bodyContainer'>
        <section
          id='PayMethod-Empty-state'
          className='PayMethod__bodyContainer-section'>
          <div
            id='PayMethod-img-Empty-state'
            className='PayMethod__bodySection__svg-container'>
            <CardLogo className='PayMethod__bodySection__svg' />
          </div>
          <div
            id='PayMethod-botom-Empty-state'
            className='PayMethod__bodySection__info-container'>
            <h3
              id='lbl-subtitle-Empty-state'
              className='PayMethod__bodySection__subtitle'>
              <span>Agrega tus tarjetas de crédito</span>
            </h3>
            <p aria-hidden='true' className='PayMethod__bodySection__p'>
              <span>
                Guarda los datos de tu tarjeta como medio de pago frecuente y
                haz que tus próximas compras sean más rápidas y seguras.
              </span>
            </p>
            <AddCardModal />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PayMethods;
