import React from 'react';
import { Link } from 'react-router-dom';
import WindowSize from '../Hero/WindowSize';

export default function PromosSection() {
  return (
    <div>
      <Link to={''}>
        <div>
        {width >= 800 ? (
              <img
                src={backgroundLarge}
                className='bg-img'
                alt='Disfruta de viajar por Colombia y el mundo con LATAM Airlines'
              />
            ) : (
              <img
                src={backgroundSmall}
                className='bg-img'
                alt='Disfruta de viajar por Colombia y el mundo con LATAM Airlines'
              />
            )}
        </div>
        <div></div>
      </Link>
    </div>
  );
}
