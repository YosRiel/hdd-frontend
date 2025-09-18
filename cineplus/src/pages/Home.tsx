// cineplus/src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar arriba */}
      <Navbar />

      {/* Hero principal */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Bienvenido a <span className="text-red-500">Cineplus</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Disfruta de los últimos estrenos, trailers y la mejor experiencia de
          cine online.
        </p>
        <Link
          to="/cartelera"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          🎬 Ver Cartelera
        </Link>
      </section>

      {/* Sección de destacados (opcional) */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">🔥 Estrenos Destacados</h2>
        <p className="text-gray-400">
          Navega por la cartelera y descubre las películas más esperadas del
          momento.
        </p>
      </section>
    </div>
  );
};

export default Home;

