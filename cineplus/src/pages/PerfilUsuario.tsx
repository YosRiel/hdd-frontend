import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const PerfilUsuario: React.FC = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [codigoCVV, setCodigoCVV] = useState("");
  const [titularTarjeta, setTitularTarjeta] = useState("");
  const [telefono, setTelefono] = useState("");
  interface Usuario {
    correo: string;
    contrasena: string;
    nombreCompleto: string;
    numeroTarjeta: string;
    codigoCVV: string;
    titularTarjeta: string;
    telefono: string;
  }
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [modoRegistro, setModoRegistro] = useState(false);
  const [historial, setHistorial] = useState<string[]>([]);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }

    const historialGuardado = localStorage.getItem("historial");
    if (historialGuardado) {
      setHistorial(JSON.parse(historialGuardado));
    }
  }, []);

  const manejarLogin = () => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (!usuarioGuardado) {
      alert("No hay usuarios registrados. Crea una cuenta primero.");
      return;
    }

    const usuarioData = JSON.parse(usuarioGuardado);
    if (usuarioData.correo === correo && usuarioData.contrasena === contrasena) {
      setUsuario(usuarioData);
      alert("Inicio de sesión exitoso");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  const manejarRegistro = () => {
    if (!correo || !contrasena || !nombreCompleto || !numeroTarjeta || !codigoCVV || !titularTarjeta || !telefono) {
      alert("Por favor completa todos los campos");
      return;
    }

    const nuevoUsuario = { correo, contrasena, nombreCompleto, numeroTarjeta, codigoCVV, titularTarjeta, telefono };
    localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
    setUsuario(nuevoUsuario);
    alert("Cuenta creada exitosamente");
  };

  const manejarLogout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  return (
  <div style={{ background: "var(--cineplus-black)", color: "var(--cineplus-gray-light)" }} className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white text-black p-8 rounded-xl w-full max-w-md shadow-lg">
          {usuario ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">
                Bienvenido, {usuario.nombreCompleto}
              </h2>

              <div className="mb-4">
                <p><strong>Correo:</strong> {usuario.correo}</p>
                <p><strong>Teléfono:</strong> {usuario.telefono}</p>
                <p><strong>Tarjeta:</strong> **** **** **** {usuario.numeroTarjeta.slice(-4)}</p>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-2">Historial de Compras</h3>
              {historial.length > 0 ? (
                <ul className="list-disc list-inside">
                  {historial.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Aún no tienes ningún historial.</p>
              )}

              <button
                onClick={manejarLogout}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg mt-4"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">
                {modoRegistro ? "Crear Cuenta" : "Iniciar Sesión"}
              </h2>
              {modoRegistro && (
                <>
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    value={nombreCompleto}
                    onChange={(e) => setNombreCompleto(e.target.value)}
                    className="w-full p-2 mb-2 rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Número de Tarjeta"
                    value={numeroTarjeta}
                    onChange={(e) => setNumeroTarjeta(e.target.value)}
                    className="w-full p-2 mb-2 rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Código CVV"
                    value={codigoCVV}
                    onChange={(e) => setCodigoCVV(e.target.value)}
                    className="w-full p-2 mb-2 rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Titular de la Tarjeta"
                    value={titularTarjeta}
                    onChange={(e) => setTitularTarjeta(e.target.value)}
                    className="w-full p-2 mb-2 rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Número de Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="w-full p-2 mb-2 rounded-lg border border-gray-300"
                  />
                </>
              )}
              <input
                type="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="w-full p-2 mb-2 rounded-lg border border-gray-300"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                className="w-full p-2 mb-4 rounded-lg border border-gray-300"
              />
              <button
                onClick={modoRegistro ? manejarRegistro : manejarLogin}
                className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg mb-2"
              >
                {modoRegistro ? "Crear Cuenta" : "Iniciar Sesión"}
              </button>
              <p
                className="text-sm text-center mt-2 cursor-pointer hover:underline"
                onClick={() => setModoRegistro(!modoRegistro)}
              >
                {modoRegistro
                  ? "¿Ya tienes cuenta? Inicia sesión"
                  : "¿No tienes cuenta? Crea una aquí"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
