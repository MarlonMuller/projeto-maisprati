import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
  
  // Função para traduzir o texto
  const TranslateText = async (text, sourceLang, targetLang, setTranslatedText) => {
    try {
      const response = await axios.get('https://api.mymemory.translated.net/get', {
        params: {
          q: text, // Texto a ser traduzido
          langpair: `${sourceLang}|${targetLang}`, // Par de línguas para tradução
        },
      });
      setTranslatedText(response.data.responseData.translatedText); // Armazena o texto traduzido no estado translatedText
    } catch (error) {
      console.error("Error translating text:", error); // Exibe um erro no console em caso de falha
    }
  };

  export default TranslateText;