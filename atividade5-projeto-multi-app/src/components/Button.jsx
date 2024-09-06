import styled from 'styled-components'; // Importa styled-components para estilizar 

// Define o estilo do botão
const Button = styled.button`
  padding: 12px 20px; // Adiciona padding de 12px verticalmente e 20px horizontalmente.
  background-color: #007bff; // Define a cor de fundo como azul.
  color: white; // Define a cor do texto como branco.
  border: none; // Remove a borda padrão do botão.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  margin: 10px; // Adiciona uma margem de 10px ao redor do botão.
  transition: background-color 0.3s, transform 0.3s; // Adiciona uma transição suave para a cor de fundo e transformação.

  &:hover { // Aplica estilos ao botão quando o cursor está sobre ele.
    background-color: #0056b3; // Muda a cor de fundo para um tom mais escuro de azul.
    transform: scale(1.05); // Aumenta levemente o tamanho do botão.
  }

  &:active { // Aplica estilos ao botão quando ele é clicado.
    background-color: #004494; // Muda a cor de fundo para um tom ainda mais escuro de azul.
    transform: scale(0.95); // Reduz levemente o tamanho do botão.
  }
`;

export default Button;