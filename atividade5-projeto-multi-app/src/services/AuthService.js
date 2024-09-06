import axios from 'axios';
import jwt_decode from 'jwt-decode'; // Importa jwt_decode corretamente

const API_URL = 'https://seu-servidor.com/api';

// Função para fazer login e armazenar o token
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    const token = response.data.token;

    localStorage.setItem('jwtToken', token);
    return jwt_decode(token); // Retorna o token decodificado
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

// Função para remover o token e deslogar
export const logout = () => {
  localStorage.removeItem('jwtToken');
  window.location.href = '/login'; // Redireciona para a página de login ao fazer logout
};

// Função para pegar o token do localStorage
export const getToken = () => {
  return localStorage.getItem('jwtToken');
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;

  const decodedToken = jwt_decode(token);

  // Se o token expirou, retorna falso
  if (decodedToken.exp * 1000 < Date.now()) {
    return false;
  }
  return true;
};

// Função para renovar o token caso esteja próximo de expirar
export const refreshToken = async () => {
  try {
    const token = getToken();
    if (!token) return null;

    const decodedToken = jwt_decode(token);
    const isTokenExpiringSoon = (decodedToken.exp * 1000) - Date.now() < 60000; // 1 minuto antes da expiração

    if (isTokenExpiringSoon || decodedToken.exp * 1000 < Date.now()) {
      const response = await axios.post(`${API_URL}/refresh-token`, { token });
      const newToken = response.data.token;

      localStorage.setItem('jwtToken', newToken);
      return jwt_decode(newToken);
    }
  } catch (error) {
    console.error("Erro ao renovar o token:", error);
    logout(); // Se houver um erro, desloga o usuário
    throw error;
  }
};

// Interceptador para adicionar o token em cada requisição e renovar se necessário
axios.interceptors.request.use(async (config) => {
  const token = getToken();
  
  if (token) {
    const decodedToken = jwt_decode(token);
    
    // Verifica se o token está próximo de expirar ou já expirou
    if ((decodedToken.exp * 1000) - Date.now() < 60000) {
      try {
        await refreshToken(); // Renova o token se necessário
      } catch (error) {
        console.error("Erro ao renovar o token:", error);
        logout(); // Se a renovação falhar, desloga o usuário
        window.location.href = '/login'; // Redireciona para a página de login
        return Promise.reject(error);
      }
    }

    // Adiciona o token atualizado ou existente no cabeçalho Authorization
    config.headers['Authorization'] = `Bearer ${getToken()}`;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});
