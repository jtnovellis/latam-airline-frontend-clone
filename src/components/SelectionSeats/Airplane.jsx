import React from 'react';
import SeatsRow from './SeatsRow';
import { firstDiv, secondDiv, thirthDiv } from '../../Airbus';
import Emergency from 'components/SelectionSeats/Emergency';

const headerSeats = ['A', 'B', 'C', '', 'D', 'E', 'F'];

const Airplane = () => {
  const airplane = '213';
  return (
    <div className='airplane'>
      <div className='airplane__body'>
        <p>Air Bus {airplane}</p>
        <div className='airplane__body--seats'>
          <div className='seats--header'>
            {headerSeats.map(item => (
              <div key={item} className='seats--header-item'>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className='seats-firstDiv'>
            {firstDiv.map((rows, i) => (
              <SeatsRow key={i} rows={rows} />
            ))}
          </div>
          <Emergency />
          <div className='seats-secondDiv'>
            {secondDiv.map((rows, i) => (
              <SeatsRow key={i} rows={rows} />
            ))}
          </div>
          <Emergency />
          <div className='seats-secondDiv'>
            {thirthDiv.map((rows, i) => (
              <SeatsRow key={i} rows={rows} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airplane;
