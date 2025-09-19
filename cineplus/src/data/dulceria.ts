// src/data/dulceria.ts
export interface ProductoDulceria {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
  categoria: "Canchita" | "Bebida" | "Combo" | "Otro";
}

export const productosDulceria: ProductoDulceria[] = [
  {
    id: "1",
    nombre: "Cancha Grande",
    descripcion: "Canchita clásica con mantequilla, tamaño grande.",
    precio: "S/ 15.00",
    imagen: "https://i.imgur.com/5YQp4Qf.png", // puedes cambiarlo por tus imágenes
    categoria: "Canchita",
  },
  {
    id: "2",
    nombre: "Coca Cola 1L",
    descripcion: "Bebida gaseosa fría, ideal para compartir.",
    precio: "S/ 10.00",
    imagen: "https://i.imgur.com/x9X6H3M.png",
    categoria: "Bebida",
  },
  {
    id: "3",
    nombre: "Combo Pareja",
    descripcion: "1 cancha grande + 2 gaseosas medianas.",
    precio: "S/ 25.00",
    imagen: "https://i.imgur.com/Z3dV4ZL.png",
    categoria: "Combo",
  },
  {
    id: "4",
    nombre: "Nachos con queso",
    descripcion: "Nachos crujientes acompañados de queso fundido.",
    precio: "S/ 12.00",
    imagen: "https://i.imgur.com/9cQmD7x.png",
    categoria: "Otro",
  },
];
