import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cartelera from './Cartelera';
import Promociones from './Promociones';
import Confiteria from './Confiteria';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="40" height="40" className="d-inline-block align-top me-2" />
            CINE
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cartelera">Cartelera</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/promociones">Promociones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/confiteria">Confitería</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Cartelera />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/confiteria" element={<Confiteria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
