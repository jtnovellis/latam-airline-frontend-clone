import React from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PassengersCard from './PassengersCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Passengers = ({
  passengersToRender,
  totalseats,
  setQuery,
  param,
  setTotalseats,
}) => {
  let length = passengersToRender.length;
  const [toRender, setToRender] = React.useState([]);
  const roundTrip = useSelector(state => state.bookingReducer.roundTrip);
  const navigate = useNavigate();

  React.useEffect(() => {
    setToRender(passengersToRender);
  }, [totalseats]);

  const handleClick = () => {
    if (roundTrip && param !== 'arrival') {
      setQuery({ dir: 'arrival' });
      setTotalseats(0);
    } else {
      navigate({
        pathname: '/',
      });
    }
  };

  return (
    <div className='passengersContainer'>
      <div className='passengersContainer__header'>
        <h2>Pasajeros</h2>
        <div className='passengersContainer__data'>
          <div className='passengersContainer__data--adults'>
            {length > 0 ? (
              toRender.map(({ column, row, price, location }, i) => (
                <>
                  <PassengersCard
                    key={`${i}${column}${param}`}
                    seat={`${column}${row}`}
                    level={location}
                    numPass={i + 1}
                    price={price}
                  />
                </>
              ))
            ) : (
              <PassengersCard key={param} numPass={1} />
            )}
          </div>
        </div>
      </div>
      <div className='passengersContainer__flightSelector'>
        <button
          className='passengersContainer__flightSelector--buttonNext'
          onClick={handleClick}>
          {roundTrip && param !== 'arrival'
            ? 'Pasar al siguiente vuelo'
            : 'Continuar'}
        </button>
        <div>
          <button>
            <span>Precio final</span>
            <KeyboardArrowUpOutlinedIcon />
          </button>
          <p>COP 408.254,45</p>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
