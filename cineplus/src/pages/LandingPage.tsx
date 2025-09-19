// cineplus/src/pages/LandingPage.tsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <HeroBanner />
      <MovieCarousel />
      <Footer />
=======
  <div className="bg-cineplus-bg min-h-screen flex flex-col">
  <Navbar heroHeight={500} />
  <HeroBanner />
      {/* Formulario de selección estilo Cineplanet */}
      <section className="bg-cineplus-bg-alt shadow max-w-5xl mx-auto mt-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-cineplus-black/40">
          {/* Por película */}
          <div className="flex flex-col items-start px-6 py-4">
            <label className="font-bold text-cineplus-white text-base flex items-center gap-2">
              Por película
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </label>
            <span className="text-cineplus-white/70 text-sm mb-1">Qué quieres ver</span>
            <select className="w-full p-2 border-cineplus-red border rounded mt-1 bg-cineplus-black text-cineplus-white" value={peliculaSel} onChange={e => setPeliculaSel(e.target.value)}>
              {peliculas.map((p) => (
                <option key={p.id} value={p.id}>{p.titulo}</option>
              ))}
            </select>
          </div>
          {/* Por ciudad */}
          <div className="flex flex-col items-start px-6 py-4">
            <label className="font-bold text-cineplus-white text-base flex items-center gap-2">
              Por ciudad
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </label>
            <span className="text-cineplus-white/70 text-sm mb-1">Dónde estás</span>
            <select className="w-full p-2 border-cineplus-red border rounded mt-1 bg-cineplus-black text-cineplus-white" value={ciudadSel} onChange={e => setCiudadSel(e.target.value)}>
              {ciudades.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          {/* Por cine */}
          <div className="flex flex-col items-start px-6 py-4">
            <label className="font-bold text-cineplus-white text-base flex items-center gap-2">
              Por cine
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </label>
            <span className="text-cineplus-white/70 text-sm mb-1">Elige tu CinePlus</span>
            <select className="w-full p-2 border-cineplus-red border rounded mt-1 bg-cineplus-black text-cineplus-white" value={cineSel} onChange={e => setCineSel(e.target.value)}>
              <option value="">Selecciona cine</option>
              {cinesFiltrados.map((c) => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>
          </div>
          {/* Por fecha y botón */}
          <div className="flex flex-col items-start px-6 py-4">
            <label className="font-bold text-cineplus-white text-base flex items-center gap-2">
              Por fecha
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
            </label>
            <span className="text-cineplus-white/70 text-sm mb-1">Elige un día</span>
            <div className="flex items-center gap-2 w-full mt-1">
              <input type="date" className="p-2 border-cineplus-red border rounded w-full bg-cineplus-black text-cineplus-white" value={fechaSel} onChange={e => setFechaSel(e.target.value)} />
              <button className="ml-2 flex items-center gap-1 btn-cineplus text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Filtrar
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Tabs y grid de películas */}
      <section className="max-w-6xl mx-auto mt-12">
        <h2 className="text-4xl font-extrabold text-cineplus-white mb-2">Películas</h2>
        <div className="flex gap-8 border-b border-cineplus-red mb-6">
          {['En cartelera', 'Preventa', 'Próximos estrenos'].map((tab, idx) => (
            <button
              key={tab}
              className={`pb-2 px-1 text-lg font-semibold transition border-b-4 ${idx === activeTab ? 'border-cineplus-red text-cineplus-red' : 'border-transparent text-cineplus-white/60 hover:text-cineplus-red'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getPeliculasByTab().slice(0, 6).map((p, i) => (
            <div
              key={p.id}
              className={`relative bg-cineplus-bg-alt rounded shadow overflow-hidden flex flex-col group ${i === 0 ? 'md:row-span-2 md:col-span-2 md:h-[500px]' : 'h-[320px]'}`}
              style={i === 0 ? { gridRow: 'span 2', gridColumn: 'span 2' } : {}}
            >
              <img src={p.imagen} alt={p.titulo} className={`object-cover w-full ${i === 0 ? 'h-full' : 'h-56'}`} />
              {/* Etiqueta de estreno */}
              {(activeTab === 0 && i < 2) ? (
                <span className="absolute top-3 left-0 bg-cineplus-red text-white px-3 py-1 text-xs font-bold rounded-r-full">Estreno</span>
              ) : null}
              {(activeTab === 1 && i < 2) ? (
                <span className="absolute top-3 left-0 bg-cineplus-red text-white px-3 py-1 text-xs font-bold rounded-r-full">Preventa</span>
              ) : null}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 flex flex-col justify-end">
                <span className="text-cineplus-white font-bold text-lg drop-shadow mb-1">{p.titulo}</span>
              </div>
              {/* Opciones al hacer hover en cartelera */}
              {activeTab === 0 && (
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <button className="btn-cineplus" onClick={() => window.location.href = `/boletos?pelicula=${p.id}`}>Comprar</button>
                  <button className="bg-cineplus-white text-cineplus-black font-bold px-4 py-2 rounded hover:bg-cineplus-gray transition" onClick={() => window.location.href = `/detalle?pelicula=${p.id}`}>Ver más</button>
                </div>
              )}
            </div>
          ))}
          {/* Botón ver más */}
          <div className="flex flex-col justify-center items-center bg-cineplus-bg-alt rounded shadow min-h-[320px]">
            <button className="btn-cineplus text-lg px-6 py-4" onClick={() => window.location.href = '/cartelera'}>Ver más películas</button>
          </div>
        </div>
      </section>
>>>>>>> Stashed changes
    </div>
  );
};

export default LandingPage;
