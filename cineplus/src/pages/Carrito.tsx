import React from "react";
import Navbar from "../components/Navbar";

const Carrito: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
        {/* Aquí iría el contenido del carrito */}
      </div>
    </div>
  );
};

export default Carrito;
