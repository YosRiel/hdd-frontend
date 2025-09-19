// cineplus/src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiSearch, FiHelpCircle } from "react-icons/fi";

const navLinks = [
  { label: "Películas", to: "/cartelera" },
  { label: "Cines", to: "/" },
  { label: "Promociones", to: "/promociones" },
  { label: "Socio", to: "/perfil" },
  { label: "Dulcería", to: "/dulceria" },
  { label: "Corporativo", to: "/" },
  { label: "Blog", to: "/" },
];


interface NavbarProps {
  heroHeight?: number;
}

const Navbar: React.FC<NavbarProps> = ({ heroHeight = 500 }) => {
  const [atTop, setAtTop] = useState(true);
  const [logoHover, setLogoHover] = useState(false);
  const [beyondHero, setBeyondHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10);
      setBeyondHero(window.scrollY > heroHeight - 60); // 60px: navbar height approx
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight]);

  return (
    <header
      className={`w-full z-100 fixed left-0 top-0 transition-all duration-300
        ${beyondHero
          ? "bg-cineplus-black border-b border-cineplus-red navbar-shadow-dark"
          : atTop
            ? "bg-transparent color-cineplus-black shadow-none"
            : "bg-cineplus-black border-cineplus-red navbar-shadow-dark"}
      `}
      style={beyondHero ? { background: "#000000", color: "#ffffff", backdropFilter: "none" } : atTop ? { background: "transparent", color: "#000000", backdropFilter: "none" } : { background: "transparent", color: "#000000", backdropFilter: "blur(0px)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer select-none"
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <img
              src={beyondHero || logoHover ? "/public/LOGO_SET2.png" : "/public/LOGO_SET1.png"}
              alt="CinePlus Logo"
              className="h-9 w-9 transition"
            />
            <span className="font-extrabold text-xl tracking-wide">
              <span className="text-cineplus-white">Cine</span><span className="text-cineplus-red">Plus</span>
            </span>
          </Link>
        {/* Links */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <Link
                  to={link.to}
                  style={beyondHero ? {color: "#ffffff", backdropFilter: "none"} : atTop ? { background: "transparent", color: "#000000"} : { background: "transparent", color: "#000000"}}
                  className="transition-all duration-300 hover:text-cineplus-red group-hover:text-cineplus-red peer"
                >
                  <span className="relative inline-block">
                    {link.label}
                    {/* Subrayado animado solo en hover */}
                    <span className="block absolute left-0 -bottom-1 w-full h-1 rounded bg-cineplus-red opacity-0 peer-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Iconos */}
        <div className="flex items-center gap-5">
          <Link to="/perfil" title="Usuario" className="text-cineplus-white hover:text-cineplus-red transition-all duration-300">
            <FiUser size={26} />
          </Link>
          <Link to="/" title="Buscar" className="text-cineplus-white hover:text-cineplus-red transition-all duration-300">
            <FiSearch size={26} />
          </Link>
          <Link to="/atencion" title="Ayuda" className="relative text-cineplus-white hover:text-cineplus-red transition-all duration-300">
            <FiHelpCircle size={26} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

