import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Flights from './pages/Flights';
import { Routes, Route } from 'react-router-dom';
import MyAccount from './pages/MyAccount';
import MyTrips from './components/DataUser/MyTrips';
import PayMethods from './components/DataUser/PayMethods';
import DataUser from './components/DataUser';
import AdminFligths from 'pages/AdminFligths';
import SearchFligth from 'components/BodyAdminFligths/SearchFligth';
import TravelData from 'components/BodyAdminFligths/TravelData';
//import SearchFligth from 'components/BodyAdminFligths/SearchFligth';
import LuggageCard from 'components/Luggage/LuggageButtons';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='my-account' element={<MyAccount />}>
          <Route index element={<DataUser />} />
          <Route path='my-trips' element={<MyTrips />} />
          <Route path='pay-methods' element={<PayMethods />} />
        </Route>
        <Route path='admin-fligths' element={<AdminFligths />}>
          <Route index element={<SearchFligth />} />
          <Route path='travel-data' element={<TravelData />} />
        </Route>
        <Route path='flights' element={<Flights />} />
        <Route path='luggage' element={<LuggageCard />} />
      </Routes>
    </div>
  );
}

export default App;
