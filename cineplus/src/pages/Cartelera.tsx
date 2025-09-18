// cineplus/src/pages/Cartelera.tsx
import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/dummyMovies";
import Navbar from "../components/Navbar";

const Cartelera: React.FC = () => {
  return (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartelera;
