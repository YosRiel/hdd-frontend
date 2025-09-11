import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Cartelera from "./pages/Cartelera";
import DetallePelicula from "./pages/DetallePelicula";
import SeleccionBoletos from "./pages/SeleccionBoletos";
import Carrito from "./pages/Carrito";
import PasarelaPagos from "./pages/PasarelaPagos";
import PerfilUsuario from "./pages/PerfilUsuario";
import CombosDulceria from "./pages/CombosDulceria";
import AtencionCliente from "./pages/AtencionCliente";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/detalle" element={<DetallePelicula />} />
        <Route path="/boletos" element={<SeleccionBoletos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pago" element={<PasarelaPagos />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
        <Route path="/combos" element={<CombosDulceria />} />
        <Route path="/atencion" element={<AtencionCliente />} />
      </Routes>
    </Router>
  );
};

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

