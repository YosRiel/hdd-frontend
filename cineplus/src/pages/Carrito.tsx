import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

const Carrito: React.FC = () => {
  const [carrito, setCarrito] = useState<Producto[]>([]);

  // Cargar el carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Guardar el carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Eliminar un producto del carrito
  const eliminarProducto = (id: number) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== id);
    setCarrito(nuevoCarrito);
  };

  // Calcular total
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul>
              {carrito.map((p) => (
                <li
                  key={p.id}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div>
                    {p.nombre} x {p.cantidad} - S/.{p.precio * p.cantidad}
                  </div>
                  <button
                    onClick={() => eliminarProducto(p.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mt-4">Total: S/.{total}</h3>
            <button
              onClick={() => alert("Procesando pago...")}
              className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
            >
              Pagar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
