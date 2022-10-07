import React from 'react';
import backpack from 'svg/luggage/backpack.png';
import backpacklug from 'svg/luggage/backpack_lug.png';
import luggage from 'svg/luggage/maleta.png';
import luggagelug from 'svg/luggage/maleta2.png';
import LuggageButtons from './LuggageButtons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  DEPARTURE_COMBO_UP,
  DEPARTURE_COMBO_DOWN,
  ARRIVAL_COMBO_UP,
  ARRIVAL_COMBO_DOWN,
} from 'store/reducers/luggageReducer';

const LuggageCard = prop => {
  //const action = 'lightIncrement';
  const {
    departureLightLuggage,
    departureHeavyLuggage,
    arrivalLightLuggage,
    arrivalHeavyLuggage,
    specialDeparture,
    specialArrival,
    totalPrice,
  } = useSelector(state => state.luggageReducer);
  let selected = prop.select;
  console.log(totalPrice, 'hola');
  const [value, setValue] = useState('increment');
  const [value2, setValue2] = useState('increment');
  const [selectedValue, setSelectedValue] = useState(true);
  const [selectedValue2, setSelectedValue2] = useState(true);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  /*   function handleClick(action) {
    setSelectedValue(action);
    handleSend(selectedValue);
  } */
  function handleSend(action) {
    if (selected === 'departure') {
      switch (action) {
        case 'increment':
          dispatch({ type: DEPARTURE_COMBO_UP });
          break;
        case 'decrement':
          dispatch({ type: DEPARTURE_COMBO_DOWN });
          break;
      }
    }
    if (selected === 'arrival') {
      switch (action) {
        case 'increment':
          dispatch({ type: ARRIVAL_COMBO_UP });
          break;
        case 'decrement':
          dispatch({ type: ARRIVAL_COMBO_DOWN });
          break;
      }
    }
  }
  function handleRadio() {
    if (selected === 'departure') {
      selectedValue ? setSelectedValue(false) : setSelectedValue(true);
      if (!selectedValue) {
        setValue('increment');
      } else {
        setValue('decrement');
      }
      handleSend(value);
    }
    if (selected === 'arrival') {
      selectedValue2 ? setSelectedValue2(false) : setSelectedValue2(true);
      if (!selectedValue2) {
        setValue2('increment');
      } else {
        setValue2('decrement');
      }
      handleSend(value2);
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
        <form>
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
                  checked={
                    selected === 'departure' ? selectedValue : selectedValue2
                  }
                  type='radio'
                  value='free'
                  id='free'
                  name='onBoard'
                  onChange={() => handleRadio()}
                />
              </div>
              <div className='Luggagecard__body-backpack-selector-description'>
                <p>Articulo personal gratis</p>
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
                  checked={
                    selected === 'departure' ? !selectedValue : !selectedValue2
                  }
                  type='radio'
                  value='pay'
                  id='pay'
                  name='onBoard'
                  onChange={() => handleRadio()}
                />
              </div>
              <div className='Luggagecard__body-handheld-selector-description'>
                <p>Ambos por COP 44900</p>
              </div>
            </div>
          </div>
        </form>
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
      <div className='Luggagecard_special-luggage'>
        <div className='Luggagecard_special-luggage-content'>
          <div className='Luggagecard_special-luggage-content-info'>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='20' cy='20' r='20' fill='#2D34CE'></circle>
              <path
                d='M20.0233 8.9312C19.6738 8.9312 19.381 9.04919 19.146 9.27888C18.9109 9.50858 18.7905 9.78783 18.7905 10.1044C18.7905 10.4273 18.9109 10.7005 19.146 10.9301C19.381 11.1598 19.6738 11.2778 20.0233 11.2778C20.3536 11.2778 20.6326 11.1598 20.8677 10.9301C21.1027 10.7005 21.2238 10.4273 21.2238 10.1044C21.2238 9.78162 21.1027 9.50858 20.8677 9.27888C20.6326 9.04919 20.3473 8.9312 20.0233 8.9312ZM20.0233 12.209C19.4261 12.209 18.9175 12.0042 18.4982 11.5944C18.0789 11.1847 17.8691 10.688 17.8691 10.1044C17.8691 9.52089 18.0789 9.03052 18.4982 8.61458C18.9175 8.20486 19.4261 8 20.0233 8C20.6205 8 21.1218 8.20486 21.5284 8.61458C21.9414 9.02431 22.1451 9.52089 22.1451 10.1044C22.1451 10.688 21.935 11.1847 21.5284 11.5944C21.1155 12.0042 20.6141 12.209 20.0233 12.209ZM20.792 22.0424C20.6268 22.0424 20.506 21.9927 20.4234 21.8934L17.3486 18.3735C17.266 18.2928 17.2214 18.1935 17.2214 18.0693V14.0155C17.2214 13.8975 17.2717 13.7858 17.3734 13.6865C17.456 13.5871 17.5705 13.5437 17.7103 13.5685L19.6163 13.5996H19.6479C20.3277 13.6617 20.8297 13.7672 21.1537 13.9162C21.4841 14.0652 21.7259 14.2948 21.8784 14.6052C22.0308 14.9156 22.1193 15.3191 22.1383 15.822L22.1067 16.3311C22.1067 16.4738 22.0622 16.5856 21.9733 16.6787C21.878 16.7719 21.7701 16.8153 21.6494 16.8153C21.5033 16.7967 21.3892 16.7408 21.2939 16.6539C21.1986 16.5608 21.1537 16.4552 21.1537 16.3373L21.1853 15.8282C21.1853 15.5054 21.1473 15.2633 21.0774 15.0895C21.0075 14.9219 20.8682 14.7916 20.6586 14.7171C20.4553 14.6364 20.0929 14.5743 19.5846 14.537L18.1675 14.506V17.9017L18.2314 17.9948H18.9685C22.6407 17.9948 25.5886 18.3238 27.8122 18.9881C30.0358 19.6461 31.1538 20.5587 31.1538 21.7258C31.1538 22.4459 30.7028 23.0791 29.8007 23.6192C28.8985 24.1593 27.6339 24.5939 26.0011 24.9105C24.3684 25.2271 22.539 25.4133 20.506 25.4506L22.7234 31.2799C22.7615 31.3979 22.755 31.5159 22.7042 31.6276C22.6533 31.7394 22.5643 31.8138 22.4436 31.851C22.4245 31.8696 22.399 31.8821 22.3673 31.8821H22.2593C22.1576 31.8821 22.0621 31.851 21.9795 31.7951C21.8969 31.733 21.8465 31.6648 21.8275 31.5841L20.0419 26.9219L18.5361 31.671C18.4535 31.8944 18.3013 32 18.0726 32C18.0536 32 18.0278 31.9938 18.0087 31.9876C17.9896 31.9752 17.9707 31.9751 17.9516 31.9751C17.8309 31.9379 17.736 31.8635 17.6724 31.7517C17.6089 31.64 17.5963 31.5282 17.6408 31.4041L19.5213 25.4506C18.5556 25.4506 17.8499 25.4383 17.3988 25.4196L16.4458 31.4909C16.4204 31.6151 16.3699 31.7083 16.2746 31.7766C16.1856 31.8449 16.084 31.8821 15.9824 31.8821H15.8868C15.7661 31.8635 15.6584 31.8014 15.5822 31.702C15.4996 31.6027 15.4674 31.4909 15.4928 31.373L16.4458 25.3575C13.104 25.0968 10.7031 24.5069 9.24817 23.5819C9.08299 23.5199 9 23.3896 9 23.1909V20.2173C9 20.0559 9.08299 19.9256 9.24817 19.8262C10.4362 19.0875 12.3226 18.566 14.9084 18.2618C15.0291 18.2432 15.1436 18.2742 15.2453 18.3487C15.3469 18.4294 15.4041 18.5411 15.4296 18.6777C15.4486 18.7956 15.4171 18.9074 15.3408 19.0067C15.2582 19.1061 15.1563 19.1682 15.0356 19.1868C12.7611 19.4662 11.0647 19.8944 9.95919 20.478V22.9427C10.8423 23.4269 12.1324 23.8055 13.835 24.0848C15.5377 24.3642 17.4115 24.5069 19.4636 24.5069H19.5275C21.6432 24.5069 23.4983 24.3766 25.1121 24.1159C26.7258 23.8552 27.9772 23.5076 28.8793 23.0792C29.7815 22.6509 30.2325 22.1913 30.2325 21.7133C30.2325 21.1919 29.7305 20.714 28.7267 20.2856C27.7229 19.8573 26.3888 19.522 24.7243 19.2799C23.0661 19.0377 21.1727 18.9197 19.0634 18.9197L21.1282 21.2974C21.2108 21.3781 21.2492 21.4837 21.2492 21.6141C21.2492 21.7444 21.1983 21.8562 21.0966 21.9617C21.0585 21.9804 21.0075 22.0051 20.944 22.0237C20.8804 22.0299 20.8301 22.0424 20.792 22.0424Z'
                fill='white'></path>
            </svg>
            <div>
              <div>
                <p>Equipaje especial</p>
              </div>
              <div>
                <span>Deportivo,musical y audiovisual</span>
              </div>
            </div>
          </div>
          <div
            className='Luggagecard_special-luggage-content-arrow'
            onClick={() => (checked ? setChecked(false) : setChecked(true))}>
            <svg
              style={
                checked
                  ? { transform: 'rotate(180deg)' }
                  : { transform: 'rotate(0deg)' }
              }
              xmlns='http://www.w3.org/2000/svg'
              width='20px'
              height='20px'
              viewBox='0 0 20 20'
              fill='none'
              focusable='false'>
              <path
                fill='red'
                d='M16.611 5.382L10.011 12l-6.6-6.618-1.4 1.4 8 8 8-8z'></path>
            </svg>
          </div>
        </div>

        {checked ? (
          <div className='Luggagecard__special-luggage-price'>
            <div className='Luggagecard__special-luggage-price-content'>
              <div>
                <strong>100000 COP</strong>{' '}
              </div>
              <div className='luggageCard__special__luggage-buttons'>
                <div>
                  <LuggageButtons
                    action='specialDecrement'
                    types={prop.types}
                  />
                </div>
                <p>
                  {prop.types === 'arrival' ? specialArrival : specialDeparture}
                </p>
                <div>
                  <LuggageButtons
                    action='specialIncrement'
                    types={prop.types}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
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
      {totalPrice > 1 ? (
        <div className='Luggagecard__body-total-prices'>
          <div>
            <p>Total equipaje</p>
          </div>
          <div>
            <p>COP {totalPrice}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LuggageCard;
