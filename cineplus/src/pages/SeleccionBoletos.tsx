import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import { cines } from "../data/cines";
import type { Cine } from "../data/cines";
import { peliculas, type Pelicula } from "../data/peliculas";

const SeleccionBoletos: React.FC = () => {
  const [cineSeleccionado, setCineSeleccionado] = useState<Cine | null>(null);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState<Pelicula | null>(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const peliculaId = searchParams.get("pelicula");
    if (peliculaId) {
      const peli = peliculas.find((p) => p.id === peliculaId);
      if (peli) setPeliculaSeleccionada(peli);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-100">
  <Navbar variant="boletos" />
  <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Selecciona tu Cine</h2>
        {!peliculaSeleccionada ? (
          <div className="text-center text-red-600 font-semibold">No se ha seleccionado ninguna película.</div>
        ) : !cineSeleccionado ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cines.map((cine) => (
              <div
                key={cine.id}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
                onClick={() => setCineSeleccionado(cine)}
              >
                <h3 className="text-lg font-semibold mb-2">{cine.nombre}</h3>
                <p className="text-sm text-gray-600">{cine.ciudad}</p>
                <p className="text-xs text-gray-400">{cine.direccion}</p>
              </div>
            ))}
          </div>
        ) : !horarioSeleccionado ? (
          <div>
            <h3 className="text-xl font-semibold mb-4">{peliculaSeleccionada.titulo}</h3>
            <h4 className="text-lg font-semibold mb-2">Selecciona un horario</h4>
            <div className="flex flex-wrap gap-4">
              {peliculaSeleccionada.horarios?.map((horario) => (
                <button
                  key={horario}
                  className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  onClick={() => setHorarioSeleccionado(horario)}
                >
                  {horario}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-4">Película: {peliculaSeleccionada.titulo}</h3>
            <h4 className="text-lg font-semibold mb-2">Horario seleccionado: {horarioSeleccionado}</h4>
            {/* Aquí irá el siguiente paso del flujo */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SeleccionBoletos;
