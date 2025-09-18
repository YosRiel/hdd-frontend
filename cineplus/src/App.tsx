// cineplus/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import DetallePelicula from "./pages/DetallePelicula";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/detalle/:id" element={<DetallePelicula />} />
      </Routes>
    </Router>
  );
}

export default App;
