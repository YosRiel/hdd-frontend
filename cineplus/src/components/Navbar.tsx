import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
    <span className="font-bold text-xl">CinePlus</span>
    <div>
      <Link to="/" className="mx-2 hover:underline">Inicio</Link>
      <Link to="/cartelera" className="mx-2 hover:underline">Cartelera</Link>
      <Link to="/carrito" className="mx-2 hover:underline">Carrito</Link>
      <Link to="/combos" className="mx-2 hover:underline">Combos</Link>
      <Link to="/atencion" className="mx-2 hover:underline">Atención</Link>
      <Link to="/perfil" className="mx-2 hover:underline">Perfil</Link>
    </div>
  </nav>
);

export default Navbar;
