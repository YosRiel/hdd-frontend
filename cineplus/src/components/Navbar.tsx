import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Menu, X } from "react-feather";

const Navbar: React.FC = () => {
  const [navStyle, setNavStyle] = useState("transparent");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const carouselHeight = 600;
      if (scrollY < 50) {
        setNavStyle("transparent");
      } else if (scrollY < carouselHeight) {
        setNavStyle("white");
      } else {
        setNavStyle("black");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    navStyle === "transparent"
      ? "bg-transparent text-white border-b border-white"
      : navStyle === "white"
      ? "bg-white text-black shadow-md border-b border-gray-200"
      : "bg-black text-white shadow-md border-b border-white";

  const menuItems = [
    { to: "/cartelera", label: "Películas" },
    { to: "/cines", label: "Cines" },
    { to: "/promociones", label: "Promociones" },
    { to: "/combos", label: "Dulcería" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${navBg}`}
      style={{ minHeight: 64 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <img
            src={
              navStyle === "white"
                ? "/logo-black.png"
                : "/logo-white.png"
            }
            alt="cineplus"
            className="h-20 w-20 object-contain transition-all duration-300"
          />
          <span className="tracking-tight">CinePlus</span>
        </Link>

        {/* Menú central - oculto en móviles */}
        <ul className="flex-1 hidden md:flex justify-center gap-8 font-semibold text-base">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-blue-500 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Iconos a la derecha */}
        <div className="flex items-center gap-4">
          <Link
            to="/perfil"
            className="rounded-full border-2 border-white/60 p-1 hover:bg-white/10 transition"
            aria-label="Usuario"
          >
            <User size={24} />
          </Link>
          {/* Botón menú hamburguesa solo en móviles */}
          <button
            className="md:hidden rounded-full border-2 border-white/60 p-1 ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Menú lateral móvil */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Fondo oscuro, detrás del menú */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
            tabIndex={-1}
            style={{ zIndex: 10 }}
          />
          {/* Menú lateral, por encima */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg flex flex-col z-20">
            <button
              className="self-end m-4"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-6 px-8 mt-8 text-lg font-semibold">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:text-blue-500 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/perfil"
                className="hover:text-blue-500 transition"
                onClick={() => setMobileOpen(false)}
              >
                Perfil
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;