import { useState } from 'react'; // Importa o hook useState do React
import TranslateText from '../services/TranslateText' // Importa a função API para traduzir o texto
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import Container from '../components/Container' // Importa o component Container estilizado
import Button from '../components/Button' // Importa o component Button estilizado
import Title from '../components/Title' // Importa o component título estilizado
import Input from '../components/Input' // Importa o component input estilizado
import Paragraph from '../components/Paragraph'; // Importa o component parágrafo estilizado
import ErrorMessage from '../components/ErrorMessage'; // Importa o componente para exibir erros

// Define o estilo do label
const Label = styled.label`
  color: #555;
  font-size: 16px;
  margin-right: 10px;
`;

// Define o estilo do select
const Select = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Componente principal LanguageTranslator
const LanguageTranslator = () => {
  const [text, setText] = useState(''); // Define o estado para o texto a ser traduzido
  const [translatedText, setTranslatedText] = useState(''); // Define o estado para o texto traduzido
  const [sourceLang, setSourceLang] = useState('en'); // Define o estado para a língua de origem
  const [targetLang, setTargetLang] = useState('es'); // Define o estado para a língua de destino
  const [error, setError] = useState(null); // Estado para controlar erros

  const handleTranslate = async () => {
    setError(null); // Limpa o erro antes de nova requisição
    await TranslateText(text, sourceLang, targetLang, setTranslatedText, setError); // Passa setError para capturar erros
  };

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <Label>Source Language:</Label>
        <Select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <div>
        <Label>Target Language:</Label>
        <Select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <Input
        type="text"
        value={text} // Valor do campo de entrada é ligado ao estado text
        onChange={(e) => setText(e.target.value)} // Atualiza o estado text conforme o usuário digita
        placeholder="Enter text to translate" // Placeholder do campo de entrada
      />
      <Button onClick={handleTranslate}>Translate</Button> {/* Botão que chama a função translateText quando clicado */}
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe a mensagem de erro, se houver */}
      {translatedText && !error && <Paragraph>{translatedText}</Paragraph>} {/* Exibe o texto traduzido se não houver erro */}
    </Container>
  );
};

export default LanguageTranslator; // Exporta o componente LanguageTranslator como padrão