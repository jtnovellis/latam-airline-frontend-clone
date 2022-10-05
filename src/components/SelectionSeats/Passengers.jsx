import React from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PassengersCard from './PassengersCard';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

//_________________________________________________________________________________
const handler = window.ePayco.checkout.configure({
  key: 'd7715028e800197071a813ebf7e3e754',
  test: true,
});
//__________________________________________________________________________________
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
  // const navigate = useNavigate();

  //______________________________________________________________________

  const flightData = useSelector(state => state.flightsReducer);
  const userData = useSelector(state => state.userReducer);

  const data = {
    //Parametros compra (obligatorio)
    name: `LA${flightData.id}`,
    description: 'Vestido Mujer Primavera',
    invoice: `${flightData.id}`,
    currency: 'cop',
    amount: `${flightData.price.light}`,
    tax_base: '0',
    tax: '0',
    country: 'co',
    lang: 'es',

    //Onpage="false" - Standard="true"
    external: 'false',

    //Atributos opcionales
    extra1: `${flightData.departureUser}`,
    extra2: `${flightData.arrivalUser}`,
    extra3: 'extra3',
    response: 'http://secure2.payco.co/prueba_curl.php',

    //Atributos cliente
    name_billing: `${userData.name}`,
    address_billing: '',
    type_doc_billing: `${userData.documentType}`,
    mobilephone_billing: `${userData.phoneNumber}`,
    number_doc_billing: `${userData.documentNumber}`,

    //atributo deshabilitación metodo de pago
    methodsDisable: ['PSE', 'SP', 'CASH', 'DP'],
  };

  //_________________________________________________________________________

  React.useEffect(() => {
    setToRender(passengersToRender);
  }, [totalseats]);

  const handleClick = () => {
    if (roundTrip && param !== 'arrival') {
      setQuery({ dir: 'arrival' });
      setTotalseats(0);
    } else {
      // navigate({
      //   pathname: '/luggage',
      // });
      handler.open(data);
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
                    column={column}
                    row={row}
                    level={location}
                    numPass={i + 1}
                    price={price}
                    param={param}
                    setTotalseats={setTotalseats}
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
