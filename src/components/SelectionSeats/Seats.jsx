import React from 'react';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';

const Seats = ({ column, row, price, location }) => {
  console.log(price, location);
  return (
    <>
      {!column ? (
        <div className='seats__row'>
          <span>{row}</span>
        </div>
      ) : (
        <button className='seats__button'>
          <WeekendOutlinedIcon />
        </button>
      )}
    </>
  );
};

export default Seats;
