import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Flightoptions({
  content,
  pasajerosStado,
  click,
  trigger,
  classTrigger,
  iconClass,
}) {
  return (
    <>
      <div
        className={trigger ? classTrigger : 'search-info'}
        onClick={() => click(trigger)}>
        <span>
          {pasajerosStado} {content}
        </span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={trigger ? iconClass : 'faAngleDown'}
        />
      </div>
    </>
  );
}
export default Flightoptions;
