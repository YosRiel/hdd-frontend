// Generador de cines aleatorios
export interface Cine {
  id: string;
  nombre: string;
  ciudad: string;
  direccion: string;
}

const nombresCines = ['CinePlus Central', 'CinePlus Norte', 'CinePlus Sur', 'CinePlus Este', 'CinePlus Oeste'];
const ciudades = ['Lima', 'Arequipa', 'Cusco', 'Trujillo', 'Piura'];

function generarCinesAleatorios(cantidad: number): Cine[] {
  const cines: Cine[] = [];
  for (let i = 0; i < cantidad; i++) {
    cines.push({
      id: (i + 1).toString(),
      nombre: nombresCines[Math.floor(Math.random() * nombresCines.length)],
      ciudad: ciudades[Math.floor(Math.random() * ciudades.length)],
      direccion: `Av. Principal ${i + 1}`,
    });
  }
  return cines;
}

export const cines: Cine[] = generarCinesAleatorios(5);
