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