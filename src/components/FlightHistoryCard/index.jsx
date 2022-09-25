import ArrowButtonRight from 'components/Buttons/ArrowButtonRight';
import React from 'react';
import { ReactComponent as SidePlane } from '../../svg/airplanes/planeBySideWithUnderLine.svg';

function getCurrentDate(separator = '') {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

const FlightHistoryCard = props => {
  const {
    imgUrl,
    departureCity = 'City',
    arrivalCity = 'arrival City',
    departureDate = getCurrentDate(' '),
  } = props;

  return (
    <div className='flightHistoryCard-container'>
      <div className='flightHistoryCard__img-container'>
        <div
          className='flightHistoryCard__img'
          style={{
            background: `url(${imgUrl}) 0% 0% / cover no-repeat, url(https://s.latamairlines.com/images/destinations/generic.jpg)`,
          }}></div>
      </div>
      <div className='flightHistoryCard__body-container'>
        <p className='flightHistoryCard__departureCity'>
          <span>Viaje desde {departureCity} a</span>
        </p>
        <p aria-hidden='true' className='flightHistoryCard__arrivalCity'>
          {arrivalCity}
        </p>
        <div className='flightHistoryCard__details'>
          <div>
            <div className='flightHistoryCard__details-date'>
              <p className='flightHistoryCard__details-dateDetails'>
                <i className='dataDetails__planeIcon icon-svg'>
                  <SidePlane style={{ with: '32px', height: '32px' }} />
                </i>
                {departureDate}
              </p>
            </div>
          </div>
          <div className='red-arrow-item'>
            <ArrowButtonRight className='buttonRedArrowWhite' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightHistoryCard;
