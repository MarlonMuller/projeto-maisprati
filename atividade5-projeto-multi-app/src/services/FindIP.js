import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP 

// Função para buscar os dados do IP
const FindIP = async (ip, setIpData, setError) => {
    try {
        const url = `https://ipinfo.io/${ip}/json`
        const response = await axios.get(url); // Faz uma requisição GET para a API ipinfo.io

        // Verifica se a resposta contém dados
        if (response.data.error) {
            throw new Error("Invalid IP address.");
        }

        setIpData(response.data); // Armazena os dados da resposta no estado ipData
    } catch (error) {
        if (error.response) {
            // Resposta com erro do servidor
            setError("Failed to fetch IP data. Please check the IP address and try again.");
        } else {
            // Outro tipo de erro (rede, etc.)
            setError("An error occurred while fetching IP data. Please try again later.");
        }
        setIpData(null); // Limpa os dados de IP em caso de erro
    }
};

export default FindIP;