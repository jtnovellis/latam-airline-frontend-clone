import React from 'react';
import { Link } from 'react-router-dom';

export default function AdvertisementLatamPass() {
  return (
    <>
      <div id='home-credit-card-banner-container' className='BnnrLTMPSS'>
        <div
          id='home-credit-card-banner-wrapper'
          data-testid='home-credit-card-banner-credit-card-banner'
          className='BnnrLP-container'>
          <Link
            to=''
            id='home-credit-card-banner'
            data-testid='home-credit-card-banner-banner'
            className='RdrctBnnrLP'>
            <span className='SzRdrctBnnrLP'>
              Al hacer click en este banner serás enviado Link un formulario
              para la solicitud de una tarjeta LATAM Pass Banco de Bogotá.
            </span>
            <div className='bnnrLPintern'>
              <div className='BLPUp'>
                <div className='blueinfo'>
                  <span>
                    <strong>
                      Solicita online tu tarjeta LATAM Pass Banco de Bogotá
                    </strong>{' '}
                    y acumula millas
                  </span>
                </div>
                <div className='BlPUpImg'></div>
              </div>
              <div className='BLPDown' data-testid='banner-bottom-text'>
                Solicitar tarjeta
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
