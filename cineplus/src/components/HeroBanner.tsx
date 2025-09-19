// cineplus/src/components/HeroBanner.tsx
import React from "react";
import Slider from "react-slick";
import { peliculas } from "../data/peliculas";
import { useNavigate } from "react-router-dom";

const HeroBanner: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const navigate = useNavigate();

  return (
    <section className="w-full max-h-[500px] overflow-hidden">
      <Slider {...settings}>
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="relative w-full">
            <img
              src={pelicula.imagen}
              alt={pelicula.titulo}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">{pelicula.titulo}</h2>
              <p className="text-white text-lg mb-4 drop-shadow">{pelicula.sinopsis}</p>
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded shadow-lg w-fit"
                onClick={() => navigate("/boletos?pelicula=" + pelicula.id)}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroBanner;
