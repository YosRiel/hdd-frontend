// cineplus/src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => (
  <footer className="footer-cineplus w-full bg-cineplus-black text-cineplus-white mt-8 pt-8 pb-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <img src="/public/LOGO_SET1.png" alt="CinePlus Logo" className="h-8 w-8" />
        <span className="font-bold text-lg">
          <span className="text-cineplus-white">Cine</span><span className="text-cineplus-red">Plus</span>
        </span>
      </div>
      <div className="flex gap-6 flex-wrap justify-center">
        <a href="#" className="hover:text-cineplus-red transition">Cartelera</a>
        <a href="#" className="hover:text-cineplus-red transition">Dulcería</a>
        <a href="#" className="hover:text-cineplus-red transition">Promociones</a>
        <a href="#" className="hover:text-cineplus-red transition">Atención al Cliente</a>
      </div>
      <div className="flex gap-4">
        <a href="#" title="Facebook" className="footer-icon hover:text-cineplus-red transition">
          <svg width="22" height="22" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="#" title="Instagram" className="footer-icon hover:text-cineplus-red transition">
          <svg width="22" height="22" fill="currentColor"><circle cx="11" cy="11" r="7"/><rect x="16" y="6" width="2" height="2" rx="1"/></svg>
        </a>
      </div>
    </div>
    <div className="text-center text-xs text-cineplus-white/70 mt-6">
      <span>
        <span className="text-cineplus-white">Cine</span><span className="text-cineplus-red">Plus</span> © {new Date().getFullYear()} | Todos los derechos reservados
      </span>
      <span className="mx-2">|</span>
      <a href="#" className="underline hover:text-cineplus-red transition">Términos y condiciones</a>
      <span className="mx-1">|</span>
      <a href="#" className="underline hover:text-cineplus-red transition">Política de privacidad</a>
    </div>
  </footer>
);

export default Footer;
