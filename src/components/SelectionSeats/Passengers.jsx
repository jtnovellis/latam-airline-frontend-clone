import React from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PassengersCard from './PassengersCard';

const Passengers = ({ passengersToRender, totalseats }) => {
  let length = passengersToRender.length;
  const [toRender, setToRender] = React.useState([]);
  React.useEffect(() => {
    setToRender(passengersToRender);
  }, [totalseats]);

  return (
    <div className='passengersContainer'>
      <div className='passengersContainer__header'>
        <h2>Pasajeros</h2>
        <div className='passengersContainer__data'>
          <div className='passengersContainer__data--adults'>
            {length > 0 ? (
              toRender.map(({ column, row, price, location }, i) => (
                <PassengersCard
                  key={`${column}${row}`}
                  seat={`${column}${row}`}
                  level={location}
                  numPass={i + 1}
                  price={price}
                />
              ))
            ) : (
              <PassengersCard numPass={1} />
            )}
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
