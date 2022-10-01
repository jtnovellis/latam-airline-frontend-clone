import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const SeatsInfo = ({ column, row, price, location }) => {
  return (
    <div className='seatsinfo'>
      <div className='seatsinfo__content'>
        <div className='seatsinfo__header'>
          <span>{`${column}${row} ${location}`}</span>
        </div>
        <div className='seatsinfo__body'>
          <p>COP {price}</p>
        </div>
      </div>
      <div className='seatsinfo__arrow'>
        {<FontAwesomeIcon icon={faCaretDown} />}
      </div>
    </div>
  );
};

export default SeatsInfo;
