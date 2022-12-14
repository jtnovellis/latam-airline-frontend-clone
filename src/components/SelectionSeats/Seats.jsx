import React, { useState } from 'react';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import SeatsInfo from './SeatsInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_SEATS_DEPARTURE,
  ADD_SEATS_ARRIVAL,
} from '../../store/reducers/flightsReducer';
import { INCREASE_PRICE } from 'store/reducers/bookingReducer';

const Seats = ({
  column,
  row,
  price,
  location,
  totalseats,
  setTotalseats,
  param,
  avaliable,
}) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);
  const { adults, kids } = useSelector(state => state.bookingReducer);
  const dispatch = useDispatch();

  const seatLimit = adults + kids;

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleClick = () => {
    if (totalseats < seatLimit) {
      if (param === 'departure') {
        setSelected(true);
        setTotalseats(prev => prev + 1);
        dispatch({
          type: ADD_SEATS_DEPARTURE,
          payload: { column, row, price, location, avaliable: !avaliable },
        });
        dispatch({ type: INCREASE_PRICE, payload: price });
      } else if (param === 'arrival') {
        setSelected(true);
        setTotalseats(prev => prev + 1);
        dispatch({
          type: ADD_SEATS_ARRIVAL,
          payload: { column, row, price, location, avaliable: !avaliable },
        });
        dispatch({ type: INCREASE_PRICE, payload: price });
      }
    }
  };

  return (
    <>
      {!column ? (
        <div className='seats__row'>
          <span>{row}</span>
        </div>
      ) : (
        <div className='seats__row--content'>
          {hover && (
            <SeatsInfo
              column={column}
              row={row}
              price={price}
              location={location}
            />
          )}

          <button
            className='seats__button'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            disabled={!avaliable}>
            {avaliable && selected ? (
              <WeekendOutlinedIcon
                sx={{ fontSize: '2.3rem', color: '#e8114b' }}
              />
            ) : avaliable ? (
              <WeekendOutlinedIcon
                sx={{ fontSize: '2.3rem', color: '#1b0088' }}
              />
            ) : (
              <WeekendOutlinedIcon
                sx={{ fontSize: '2.3rem', color: '#dedede' }}
              />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default Seats;
