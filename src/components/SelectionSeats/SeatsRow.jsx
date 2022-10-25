import React from 'react';
import Seats from './Seats';

const SeatsRow = ({ rows, totalseats, setTotalseats, param, airBus }) => {
  return (
    <div className='seatsRow'>
      {rows.map((row, i) => (
        <Seats
          key={`${i}${row.column}${airBus}`}
          column={row.column}
          row={row.row}
          price={row.price}
          location={row.location}
          totalseats={totalseats}
          setTotalseats={setTotalseats}
          param={param}
          avaliable={row.avaliable}
        />
      ))}
    </div>
  );
};

export default SeatsRow;
