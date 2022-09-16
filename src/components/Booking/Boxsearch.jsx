/* import Flightoptions from './Flightoptions'; */
import { BookingDropdown } from './BookingDropdown';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import IdaVueltaDropdown from './IdaVueltaDropdown';

function Boxsearch() {
  const [drop, setDrop] = useState({
    idavuelta: false,
    economy: false,
    passenger: false,
  });

  function handleClick(e) {
    switch (e.target.value) {
      case 'idavuelta':
        setDrop(prev => ({ ...prev, [e.target.value]: !prev[e.target.value] }));
        break;
      case 'economy':
        setDrop(prev => ({ ...prev, [e.target.value]: !prev[e.target.value] }));
        break;
      case 'passenger':
        setDrop(prev => ({ ...prev, [e.target.value]: !prev[e.target.value] }));
        break;
      default:
        setDrop(prev => ({ ...prev }));
        break;
    }
  }

  const { idavuelta, economy, passenger } = drop;

  return (
    <div className='box-search'>
      <div className='title'>
        <h2>¿A dónde quieres ir?</h2>
      </div>
      <div className='search-flight-options'>
        <div className={idavuelta ? 'search-info-ida-vuelta' : 'search-info'}>
          <button onClick={e => handleClick(e)} value='idavuelta'>
            Ida y vuelta
          </button>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={idavuelta ? 'faAngleDownIda-vuelta' : 'faAngleDown'}
          />
        </div>
        <div className={economy ? 'search-info-ida-vuelta' : 'search-info'}>
          <button onClick={e => handleClick(e)} value='economy'>
            Economy
          </button>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={economy ? 'faAngleDownIda-vuelta' : 'faAngleDown'}
          />
        </div>
        <div className={passenger ? 'search-info-ida-vuelta' : 'search-info'}>
          <button onClick={e => handleClick(e)} value='passenger'>
            1 Pasajero
          </button>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={passenger ? 'faAngleDownIda-vuelta' : 'faAngleDown'}
          />
        </div>
      </div>
      {idavuelta && <IdaVueltaDropdown />}
      {passenger && <BookingDropdown />}
    </div>
  );
}

export default Boxsearch;
