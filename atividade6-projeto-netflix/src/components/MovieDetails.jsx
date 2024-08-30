// src/components/MovieDetails.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tmdb from "../Tmdb";
import HeaderPrincipal from "../components/HeaderPrincipal";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id, type } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await Tmdb.getMovieInfo(id, type);
      if (data) {
        setMovie(data);
      }
    };

    loadMovie();
  }, [id, type]);

  if (!movie) return <div>Loading...</div>;

  const title = movie.original_title || movie.name || "Título não disponível";
  const overview = movie.overview || "Sinopse não disponível";
  const backdropPath = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;
  const releaseDate =
    movie.release_date || movie.first_air_date || "Data não disponível";

  // Formatando a data para dd-mm-yyyy
  const formattedReleaseDate = new Date(releaseDate).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  const rating = movie.vote_average
    ? `${movie.vote_average}/10`
    : "Avaliação não disponível";
  const cast = movie.cast || [];

  return (
    <>
      <HeaderPrincipal />
      <div className="movie-details">
        <h1>{title}</h1>
        <p>{overview}</p>
        {backdropPath && <img src={backdropPath} alt={title} />}
        <p>Avaliação: {rating}</p>
        <p>Data de Lançamento: {formattedReleaseDate}</p>
        <h3>Elenco:</h3>
        <ul>
          {cast.map((actor, index) => (
            <li key={index}>
              {actor.name} como {actor.character}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
