
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Navbar básico */}
      <nav className="bg-gray-800 p-4 flex gap-4">
        <Link to="/" className="text-white hover:text-yellow-400">Inicio</Link>
        <Link to="/cartelera" className="text-white hover:text-yellow-400">Cartelera</Link>
        <Link to="/boletos" className="text-white hover:text-yellow-400">Boletos</Link>
        <Link to="/carrito" className="text-white hover:text-yellow-400">Carrito</Link>
        <Link to="/pago" className="text-white hover:text-yellow-400">Pago</Link>
        <Link to="/perfil" className="text-white hover:text-yellow-400">Perfil</Link>
        <Link to="/combos" className="text-white hover:text-yellow-400">Combos</Link>
        <Link to="/soporte" className="text-white hover:text-yellow-400">Soporte</Link>
      </nav>
      {/* Página de inicio / Landing Page */}
      <h1 className="mt-8 text-3xl font-bold">Bienvenido a CinePlus</h1>
    </div>
  );
};

export default LandingPage;
