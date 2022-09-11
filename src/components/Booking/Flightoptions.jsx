import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

/* import { useState } from 'react'; */

function Flightoptions({ content, pasajerosStado }) {
  /*   const [Passenger, setCountPassenfer] = useState(1);
  const [countChild, setCountChild] = useState(1);
  const [countBaby, setCountBaby] = useState(1); */

  return (
    <>
      <div className='search-info'>
        <span>
          {pasajerosStado} {content}
        </span>
        <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
      </div>
    </>
  );
}
export default Flightoptions;
