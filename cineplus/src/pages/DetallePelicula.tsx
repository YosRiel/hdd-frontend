import React from "react";
import Navbar from "../components/Navbar";

const DetallePelicula: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Detalle de la Película</h2>
        {/* Aquí iría la información de la película seleccionada */}
      </div>
    </div>
  );
};

export default DetallePelicula;
