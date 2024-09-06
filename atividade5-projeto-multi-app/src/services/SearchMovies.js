import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP  

// Função para buscar filmes
const SearchMovies = async (query, setMovies, setError) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=403abbfe`); // Faz uma requisição GET para a API OMDB
        if (response.data.Response === 'True') {
            setMovies(response.data.Search); // Armazena os dados dos filmes no estado movies
        } else {
            setMovies([]);
            setError('No movies found for this query.');
        }
    } catch (error) {
        console.error("Error fetching movie data:", error); // Exibe um erro no console em caso de falha
        setError('Failed to fetch movie data. Please try again later.');
    }
};

export default SearchMovies;
