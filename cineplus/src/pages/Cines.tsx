import React from "react";
import Navbar from "../components/Navbar";

const Cines: React.FC = () => {
  return (
  <div style={{ background: "var(--cineplus-black)", color: "var(--cineplus-gray-light)" }} className="min-h-screen">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Cartelera de Cines</h2>
        {/* Aquí iría el listado de cines */}
      </div>
    </div>
  );
};

export default Cines;