import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

function Products() {
  return (
    <div className='products'>
      <div className='products-option'>
        <div className='btn-vuelos-container'>
          <button type='button' name='vuelos' className='vuelos'>
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              className='faPlaneDeparture'
            />
            Vuelos
          </button>
        </div>
      </div>
    </div>
  );
}
export default Products;
