import React from "react";
import Navbar from "../components/Navbar";

const PerfilUsuario: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
        {/* Aquí iría la información del usuario */}
      </div>
    </div>
  );
};

export default PerfilUsuario;
