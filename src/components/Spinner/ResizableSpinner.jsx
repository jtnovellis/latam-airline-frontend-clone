import React from 'react';

const ResizableSpinner = ({ color = '#e8114b', border = '10px' }) => {
  return (
    <div>
      <div
        class='ResizableSpinner'
        style={{
          borderLeftColor: { color },
          border: ` ${border} solid rgba(0, 0, 0, 0.1)`,
        }}></div>
    </div>
  );
};

export default ResizableSpinner;
