// cineplus/src/pages/Cartelera.tsx
import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/dummyMovies";
import Navbar from "../components/Navbar";
import { peliculas } from "../data/peliculas";

const Cartelera: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-[#363434] text-gray-800">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#ADA6A6] mb-8 text-center">
          🎬 Cartelera de Estrenos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/detalle/${movie.id}`}>
              <div className="bg-[#D9D7D7] rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-2 border-black">

                <div className="relative">
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="w-full h-72 object-cover rounded-t-lg"
                  />
                  <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                    {movie.ageRating}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-black mt-1">{movie.format}</p>
                  <button className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700">
                    Ver detalles
                  </button>
                </div>
              </div>
            </Link>
=======
    <div className="min-h-screen bg-cineplus-bg text-white">
      <Navbar />
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Cartelera Completa</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {peliculas.map((p) => (
            <div
              key={p.id}
              className="relative bg-cineplus-bg-alt rounded shadow overflow-hidden flex flex-col group h-[320px]"
            >
              <img
                src={p.imagen}
                alt={p.titulo}
                className="object-cover w-full h-56"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 flex flex-col justify-end">
                <span className="text-cineplus-white font-bold text-lg drop-shadow mb-1">
                  {p.titulo}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                <button
                  className="btn-cineplus"
                  onClick={() =>
                    (window.location.href = `/boletos?pelicula=${p.id}`)
                  }
                >
                  Comprar
                </button>
                <button
                  className="bg-cineplus-white text-cineplus-black font-bold px-4 py-2 rounded hover:bg-cineplus-gray transition"
                  onClick={() =>
                    (window.location.href = `/detalle?pelicula=${p.id}`)
                  }
                >
                  Ver más
                </button>
              </div>
            </div>
>>>>>>> Stashed changes
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartelera;

