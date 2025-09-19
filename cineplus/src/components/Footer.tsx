import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-[#010202] text-white pt-12 pb-0 mt-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Columna 1 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Nosotros</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Conócenos</a></li>
            <li><a href="#" className="hover:underline">Trabaja con nosotros</a></li>
            <li><a href="#" className="hover:underline">Ventas Corporativas</a></li>
            <li><a href="#" className="hover:underline">Memoria de Gestión de Sostenibilidad 2024</a></li>
          </ul>
          <img
            src="https://cdn.www.gob.pe/uploads/document/file/5269642/huella-carbono-peru-4-estrellas.png"
            alt="Huella de Carbono"
            className="mt-4 w-32"
          />
        </div>
        {/* Columna 2 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Atención al cliente</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Centro de Ayuda</a></li>
            <li><a href="#" className="hover:underline">Ver mi boleta electrónica</a></li>
            <li><a href="#" className="hover:underline">Ver lista de productos permitidos</a></li>
          </ul>
          <div className="mt-4 flex flex-col items-start gap-2">
            <a href="#" className="border border-white rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-white/10">
              <span className="material-icons">mail</span>
              Atención de Consultas o Incidencias por Contáctanos.
            </a>
            <img
              src="https://www.indecopi.gob.pe/documents/20182/0/libro_reclamaciones.png"
              alt="Libro de Reclamaciones"
              className="w-32"
            />
          </div>
        </div>
        {/* Columna 3 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Políticas y condiciones</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Política de SST</a></li>
            <li><a href="#" className="hover:underline">Política de Sostenibilidad</a></li>
            <li><a href="#" className="hover:underline">Política de Diversidad e Inclusión</a></li>
            <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
            <li><a href="#" className="hover:underline">Condiciones de uso y seguridad</a></li>
            <li><a href="#" className="hover:underline">Reglas de Convivencia</a></li>
            <li><a href="#" className="hover:underline">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>
    </div>
    {/* Línea inferior */}
    <div className="border-t-4 border-pink-500 mt-8"></div>
    <div className="bg-white text-[#122241] text-sm py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          Cineplex S.A. | RUC 20429683581<br />
          Todos los derechos reservados 2025
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1 hover:underline">
            Descarga la app
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M17 17v1a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h1" /><path d="M7 7l10 10" /><path d="M15 7h2a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-2" /></svg>
          </a>
          <span className="hidden md:inline">|</span>
          <span>Síguenos en</span>
          <a href="#" className="mx-1 hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="mx-1 hover:text-blue-400"><i className="fab fa-x-twitter"></i></a>
          <a href="#" className="mx-1 hover:text-pink-600"><i className="fab fa-instagram"></i></a>
          <a href="#" className="mx-1 hover:text-red-600"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
