import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import MyAccount from './pages/MyAccount';
import MyTrips from './components/DataUser/MyTrips';
import PayMethods from './components/DataUser/PayMethods';
import DataUser from './components/DataUser';

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
      </Routes>
    </div>
  );
}

export default App;
