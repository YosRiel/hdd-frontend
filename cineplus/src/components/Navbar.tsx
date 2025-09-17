// cineplus/src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
    <span className="font-extrabold text-2xl tracking-wide text-red-600">CinePlus</span>
    <div className="space-x-6 text-sm font-medium">
      <Link to="/" className="hover:text-red-500 transition">Inicio</Link>
      <Link to="/cartelera" className="hover:text-red-500 transition">Cartelera</Link>
      <Link to="/carrito" className="hover:text-red-500 transition">Carrito</Link>
      <Link to="/combos" className="hover:text-red-500 transition">Combos</Link>
      <Link to="/atencion" className="hover:text-red-500 transition">Atención</Link>
      <Link to="/perfil" className="hover:text-red-500 transition">Perfil</Link>
    </div>
  </nav>
);

export default Navbar;

