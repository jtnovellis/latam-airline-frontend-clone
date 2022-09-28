import React from 'react';

const SeatsInfo = ({ column, row, price }) => {
  return (
    <div>
      <div>
        <span>
          {column}
          {row} {location}
        </span>
      </div>
      <div>
        <p>COP {price}</p>
      </div>
    </div>
  );
};

export default SeatsInfo;
