import React from 'react';
import Seats from './Seats';

const SeatsRow = ({ rows }) => {
  return (
    <div className='seatsRow'>
      {rows.map((row, i) => (
        <Seats
          key={i}
          column={row.column}
          row={row.row}
          price={row.price}
          location={row.location}
        />
      ))}
    </div>
  );
};

export default SeatsRow;
