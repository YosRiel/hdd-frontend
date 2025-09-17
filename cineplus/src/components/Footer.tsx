// cineplus/src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-black text-gray-400 text-sm mt-8 py-6 text-center">
    <p>&copy; {new Date().getFullYear()} CinePlus. Todos los derechos reservados.</p>
    <p className="mt-2">Síguenos en redes sociales</p>
  </footer>
);

export default Footer;
