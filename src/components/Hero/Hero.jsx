import React from 'react';
import background from '../../images/homepage/bg-girl.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero'>
        <div className='hero-background'>
          <div className='background-img'>
            <img
              src={background}
              alt='Disfruta de viajar por Colombia y el mundo con LATAM Airlines'
            />
          </div>
          <div className='info-hero'>
            <h1>
              Disfruta de viajar por Colombia y el mundo con LATAM Airlines
            </h1>
            <Link to='/Destinos'>
              <span>Ver destinos</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className='faArrowUpRightFromSquare'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
