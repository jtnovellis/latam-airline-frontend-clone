import React from 'react';
import SeatsRow from './SeatsRow';
import Emergency from 'components/SelectionSeats/Emergency';

const Airplane = ({ flightData, param, totalseats, setTotalseats }) => {
  const { airplane, seats } = flightData;
  const { firstDiv, secondDiv, thirthDiv, headerSeats } = seats;
  const { planeModel: airBus } = airplane;

  return (
    <div className={param === 'arrival' ? 'airplaneout' : 'airplane'}>
      <div className='airplane__body'>
        <p>{airBus}</p>
        <div className='airplane__body--seats'>
          <div className='seats--header'>
            {headerSeats.map(item => (
              <div key={item} className='seats--header-item'>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className='seats-firstDiv'>
            {firstDiv.map((rows, i) => (
              <SeatsRow
                key={`${i}${airBus}seats-firstDiv`}
                airBus={airBus}
                rows={rows}
                totalseats={totalseats}
                setTotalseats={setTotalseats}
                param={param}
              />
            ))}
          </div>
          <Emergency />
          <div className='seats-secondDiv'>
            {secondDiv.map((rows, i) => (
              <SeatsRow
                key={`${i}${airBus}seats-secondDiv`}
                airBus={airBus}
                rows={rows}
                totalseats={totalseats}
                setTotalseats={setTotalseats}
                param={param}
              />
            ))}
          </div>
          <Emergency />
          <div className='seats-secondDiv'>
            {thirthDiv.map((rows, i) => (
              <SeatsRow
                key={`${i}${airBus}seats-secondDiv`}
                airBus={airBus}
                rows={rows}
                totalseats={totalseats}
                setTotalseats={setTotalseats}
                param={param}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airplane;
