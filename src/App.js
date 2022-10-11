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
import SelectionSeats from 'pages/SelectionSeats';
import NotFound from 'pages/NotFound';
import Luggage from 'pages/Luggage';
import PrivateRoute from 'services/PrivateRoute';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { SET_ALL_DATAUSER } from './store/reducers/userReducer';
import useGetCookies from './services/Cookies/useGetCookies';
import { useJwt } from 'react-jwt';

function App() {
  const dispatch = useDispatch();
  const user = useGetCookies('lausrin');
  const { isExpired } = useJwt(user);
  const auth = isExpired;
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!auth) {
      axios
        // eslint-disable-next-line no-undef
        .get(`${process.env.REACT_APP_API_LATAM_CLONE}/api/users/data`, {
          headers: {
            Authorization: `Bearer ${useGetCookies('lausrin')}`,
          },
        })
        .then(res => {
          const { data } = res;
          dispatch({ type: SET_ALL_DATAUSER, payload: data.data });
        })
        .catch(err => {
          setError(err);
        });
    }
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route
          path='my-account'
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }>
          <Route index element={<DataUser />} />
          <Route path='my-trips' element={<MyTrips />} />
          <Route path='pay-methods' element={<PayMethods />} />
        </Route>
        <Route path='admin-fligths' element={<AdminFligths />}>
          <Route index element={<SearchFligth />} />
          <Route path='travel-data' element={<TravelData />} />
        </Route>
        <Route path='flights' element={<Flights />} />
        <Route path='seats-selection' element={<SelectionSeats />} />
        <Route path='luggage' element={<Luggage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
