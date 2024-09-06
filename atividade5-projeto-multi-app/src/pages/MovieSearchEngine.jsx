import { useState } from 'react'; // Importa o hook useState do React
import styled from 'styled-components'; // Importa styled-components para estilizar os componentes
import SearchMovies from '../services/SearchMovies'
import Container from '../components/Container' // Importa o component Container estilizado
import Button from '../components/Button' // Importa o component Button estilizado
import Title from '../components/Title' // Importa o component título estilizado
import Input from '../components/Input' // Importa o component input estilizado
import ErrorMessage from '../components/ErrorMessage'; // Importa o componente para exibir erros

// Define o estilo do container dos filmes
const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  max-height: 500px; /* Ajuste a altura máxima conforme necessário */
  overflow-y: auto; /* Adiciona rolagem vertical se necessário */
  width: 100%;
`;

// Define o estilo do cartão de filme
const MovieCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 180px; /* Ajuste a largura conforme necessário */
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 10px;
    max-width: 100%; /* Ajusta o tamanho da imagem para caber dentro do cartão */
    height: auto;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

// Componente principal MovieSearchEngine
const MovieSearchEngine = () => {
  const [query, setQuery] = useState(''); // Define o estado para a consulta de busca
  const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes
  const [error, setError] = useState(null); // Define o estado para armazenar erros
  const [loading, setLoading] = useState(false); // Estado para exibir o carregamento

  const handleSearch = async () => {
    setError(null); // Limpa qualquer erro anterior
    setLoading(true); // Ativa o estado de carregamento
    try {
      await SearchMovies(query, setMovies, setError);
    } finally {
      setLoading(false); // Desativa o estado de carregamento após a busca
    }
  };

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query} // Valor do campo de entrada é ligado ao estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
        placeholder="Search for a movie" // Placeholder do campo de entrada
      />
      <Button onClick={handleSearch} disabled={loading || !query}>
        {loading ? 'Searching...' : 'Search'}
      </Button>
      {error && <ErrorMessage>{error}</ErrorMessage>} {/* Exibe mensagem de erro, se houver */}
      <MoviesContainer>
        {movies && movies.length > 0 ? (
          movies.map((movie) => ( // Verifica se há filmes e os mapeia para exibir MovieCard
            <MovieCard key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} Poster`} /> {/* Exibe o pôster do filme */}
              <h3>{movie.Title}</h3> {/* Exibe o título do filme */}
              <p>{movie.Year}</p> {/* Exibe o ano do filme */}
            </MovieCard>
          ))
        ) : (
          !loading && !error && <p>No movies found.</p> // Exibe mensagem quando não há filmes
        )}
      </MoviesContainer>
    </Container>
  );
};

export default MovieSearchEngine; // Exporta o componente MovieSearchEngine como padrão
