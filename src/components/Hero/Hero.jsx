import React from 'react';
import backgroundSmall from '../../images/homepage/bg-girl-small.png';
import backgroundLarge from '../../images/homepage/bg-girl.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Booking from '../Booking/Booking';
import MainInfo from '../MainInfo/MainInfo';
import useWindowSize from './WindowSize';

function Hero() {
  const { width } = useWindowSize();

  return (
    <div className='hero-container'>
      <div className='hero'>
        <div className='hero-background'>
          <div className='background-img'>
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
          <div className='info-hero'>
            <h1>
              Disfruta de viajar por Colombia y el mundo con LATAM Airlines
            </h1>
            <Link to='/Destinos' className='Destinos'>
              <span>Ver destinos</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className='faArrowUpRightFromSquare'
              />
            </Link>
          </div>
        </div>
        <Booking />
      </div>
      <MainInfo />
    </div>
  );
}
export default Hero;
