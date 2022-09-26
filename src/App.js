import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Flights from './pages/Flights';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='flights' element={<Flights />} />
      </Routes>
    </div>
  );
}

export default App;
