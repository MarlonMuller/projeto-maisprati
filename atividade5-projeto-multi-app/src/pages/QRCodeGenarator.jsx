import { useState } from 'react'; // Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { QRCodeSVG } from 'qrcode.react'; // Importa o componente QRCode da biblioteca qrcode.react para gerar códigos QR.
import Container from '../components/Container' // Importa o component Container estilizado
import Title from '../components/Title' // Importa o component título estilizado
import Input from '../components/Input' // Importa o component input estilizado
import ResultsContainer from '../components/ResultsContainer' // Importa a div de resultado estilizada
import ErrorMessage from '../components/ErrorMessage'; // Importa o componente de mensagem de erro estilizado

// Define o componente funcional QRCodeGenerator.
const QRCodeGenerator = () => {// Usa o hook useState para criar uma variável de estado chamada 'text' e uma função para atualizá-la.
  const [text, setText] = useState(''); // 'text' armazena o texto que será codificado no QR Code.
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro

  const validateText = (input) => {
    // Verifica se o texto contém apenas espaços em branco
    if (input.trim() === '') {
      setError('O campo de texto não pode estar vazio ou ter apenas espaços em branco.');
      return false;
    }
    // Limpa a mensagem de erro se a validação for bem-sucedida
    setError('');
    return true;
  };

  // Função para lidar com mudanças no campo de entrada
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);

    // Valida o texto a cada alteração
    validateText(inputValue);
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      {/* Exibe o título do gerador de QR Code */}
      <Title>QR Code Generator</Title>
      {/* Renderiza um campo de input para o usuário inserir o texto que será codificado */}
      <Input
        type="text"
        value={text} // Define o valor do input como o texto do estado.
        onChange={handleInputChange} // Atualiza o estado 'text' quando o valor do input muda.
        placeholder="Enter text to encode" // Texto exibido quando o campo está vazio.
      />
      {/* Exibe a mensagem de erro, se houver */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {/* Renderiza o QRCode apenas se o texto for válido e não estiver vazio */}
      {!error && text && (
        <ResultsContainer>
          <QRCodeSVG value={text} size={256} /> {/* Gera o QR Code com o texto atual e tamanho 256px */}
        </ResultsContainer>
      )}
    </Container>
  );
};

// Exporta o componente QRCodeGenerator para que possa ser utilizado em outras partes da aplicação.
export default QRCodeGenerator;