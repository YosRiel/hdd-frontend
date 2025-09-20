import React from "react";
import Navbar from "../components/Navbar";

const DetallePelicula: React.FC = () => {
  return (
  <div style={{ background: "var(--cineplus-black)", color: "var(--cineplus-gray-light)" }} className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Detalle de la Película</h2>
        {/* Aquí iría la información de la película seleccionada */}
      </div>
    </div>
  );
};

export default DetallePelicula;
