/* import Flightoptions from './Flightoptions'; */
import { BookingDropdown } from './BookingDropdown';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Boxsearch() {
  const [drop, setDrop] = useState(false);
  function handleClick() {
    if (drop) {
      setDrop(false);
    } else {
      setDrop(true);
    }
  }
  console.log(drop);
  return (
    <div className='box-search'>
      <div className='title'>
        <h2>¿A dónde quieres ir?</h2>
      </div>
      <div className='search-flight-options'>
        <div className={drop ? 'search-info-ida-vuelta' : 'search-info'}>
          <button onClick={() => handleClick}>Ida y vuelta</button>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={drop ? 'faAngleDownIda-vuelta' : 'faAngleDown'}
          />
        </div>
        <div
          className={drop ? 'search-info-economy' : 'search-info'}
          onClick={() => handleClick}>
          <span>Economy</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={drop ? 'faAngleDownIda-vuelta' : 'faAngleDown'}
          />
        </div>
        <div
          className={drop ? 'search-info-passenger' : 'search-info'}
          onClick={() => handleClick}>
          <span>1 Pasajero</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={drop ? 'faAngleDownIda-vuelta' : 'faAngleDown'}
          />
        </div>
      </div>
      <BookingDropdown />
    </div>
  );
}

export default Boxsearch;
