import React from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PassengersCard from './PassengersCard';
import { useSelector } from 'react-redux';

const Passengers = () => {
  const info = useSelector(state => state.bookingReducer);
  const { adults, kids } = info;
  const adultsToRender = [];
  const kidsToRender = [];

  for (let i = 0; i < adults.amount; i++) {
    adultsToRender.push(adults.seats.go);
  }
  if (kids.amount) {
    for (let i = 0; i < adults.amount; i++) {
      kidsToRender.push(kids.seats.go);
    }
  }
  return (
    <div className='passengersContainer'>
      <div className='passengersContainer__header'>
        <h2>Pasajeros</h2>
        <div className='passengersContainer__data'>
          <div className='passengersContainer__data--adults'>
            {adultsToRender.map(({ column, row, price, location }, i) => (
              <PassengersCard
                key={`${column}${row}`}
                seat={`${column}${row}`}
                level={location}
                passenger={'Adulto'}
                numPass={i + 1}
                price={price}
              />
            ))}
          </div>
          <div className='passengersContainer__data--kids'>
            {kidsToRender.map(({ column, row, price, location }, i) => (
              <PassengersCard
                key={`${column}${row}`}
                seat={`${column}${row}`}
                level={location}
                passenger={'Kids'}
                numPass={i + 1}
                price={price}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='passengersContainer__flightSelector'>
        <button className='passengersContainer__flightSelector--buttonNext'>
          Pasar al siguiente vuelo
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
