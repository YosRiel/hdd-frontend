import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Carrito: React.FC<{ onPagoExitoso: (compra: string) => void }> = ({ onPagoExitoso }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [method, setMethod] = useState("tarjeta");
  const [message, setMessage] = useState("");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (cardNumber && expiryDate && cvv) {
      const compra = `Compra realizada con ${method} - ${new Date().toLocaleString()}`;
      onPagoExitoso(compra);
      setMessage("✅ Pago realizado con éxito");
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
    } else {
      setMessage("❌ Completa todos los campos");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Carrito - Pasarela de Pagos</h2>
        <form
          onSubmit={handlePayment}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label>Número de Tarjeta</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label>Fecha de Vencimiento</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label>CVV</label>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label>Método de Pago</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="tarjeta">Tarjeta</option>
              <option value="yape">Yape</option>
              <option value="plin">Plin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Pagar
          </button>
        </form>

        {message && <p className="mt-4 text-center font-bold text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default Carrito;
