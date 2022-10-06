import React from 'react';
import LuggageCard from '../components/Luggage/LuggageCard';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import FooterRegister from '../components/Footer-Register/index';
import { useState } from 'react';

const Luggage = () => {
  const [selected, setSelected] = useState(true);

  return (
    <>
      <HeaderRegister />
      <div className='Luggage_wrapper'>
        <h1>Compra tu equipaje ahora y paga menos en el aeropuerto</h1>
        <div className='Luggage__selector'>
          <div className='Luggagecard__body-departure-arrival'>
            <div
              style={selected ? { borderBottom: '2px solid red' } : {}}
              onClick={() => (!selected ? setSelected(true) : <></>)}
              className='Luggagecard__body-departure'>
              <button>Ida</button>
            </div>
            <div
              style={!selected ? { borderBottom: '2px solid red' } : {}}
              onClick={() => (selected ? setSelected(false) : <></>)}
              className='Luggagecard__body-arrival'>
              <button>Vuelta</button>
            </div>
          </div>
          {selected ? (
            <LuggageCard types='departure' select='departure' />
          ) : (
            <LuggageCard types='arrival' select='arrival' />
          )}
        </div>
      </div>
      <FooterRegister />
    </>
  );
};

export default Luggage;
