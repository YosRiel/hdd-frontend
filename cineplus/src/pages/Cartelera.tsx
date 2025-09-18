import React from "react";
import Navbar from "../components/Navbar";
import { movies } from "../data/dummyMovies";
import { Link } from "react-router-dom";

const Cartelera: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">🎬 Cartelera de Películas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <Link to="/detalle">
                <div className="relative">
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="w-full h-72 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                    {movie.ageRating}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{movie.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{movie.format}</p>
                  <button className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700">
                    Ver detalles
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartelera;

