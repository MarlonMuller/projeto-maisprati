// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useState } from 'react';
// Importa a biblioteca styled-components para criar componentes estilizados.
import Container from '../components/Container'; // Importa o component Container estilizado
import Button from '../components/Button'; // Importa o component Button estilizado
import Title from '../components/Title'; // Importa o component título estilizado
import Paragraph from '../components/Paragraph'; // Importa o component parágrafo estilizado
import ErrorMessage from '../components/ErrorMessage'; // Importa o componente de mensagem de erro estilizado

// Define o componente funcional QuizApp.
const QuizApp = () => {
  // Usa o hook useState para criar variáveis de estado para a pontuação e a pergunta atual.
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro
  const [completed, setCompleted] = useState(false); // Estado para rastrear se o quiz foi concluído

  // Define um array de perguntas, cada uma com a pergunta, opções e resposta correta.
  const questions = [
    {
      question: "What is 2+2?", // Pergunta da primeira questão.
      options: ["3", "4", "5", "6"], // Opções de resposta para a primeira questão.
      answer: "4", // Resposta correta para a primeira questão.
    },
    {
      question: "What is 3+3?", // Pergunta da segunda questão.
      options: ["5", "6", "7", "8"], // Opções de resposta para a segunda questão.
      answer: "6", // Resposta correta para a segunda questão.
    },
  ];

  // Função que é chamada quando o usuário responde uma pergunta.
  const handleAnswer = (answer) => {
    try {
      // Verifica se há perguntas disponíveis
      if (questions.length === 0) {
        throw new Error('No questions available. Please try again later.');
      }

      // Verifica se a resposta fornecida está correta.
      if (answer === questions[currentQuestion].answer) {
        // Se a resposta estiver correta, aumenta a pontuação em 1.
        setScore(score + 1);
      }

      // Passa para a próxima pergunta.
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Se todas as perguntas foram respondidas, exibe uma mensagem de conclusão
        setCompleted(true);
        setError('');
      }
    } catch (e) {
      // Define uma mensagem genérica para erros inesperados
      const errorMessage = e.message || 'An unexpected error occurred. Please try again.';
      setError(errorMessage); // Atualiza o estado de erro com a mensagem de erro
    }
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Quiz App</Title> {/* Exibe o título do aplicativo de quiz */}

      {/* Exibe mensagem de erro, se houver */}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* Verifica se o quiz foi concluído */}
      {completed ? (
        <Paragraph>Your score: {score}</Paragraph> /* Exibe a pontuação final após responder todas as perguntas */
      ) : currentQuestion < questions.length ? ( // Verifica se ainda há perguntas para responder.
        <div>
          <Paragraph>{questions[currentQuestion].question}</Paragraph> {/* Exibe a pergunta atual */}
          {questions[currentQuestion].options.map((option) => (
            <Button key={option} onClick={() => handleAnswer(option)}>{option}</Button> /* Renderiza os botões de opções de resposta */
          ))}
        </div>
      ) : (
        <Paragraph>Loading questions...</Paragraph> // Exibe um estado de carregamento enquanto as perguntas estão sendo carregadas
      )}
    </Container>
  );
};

// Exporta o componente QuizApp para que possa ser utilizado em outras partes da aplicação.
export default QuizApp;
