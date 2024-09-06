import styled from 'styled-components';

// Cria um componente estilizado chamado Paragraph usando styled-components.
// Esse componente estiliza um <p> para exibir a pontuação com cor, tamanho da fonte e margem.
const Paragraph = styled.p`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  font-size: 20px; // Define o tamanho da fonte como 20px.
  margin-top: 20px; // Adiciona uma margem de 20px acima da pontuação.
  text-align: center; // Alinha o texto no centro horizontalmente.
  background: #f9f9f9; // Adiciona um fundo claro.
  border-radius: 10px; // Arredonda os cantos
  padding: 20px; // Adiciona um espaço dentro do elemento
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adiciona uma sombra leve no elemento
`;

export default Paragraph;