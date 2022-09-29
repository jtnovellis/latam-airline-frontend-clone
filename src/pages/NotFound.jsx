import Header from '../components/Header/index';
import React from 'react';
import Footer from 'components/Footer-Register';
import { ReactComponent as NotFoundSVG } from '../svg/NotFound/NotFound.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <Header />
      <main id='main-notFound' className='NotFound__main'>
        <div className='NotFound__content'>
          <NotFoundSVG className='NotFound__svg' />
          <h1 className='NotFound__title'>No encontramos la página</h1>
          <p className='NotFound__info'>
            Es posible que la página que buscas ya no exista o que haya cambiado
            su nombre.
          </p>
          <p className='NotFound__info'>
            Te invitamos a continuar tu navegación desde nuestra página de
            inicio.
          </p>
          <div className='NotFound__redirectHomeButton'>
            <Link to={'/'}>
              <button className='NotFound__redirectHomeButton--button'>
                <span>Ir a la página de inicio</span>
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
