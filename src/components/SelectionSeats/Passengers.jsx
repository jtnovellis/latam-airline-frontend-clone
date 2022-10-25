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
  const flightDataPrice = useSelector(state => state.bookingReducer.flightData);
  React.useEffect(() => {
    setToRender(passengersToRender);
  }, [totalseats]);

  const handleClick = () => {
    if (roundTrip && param !== 'arrival') {
      setQuery({ dir: 'arrival' });
      setTotalseats(0);
    } else {
      navigate({
        pathname: '/luggage',
      });
    }
  };
  let flightTotal = 0;
  flightDataPrice.map(item => (flightTotal += item.price));

  return (
    <div className='passengersContainer'>
      <div className='passengersContainer__header'>
        <h2>Pasajeros</h2>
        <div className='passengersContainer__data'>
          <div className='passengersContainer__data--adults'>
            {length > 0 ? (
              toRender.map(({ column, row, price, location }, i) => (
                <PassengersCard
                  key={`${i}${column}${param}`}
                  seat={`${column}${row}`}
                  column={column}
                  row={row}
                  level={location}
                  numPass={i + 1}
                  price={price}
                  param={param}
                  setTotalseats={setTotalseats}
                />
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
          <p>COP {flightTotal.toLocaleString('en-US')}</p>
        </div>
      </div>
    </div>
  );
};

export default Passengers;
