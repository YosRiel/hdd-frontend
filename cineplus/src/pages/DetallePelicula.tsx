// cineplus/src/pages/DetallePelicula.tsx
import React from "react";
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
      </div>
    );
  }

  return (
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
      </div>
    </div>
  );
};

export default DetallePelicula;
