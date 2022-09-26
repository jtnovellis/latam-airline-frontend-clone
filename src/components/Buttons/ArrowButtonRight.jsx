import React from 'react';
import { ReactComponent as ArrowForwardIcon } from '../../svg/arrows/ForwardArrow.svg';

const ArrowButtonRight = props => {
  const {
    buttonWidth = '2.5rem',
    buttonHeight = '2.5rem',
    buttonBGColor = 'rgb(232, 17, 75)',
    buttonBorder = '0.0625rem solid rgb(232, 17, 75)',
    buttonColor = 'rgb(255, 255, 255);',
  } = props;
  return (
    <div className='ArrowButtonRight__container'>
      <button
        className='ArrowButtonRight__roundButton'
        style={{
          width: { buttonWidth },
          height: { buttonHeight },
          color: { buttonColor },
          backgroundColor: { buttonBGColor },
          border: { buttonBorder },
        }}>
        <span className='button__spanlabel'>
          <i className='ArrowButtonRight__arrowIconContainer'>
            <ArrowForwardIcon />
          </i>
        </span>
      </button>
    </div>
  );
};

export default ArrowButtonRight;
