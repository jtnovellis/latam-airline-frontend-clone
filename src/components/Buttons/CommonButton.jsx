import React from 'react';

const CommonButton = ({ children }) => {
  return (
    <div className='CommonButton__container'>
      <button className='CommonButton__button'>{children}</button>
    </div>
  );
};

export default CommonButton;
