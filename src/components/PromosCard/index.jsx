import React from 'react';
import { Link } from 'react-router-dom';
import WindowSize from '../Hero/WindowSize';

export default function PromosCard(props) {
  const { width } = WindowSize();
  const { promoDetails } = props;
  const { id, smallImg, bigImg, paragraph } = promoDetails;
  return (
    <Link to={''} className='ppgnd-prm'>
      <div className='prm-container ppgnd-container'>
        <div className='imb-prm-ctnr'>
          {width >= 800 ? (
            <img
              id={id}
              src={bigImg}
              className='imgn-prm-prpgnd'
              alt={paragraph}
            />
          ) : (
            <img src={smallImg} className='imgn-prm-prpgnd' alt={paragraph} />
          )}
        </div>
        <div className='info-prm-ctnr'>
          <p className='nf-prm-p'>{paragraph}</p>
        </div>
      </div>
    </Link>
  );
}
