import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, refreshToken } from '../services/AuthService';

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [auth, setAuth] = useState(isAuthenticated()); // Verifica se o usuário está autenticado

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      try {
        if (isAuthenticated()) {
          await refreshToken(); // Tenta renovar o token
          setAuth(true); // Define o usuário como autenticado
        } else {
          setAuth(false); // Se o token expirou, define como não autenticado
        }
      } catch (error) {
        setAuth(false); // Se falhar, define como não autenticado
      } finally {
        setLoading(false); // Remove o carregamento
      }
    };

    checkAndRefreshToken();
  }, []);

  if (loading) {
    return <div>Carregando...</div>; // Exibe um carregamento enquanto verifica o token
  }

  return auth ? children : <Navigate to="/" />; // Redireciona se não estiver autenticado
};

export default PrivateRoute;
