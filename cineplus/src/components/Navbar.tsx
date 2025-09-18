import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wider hover:scale-110 transition-transform duration-300">
        CinePlus 🎬
      </div>

      {/* Menú en pantallas grandes con Link */}
      <div className="hidden md:flex space-x-6 text-lg font-medium">
        <Link to="/" className="hover:text-yellow-300 transition duration-300">Inicio</Link>
        <Link to="/cartelera" className="hover:text-yellow-300 transition duration-300">Cartelera</Link>
        <Link to="/carrito" className="hover:text-yellow-300 transition duration-300">Carrito</Link>
        <Link to="/combos" className="hover:text-yellow-300 transition duration-300">Combos</Link>
        <Link to="/atencion" className="hover:text-yellow-300 transition duration-300">Atención</Link>
        <Link to="/perfil" className="hover:text-yellow-300 transition duration-300">Perfil</Link>
      </div>

      {/* Botón menú móvil */}
      <button
        className="md:hidden text-3xl hover:scale-110 transition-transform duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Menú móvil con Links */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white z-50 flex flex-col items-center justify-center gap-6 text-2xl font-semibold animate-slide-in">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Inicio</Link>
          <Link to="/cartelera" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Cartelera</Link>
          <Link to="/carrito" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Carrito</Link>
          <Link to="/combos" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Combos</Link>
          <Link to="/atencion" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Atención</Link>
          <Link to="/perfil" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Perfil</Link>
        </div>
      )}

      {/* Animación del menú */}
      <style>{`
        @keyframes slide-in {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
