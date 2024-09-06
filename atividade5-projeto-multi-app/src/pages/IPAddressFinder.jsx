import { useState } from 'react'; // Importa o hook useState do React
import FindIP from '../services/FindIP' // Importa a função API para encontrar o IP
import Container from '../components/Container' // Importa o component Container estilizado
import Button from '../components/Button' // Importa o component Button estilizado
import Title from '../components/Title' // Importa o component título estilizado
import Input from '../components/Input' // Importa o component input estilizado
import ResultsContainer from '../components/ResultsContainer' // Importa a div de resultado estilizada
import ErrorMessage from '../components/ErrorMessage'; // Importa o componente de mensagem de erro estilizado

// Componente principal IPAddressFinder
const IPAddressFinder = () => {
  const [ip, setIp] = useState(''); // Define o estado para o IP digitado pelo usuário
  const [ipData, setIpData] = useState(null); // Define o estado para armazenar os dados do IP
  const [error, setError] = useState(null); // Estado para armazenar erros

  const handleFindIP = async () => {
    setError(null); // Limpa o erro antes de uma nova busca
    await FindIP(ip, setIpData, setError); // Passa setError para lidar com o erro na função FindIP
  };

  return (
    <Container>
      <Title>IP Address Finder</Title>
      <Input
        type="text"
        value={ip} // Valor do campo de entrada é ligado ao estado ip
        onChange={(e) => setIp(e.target.value)} // Atualiza o estado ip conforme o usuário digita
        placeholder="Enter IP address" // Placeholder do campo de entrada
      />
      <Button onClick={handleFindIP}>Find IP</Button> {/* Botão que chama a função FindIP quando clicado */}
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe a mensagem de erro se houver algum */}
      

      {ipData && !error && ( /* Exibe os dados do IP somente se não houver erro */
        <ResultsContainer>
          <p><strong>IP:</strong> {ipData.ip}</p>
          <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
          <p><strong>ISP:</strong> {ipData.org}</p>
        </ResultsContainer>
      )}
    </Container>
  );
};

export default IPAddressFinder; // Exporta o componente IPAddressFinder como padrão