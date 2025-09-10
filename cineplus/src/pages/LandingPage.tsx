import React from "react";
import Navbar from "../components/Navbar";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a CinePlus</h1>
        <p className="text-lg text-gray-700">Tu cine favorito online</p>
      </div>
    </div>
  );
};

export default LandingPage;
