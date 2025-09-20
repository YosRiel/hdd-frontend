// Generador de cines aleatorios
export interface Cine {
  id: string;
  nombre: string;
  ciudad: string;
  direccion: string;
  localidad: string; // Nueva característica para filtrar por localidad/ciudad
}

export const cines: Cine[] = [
  {
    id: '1',
    nombre: 'Cineplanet',
    ciudad: 'Lima',
    direccion: 'Av. Universitaria 1234, Comas',
    localidad: 'Mall Plaza Comas',
  },
  {
    id: '2',
    nombre: 'Cinemark',
    ciudad: 'Lima',
    direccion: 'Av. Alfredo Mendiola 3698, Independencia',
    localidad: 'Plaza Norte Independencia',
  },
  {
    id: '3',
    nombre: 'Cinepolis',
    ciudad: 'Arequipa',
    direccion: 'Av. Ejército 1000, Cayma',
    localidad: 'Mall Plaza Arequipa',
  },
  {
    id: '4',
    nombre: 'UVK',
    ciudad: 'Trujillo',
    direccion: 'Av. América Sur 1111, Trujillo',
    localidad: 'Real Plaza Trujillo',
  },
];
