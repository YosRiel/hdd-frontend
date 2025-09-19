import React from "react";
import Navbar from "../components/Navbar";

const Promociones: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Cartelera de Promociones</h2>
        {/* Aquí iría el listado de promociones */}
      </div>
    </div>
  );
};

export default Promociones;