import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MovieBillboard from './components/MovieBillboard';
import TicketSelection from './components/TicketSelection';
import ShoppingCart from './components/ShoppingCart';
import PaymentGateway from './components/PaymentGateway';
import UserProfile from './components/UserProfile';
import CombosAndSnacks from './components/CombosAndSnacks';
import CustomerSupport from './components/CustomerSupport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cartelera" element={<MovieBillboard />} />
        <Route path="/boletos" element={<TicketSelection />} />
        <Route path="/carrito" element={<ShoppingCart />} />
        <Route path="/pago" element={<PaymentGateway />} />
        <Route path="/perfil" element={<UserProfile />} />
        <Route path="/combos" element={<CombosAndSnacks />} />
        <Route path="/soporte" element={<CustomerSupport />} />
      </Routes>
    </Router>
  );
}

export default App;
