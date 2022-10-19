import React from 'react';

const CommonButton = ({ children, trigger }) => {
  return (
    <div className='CommonButton__container'>
      <button onClick={trigger} className='CommonButton__button'>
        {children}
      </button>
    </div>
  );
};

export default CommonButton;
