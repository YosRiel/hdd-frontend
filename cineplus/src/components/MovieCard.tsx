import React from 'react';
import type { Pelicula } from '../data/peliculas';

interface MovieCardProps {
  pelicula: Pelicula;
}

const MovieCard: React.FC<MovieCardProps> = ({ pelicula }) => (
  <div className="movie-card">
    <img src={pelicula.imagen} alt={pelicula.titulo} />
    <h3>{pelicula.titulo}</h3>
    <p>{pelicula.genero} | {pelicula.duracion}</p>
    <button>Ver detalles</button>
  </div>
);

export default MovieCard;
