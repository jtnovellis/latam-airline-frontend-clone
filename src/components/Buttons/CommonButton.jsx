import React from 'react';

const CommonButton = ({ children, trigger, isDisable, isUnable }) => {
  return (
    <div className='CommonButton__container'>
      <button
        onClick={trigger}
        ref={isUnable}
        disabled={isDisable}
        className='CommonButton__button--disabled'>
        {children}
      </button>
    </div>
  );
};

export default CommonButton;
