import React from 'react';
import LuggageCard from '../components/Luggage/LuggageCard';
import HeaderRegister from '../components/Header-Register/HeaderRegister';
import FooterRegister from '../components/Footer-Register/index';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FullLuggageCard from 'components/Luggage/FullLuggageCard';

const Luggage = () => {
  const [selected, setSelected] = useState(true);
  const [query, setQuery] = useSearchParams();
  let passenger = 3;
  let actualPass = 1;
  //ldir=departure&pass=1
  const paramDa = query.get('ldir');

  return (
    <>
      <HeaderRegister />
      {paramDa === 'departure' ? (
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
            <div>
              {passenger}
              <button onClick={() => setQuery({ ldir: 'arrival' })}>
                Siguiente pasajero
              </button>
            </div>
            <FullLuggageCard selected={selected} />
          </div>
        </div>
      ) : (
        <div className='Luggage_wrapper'>
          <p>xdlol</p>
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
            <div>
              {passenger}
              <button
                type='submit'
                onClick={() =>
                  setQuery({ ldir: 'arrival', pass: actualPass + 1 })
                }>
                Siguiente pasajero
              </button>
            </div>
            {selected ? (
              <LuggageCard types='departure' select='departure' />
            ) : (
              <LuggageCard types='arrival' select='arrival' />
            )}
          </div>
        </div>
      )}

      <FooterRegister />
    </>
  );
};

export default Luggage;
