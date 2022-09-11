import Flightoptions from './Flightoptions';
import { BookingDropdown } from './BookingDropdown';

function Boxsearch() {
  return (
    <div className='box-search'>
      <div className='title'>
        <h2>¿A dónde quieres ir?</h2>
      </div>
      <div className='search-flight-options'>
        <Flightoptions content='Ida y vuelta' />
        <Flightoptions content='Economy' />
        <Flightoptions content='Pasajero' pasajeroNum={1} />
      </div>
      <BookingDropdown />
    </div>
  );
}

export default Boxsearch;
