// cineplus/src/pages/DetallePelicula.tsx
import React from "react";
<<<<<<< Updated upstream
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { movies } from "../data/dummyMovies";

const DetallePelicula: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-8 text-center text-red-600 font-bold">
          ❌ Película no encontrada
        </div>
=======
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { peliculas } from "../data/peliculas";

const DetallePelicula: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("pelicula");
  const pelicula = peliculas.find((p) => p.id === id);

  if (!pelicula) {
    return (
      <div className="min-h-screen bg-cineplus-bg text-white p-8">
        <h2>Película no encontrada</h2>
>>>>>>> Stashed changes
      </div>
    );
  }

  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-[#363434]">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 bg-[#D9D7D7] shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Imagen */}
          <img
            src={movie.img}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg shadow-md"
          />

          {/* Info */}
          <div className="flex-1">
            <p className="text-gray-700 mb-4">{movie.synopsis}</p>
            <p className="text-sm text-gray-500 mb-2">
              🎬 Formato: {movie.format}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              🔞 Clasificación: {movie.ageRating}
            </p>
          </div>
        </div>

        {/* Trailer */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-3">🎥 Trailer Oficial</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[400px] rounded-lg"
              src={movie.trailerUrl}
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
=======
    <div className="min-h-screen bg-cineplus-bg text-white">
      <Navbar />
      {/* Hero con fondo difuminado */}
      <div
        className="relative h-[400px] flex items-end"
        style={{
          backgroundImage: `url(${pelicula.imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-8">
          <h1 className="text-4xl font-bold">{pelicula.titulo}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {pelicula.duracion} • {pelicula.genero} • Clasificación:{" "}
            {pelicula.clasificacion}
          </p>
          <div className="flex gap-4 mt-4">
            <button className="btn-cineplus">Comprar</button>
            <a
              href={pelicula.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cineplus bg-white text-black"
            >
              Ver Tráiler
            </a>
          </div>
        </div>
      </div>

      {/* Sinopsis */}
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sinopsis</h2>
        <p className="text-gray-300">{pelicula.sinopsis}</p>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default DetallePelicula;
