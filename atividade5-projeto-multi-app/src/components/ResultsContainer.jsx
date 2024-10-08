import styled from 'styled-components';

// Cria um componente estilizado chamado ResultsContainer usando styled-components.
// Esse componente estiliza uma <div> com padding, fundo, bordas arredondadas, e sombra.
const ResultsContainer = styled.div`
  margin-top: 20px; // Adiciona uma margem de 20px acima do contêiner.
  padding: 20px; // Adiciona padding de 20px dentro do contêiner.
  background: #f9f9f9; // Define o fundo como um tom muito claro de cinza.
  border-radius: 10px; // Adiciona bordas arredondadas de 10px.
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do contêiner.
`;

export default ResultsContainer;