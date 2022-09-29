import React, { useState } from 'react';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import SeatsInfo from './SeatsInfo';

const Seats = ({ column, row, price, location }) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleMouseLeave = e => {
    e.preventDefault();
    setHover(false);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleClick = () => {
    setSelected(true);
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
            onMouseEnter={e => handleMouseEnter(e)}
            onMouseLeave={e => handleMouseLeave(e)}
            onClick={handleClick}>
            {selected ? (
              <WeekendOutlinedIcon
                sx={{ fontSize: '2.3rem', color: '#e8114b' }}
              />
            ) : (
              <WeekendOutlinedIcon
                sx={{ fontSize: '2.3rem', color: '#1b0088' }}
              />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default Seats;
