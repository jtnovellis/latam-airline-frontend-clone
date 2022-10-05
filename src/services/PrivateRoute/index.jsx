import { useJwt } from 'react-jwt';
import useGetCookies from '../Cookies/useGetCookies';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(useGetCookies('lausrin'));
  const { isExpired } = useJwt(user.token);
  const auth = isExpired;
  return !auth ? children : <Navigate to='/' />;
};

export default PrivateRoute;
