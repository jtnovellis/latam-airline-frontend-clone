import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Flightoptions({ content, pasajeroNum }) {
  return (
    <div className='search-info'>
      <span>
        {pasajeroNum} {content}
      </span>
      <FontAwesomeIcon icon={faAngleDown} className='faAngleDown' />
    </div>
  );
}
export default Flightoptions;
