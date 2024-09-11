import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    // Verifica se o token expirou
    if (decodedToken.exp < currentTime) {
      return <Navigate to="/" />;
    }

    return children;
  } catch (error) {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
