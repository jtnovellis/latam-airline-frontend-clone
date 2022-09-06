import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Burgericon() {
  return (
    <div className='menu-responsive'>
      <button>
        <FontAwesomeIcon icon={faBars} className='faBars' />
      </button>
    </div>
  );
}
export default Burgericon;
