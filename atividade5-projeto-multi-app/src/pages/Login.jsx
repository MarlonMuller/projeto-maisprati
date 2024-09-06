import { useState } from 'react'; // Importa o hook useState do React
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import Container from '../components/Container' // Importa o component Container estilizado
import Button from '../components/Button' // Importa o component Button estilizado
import Title from '../components/Title' // Importa o component título estilizado
import Input from '../components/Input' // Importa o component input estilizado

// Define o estilo do formulário de login
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Componente principal de Login
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(''); // Define o estado para o nome de usuário
  const [password, setPassword] = useState(''); // Define o estado para a senha

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (username === 'admin' && password === 'password') {
      onLogin(); // Chama a função onLogin passada como prop se as credenciais estiverem corretas
    } else {
      alert('Invalid credentials'); // Exibe um alerta se as credenciais estiverem incorretas
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="text"
          value={username} // Valor do campo de entrada é ligado ao estado username
          onChange={(e) => setUsername(e.target.value)} // Atualiza o estado username conforme o usuário digita
          placeholder="Username" // Placeholder do campo de entrada
        />
        <Input
          type="password"
          value={password} // Valor do campo de entrada é ligado ao estado password
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password conforme o usuário digita
          placeholder="Password" // Placeholder do campo de entrada
        />
        <Button type="submit">Login</Button> {/* Botão que envia o formulário */}
      </LoginForm>
    </Container>
  );
};

export default Login; // Exporta o componente Login como padrão