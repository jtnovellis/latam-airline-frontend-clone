import React from 'react';
import backpack from 'svg/luggage/backpack.png';
import backpacklug from 'svg/luggage/backpack_lug.png';
import luggage from 'svg/luggage/maleta.png';
import luggagelug from 'svg/luggage/maleta2.png';
import LuggageButtons from './LuggageButtons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { COMBO_UP, COMBO_DOWN } from 'store/reducers/luggageReducer';
const LuggageCard = prop => {
  //const action = 'lightIncrement';
  const departureLightLuggage = useSelector(
    state => state.luggageReducer.departureLightLuggage
  );
  const departureHeavyLuggage = useSelector(
    state => state.luggageReducer.departureHeavyLuggage
  );
  const arrivalLightLuggage = useSelector(
    state => state.luggageReducer.arrivalLightLuggage
  );
  const arrivalHeavyLuggage = useSelector(
    state => state.luggageReducer.arrivalHeavyLuggage
  );
  const totalAmount = useSelector(state => state.luggageReducer.totalPrice);
  const [radio, setRadio] = useState(true);
  const [send, setSend] = useState(false);
  function handleSend(action) {
    switch (action) {
      case 'increment':
        useDispatch(COMBO_UP);
        break;
      case 'decrement':
        useDispatch(COMBO_DOWN);
        break;
    }
  }

  return (
    <div className='Luggagecard__body'>
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
              <input
                type='radio'
                checked={radio ? 'checked' : ''}
                onClick={() => (radio ? setRadio(false) : setRadio(true))}
              />
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
              <input
                type='radio'
                checked={radio ? '' : 'checked'}
                onChange={() => (!radio ? setRadio(true) : setRadio(false))}
                onClick={() => (radio ? setSend(false) : setSend(true))}
              />
              {send ? handleSend('increment') : handleSend('decrement')}
            </div>
            <div className='Luggagecard__body-handheld-selector-description'>
              <p>Ambos por COP 45000</p>
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
              <strong>COP 44900</strong>
            </div>
          </div>
          <div className='Luggagecard__body-hold-15kg-buttons'>
            <div className='lightDecrement'>
              <LuggageButtons action='lightDecrement' types={prop.types} />
            </div>
            <div className='light-luggage-counter'>
              <p>
                {prop.types === 'arrival'
                  ? arrivalLightLuggage
                  : departureLightLuggage}
              </p>
            </div>
            <div className='lightIncrement'>
              <LuggageButtons action='lightIncrement' types={prop.types} />
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
                  {prop.types === 'arrival' ? (
                    arrivalHeavyLuggage == 0 ? (
                      'COP 54900'
                    ) : arrivalHeavyLuggage >= 1 && arrivalHeavyLuggage < 2 ? (
                      'COP 74900'
                    ) : (
                      'COP 79900'
                    )
                  ) : prop.types === 'departure' ? (
                    departureHeavyLuggage == 0 ? (
                      'COP 54900'
                    ) : departureHeavyLuggage >= 1 &&
                      departureHeavyLuggage < 2 ? (
                      'COP 74900'
                    ) : (
                      'COP 79900'
                    )
                  ) : (
                    <></>
                  )}
                </strong>
              </p>
            </div>
          </div>
          <div className='Luggagecard__body-hold-23kg-buttons'>
            <div className='heavyDecrement'>
              <LuggageButtons action='heavyDecrement' types={prop.types} />
            </div>
            <div className='heavy-luggage-counter'>
              <p>
                {prop.types === 'arrival'
                  ? arrivalHeavyLuggage
                  : departureHeavyLuggage}
              </p>
            </div>
            <div className='heavyIncrement'>
              <LuggageButtons action='heavyIncrement' types={prop.types} />
            </div>
          </div>
        </div>
      </div>
      <div className='Luggagecard__information'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32px'
            height='32px'
            viewBox='0 0 32 32'
            fill='none'
            focusable='false'>
            <path
              d='M16.8003 6.4693C16.8003 6.76052 16.7005 7.02453 16.4921 7.24295C16.2836 7.46137 16.0208 7.57045 15.7035 7.57045C15.3862 7.57045 15.1142 7.46137 14.8966 7.24295C14.67 7.02453 14.5613 6.76962 14.5613 6.4693C14.5613 6.17808 14.67 5.92317 14.8966 5.69565C15.1142 5.47724 15.3862 5.36815 15.7035 5.36815C16.0298 5.36815 16.2926 5.46812 16.4921 5.67744C16.6915 5.87765 16.8003 6.15078 16.8003 6.4693ZM19.0757 18.4548H13.1017C12.9295 18.4548 12.7754 18.3914 12.6394 18.2549C12.5034 18.1184 12.44 17.9634 12.44 17.7905C12.44 17.5812 12.5034 17.4173 12.6394 17.2808C12.7754 17.1534 12.9204 17.0809 13.1017 17.0809H15.4769V10.9103H13.1017C12.9295 10.9103 12.7754 10.8469 12.6394 10.7104C12.5034 10.583 12.44 10.428 12.44 10.246C12.44 10.0367 12.5034 9.87326 12.6394 9.73675C12.7754 9.60024 12.9204 9.53634 13.1017 9.53634H16.1295C16.3108 9.53634 16.465 9.60892 16.61 9.75453C16.7279 9.87284 16.7822 10.0369 16.7822 10.2371V17.0715H19.0666C19.2751 17.0715 19.4383 17.1354 19.5652 17.2719C19.7012 17.4084 19.7646 17.5723 19.7646 17.7816C19.7646 17.9545 19.7012 18.109 19.5652 18.2455C19.4564 18.3912 19.2842 18.4548 19.0757 18.4548ZM13.0203 29.8671C12.9024 29.9855 12.7574 30.04 12.5852 30.04C12.4401 30.04 12.3494 30.0311 12.3223 29.9947C12.2044 29.9674 12.1046 29.8944 12.014 29.776C11.9233 29.6577 11.8781 29.5304 11.8781 29.3757V22.8141H1.69803C1.48953 22.8141 1.3354 22.7596 1.21755 22.6412C1.07251 22.4956 1 22.3318 1 22.1498V4.43098C1 3.4026 1.32618 2.57446 1.9698 1.94651C2.61342 1.31856 3.44742 1 4.47177 1H30.5883C30.7696 1 30.9146 1.06346 31.0506 1.19997C31.1866 1.33648 31.25 1.49142 31.25 1.66433V19.4742C31.25 20.5299 30.9418 21.3489 30.3253 21.9405C29.7361 22.532 28.9385 22.8234 27.9141 22.8234H20.5353C20.363 22.8234 20.2089 22.7595 20.0729 22.623C19.946 22.4865 19.8733 22.332 19.8733 22.1591C19.8733 21.9498 19.937 21.7857 20.0729 21.6583C20.2089 21.5309 20.363 21.4583 20.5353 21.4583H27.9141C28.5849 21.4583 29.0834 21.2943 29.4007 20.9758C29.727 20.6845 29.8902 20.1841 29.8902 19.4742V2.32867H4.47177C3.80095 2.35597 3.28427 2.55588 2.9126 2.92901C2.55 3.29304 2.35976 3.80305 2.35976 4.4492V21.4583H12.5852C12.7937 21.4583 12.9387 21.5309 13.0203 21.6765C13.1653 21.8221 13.2378 21.9862 13.2378 22.1591V27.8013L16.4469 24.7165C16.5919 24.5708 16.7549 24.5069 16.9272 24.516C17.0994 24.5342 17.2537 24.5981 17.3625 24.7165C17.4803 24.8348 17.5438 24.9893 17.5619 25.1804C17.58 25.3715 17.5075 25.5442 17.3625 25.6807L13.0203 29.8671Z'
              fill='currentColor'></path>
          </svg>
        </div>
        <div>
          <p>
            <strong>Equipaje en cabina: </strong>podría ser enviado a bodega si
            no hay espacio en cabina, al momento de embarcar.
          </p>
          <p>
            <strong>Equipaje de bodega: </strong> pagarás un costo extra si
            supera el peso máximo que compraste. Asegúrate de agregar el
            equipaje necesario. Más información
          </p>
        </div>
      </div>
      {totalAmount > 1 ? (
        <div className='Luggagecard__body-total-prices'>
          <div>
            <p>Total equipaje</p>
          </div>
          <div>
            <p>COP {totalAmount}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LuggageCard;
