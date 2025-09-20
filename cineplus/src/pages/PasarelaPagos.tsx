import React from "react";
import Navbar from "../components/Navbar";

const PasarelaPagos: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Pasarela de Pagos</h2>
        {/* Aquí iría la interfaz de pago */}
      </div>
    </div>
  );
};

export default PasarelaPagos;
