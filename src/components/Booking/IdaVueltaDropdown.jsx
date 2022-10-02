import React from 'react';
import { useDispatch } from 'react-redux';
import { BOOKING_SET_ROUNDTRIP } from '../../store/reducers/bookingReducer';

function IdaVueltaDropdown({ setDrop }) {
  const dispatch = useDispatch();
  const handleClick = e => {
    if (e.target.value === 'both') {
      dispatch({ type: BOOKING_SET_ROUNDTRIP, payload: true });
      setDrop(prev => ({ ...prev, idavuelta: !prev['idavuelta'] }));
    }
    if (e.target.value === 'only') {
      dispatch({ type: BOOKING_SET_ROUNDTRIP, payload: false });
      setDrop(prev => ({ ...prev, idavuelta: !prev['idavuelta'] }));
    }
  };

  return (
    <div className='idavuelta-dropdown'>
      <div className='container-drop'>
        <div className='box-drop'>
          <button onClick={e => handleClick(e)} value='both'>
            Ida y vuelta
          </button>
        </div>
        <div className='line'></div>
        <div className='box-drop'>
          <button onClick={e => handleClick(e)} value='only'>
            Solo ida
          </button>
        </div>
      </div>
    </div>
  );
}

export default IdaVueltaDropdown;
