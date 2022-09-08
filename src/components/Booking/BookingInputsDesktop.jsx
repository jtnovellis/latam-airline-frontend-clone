import React from 'react';

function BookingInputsDesktop() {
  return (
    <div className='input-desktop-container'>
      <div className='form-container'>
        <form>
          <div className='inputs'>
            <div className='input-text-container'>
              <div className='input'>
                <input
                  type='text'
                  name='origen'
                  id='ida'
                  placeholder='Ingresa origen'
                />
              </div>
            </div>
            <div className='input-text-container-two'>
              <div className='input'>
                <input
                  type='text'
                  name='destino'
                  id='regreso'
                  placeholder='Ingresa destino'
                />
              </div>
            </div>
            <div className='input-date-container'>
              <div className='dates'>
                <div className='input-ida'>
                  <input type='date' name='ida' id='fecha-ida' />
                </div>
                <div className='input-vuelta'>
                  <input type='date' name='vuelta' id='fecha-regreso' />
                </div>
              </div>
            </div>
            <div className='btn-submit-search'>
              <button type='submit' className='btn-buscar'>
                Buscar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default BookingInputsDesktop;
