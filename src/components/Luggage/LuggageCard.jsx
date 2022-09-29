import React from 'react';
import backpack from 'svg/luggage/backpack.png';
import backpacklug from 'svg/luggage/backpack_lug.png';
import luggage from 'svg/luggage/maleta.png';
import luggagelug from 'svg/luggage/maleta2.png';
import LuggageButtons from './LuggageButtons';
import { useSelector } from 'react-redux';
const LuggageCard = () => {
  //const action = 'lightIncrement';
  const lightLuggage = useSelector(state => state.luggageReducer.lightLuggage);
  const heavyLuggage = useSelector(state => state.luggageReducer.heavyLuggage);
  const totalAmount = useSelector(state => state.luggageReducer.totalPrice);

  return (
    <div className='Luggagecard__body'>
      <div className='Luggagecard__body-departure-arrival'>
        <div className='Luggagecard__body-departure'>Ida</div>
        <div className='Luggagecard__body-arrival'>Vuelta</div>
      </div>
      <div className='Luggagecard__body-paragraph'>
        <div>
          <p>
            Selecciona qué <strong>llevarás en cabina</strong>
          </p>
        </div>
      </div>
      <div className='Luggagecard__body-cabin'>
        <div className='Luggagecard__body-backpack'>
          <div className='Luggagecard__body-backpack-description'>
            <div className='Luggagecard__body-backpack-description-image'>
              <img src={backpack} alt='backpack' />
            </div>
            <div className='Luggagecard__body-backpack-description-text'>
              <div className='Luggagecard__body-backpack-text-title'>
                1 bolso o mochila pequeña
              </div>
              <div className='Luggagecard__body-backpack-text-subtitle'>
                bajo el asiento delantero
              </div>
            </div>
          </div>
          <div className='Luggagecard__body-backpack-selector'>
            <div className='Luggagecard__body-backpack-selector-radio'>
              <input type='radio' />
            </div>
            <div className='Luggagecard__body-backpack-selector-description'>
              <p>articulo personal gratis</p>
            </div>
          </div>
        </div>
        <div className='Luggagecard__body-handheld'>
          <div className='Luggagecard__body-handheld-description'>
            <div className='Luggagecard__body-handheld-description-image'>
              <img src={backpacklug} alt='backpack 2' />
            </div>
            <div className='Luggagecard__body-handheld-description-text'>
              <div className='Luggagecard__body-handheld-text-title'>
                1 bolso o mochila pequeña
              </div>
              <div className='Luggagecard__body-handheld-text-subtitle'>
                +1 equipaje de mano<span> 10kg</span>
              </div>
            </div>
          </div>
          <div className='Luggagecard__body-handheld-selector'>
            <div className='Luggagecard__body-handheld-selector-radio'>
              <input type='radio' />
            </div>
            <div className='Luggagecard__body-handheld-selector-description'>
              <p>Ambos por cop 45000</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Luggagecard__body-paragraph'>
        <div>
          <p>
            ¿Agregas <strong>equipaje de bodega?</strong>
          </p>
        </div>
      </div>
      <div className='Luggagecard__body-hold'>
        <div className='Luggagecard__body-hold-15kg'>
          <div className='Luggagecard_body-hold-15kg-image'>
            <img src={luggage} alt='luggage' />
          </div>
          <div className='Luggagecard__body-hold-15kg-title-price'>
            <div className='Luggagecard__body-hold-15kg-title'>
              <p>15kg</p>
            </div>
            <div className='Luggagecard__body-hold-15kg-price'>
              <strong>COP 45000</strong>
            </div>
          </div>
          <div className='Luggagecard__body-hold-15kg-buttons'>
            <div className='lightDecrement'>
              <LuggageButtons action='lightDecrement' />
            </div>
            <div className='light-luggage-counter'>
              <p>{lightLuggage}</p>
            </div>
            <div className='lightIncrement'>
              <LuggageButtons action='lightIncrement' />
            </div>
          </div>
        </div>
        <div className='Luggagecard__body-hold-23kg'>
          <div className='Luggagecard_body-hold-23kg-image'>
            <img src={luggagelug} alt='' />
          </div>
          <div className='Luggagecard__body-hold-23kg-title-price'>
            <div className='Luggagecard__body-hold-23kg-title'>
              <p>23kg</p>
            </div>
            <div className='Luggagecard__body-hold-23kg-price'>
              <p>
                <strong>
                  {heavyLuggage == 0
                    ? 'COP 55000'
                    : heavyLuggage >= 1 && heavyLuggage < 2
                    ? 'COP 74900'
                    : 'COP 79900'}
                </strong>
              </p>
            </div>
          </div>
          <div className='Luggagecard__body-hold-23kg-buttons'>
            <div className='heavyDecrement'>
              <LuggageButtons action='heavyDecrement' />
            </div>
            <div className='heavy-luggage-counter'>
              <p>{heavyLuggage}</p>
            </div>
            <div className='heavyIncrement'>
              <LuggageButtons action='heavyIncrement' />
            </div>
          </div>
        </div>
      </div>
      <div>{totalAmount}</div>
    </div>
  );
};

export default LuggageCard;
