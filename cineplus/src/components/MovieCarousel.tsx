import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "200% LOBO",
    img: "https://sacnkprodpecms.blob.core.windows.net/content/posters/HO00008117.jpg",
    ageRating: "TP",
    format: "2D",
  },
  {
    id: 2,
    title: "PUTIN",
    img: "https://sacnkprodpecms.blob.core.windows.net/content/posters/HO00008182.jpg",
    ageRating: "14",
    format: "2D",
  },
  {
    id: 3,
    title: "TOY STORY (1995)",
    img: "https://sacnkprodpecms.blob.core.windows.net/content/posters/HO00008232.jpg",
    ageRating: "TP",
    format: "2D",
  },
  {
    id: 4,
    title: "DEMON SLAYER CASTILLO INFINITO",
    img: "https://sacnkprodpecms.blob.core.windows.net/content/posters/HO00007806.jpg",
    ageRating: "14",
    format: "2D - D-BOX - SALA XD",
  },
  {
    id: 5,
    title: "EL CONJURO 4 ÚLTIMOS RITOS",
    img: "https://sacnkprodpecms.blob.core.windows.net/content/posters/HO00008089.jpg",
    ageRating: "16",
    format: "2D",
  },
  {
    id: 6,
    title: "MISTURA",
    img: "https://sacnkprodpecms.blob.core.windows.net/content/posters/HO00008007.jpg",
    ageRating: "14",
    format: "2D",
  },
];

const MovieCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-black px-2 md:px-6 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 px-2 md:px-0">
        <h2 className="text-white text-2xl font-bold mb-4 md:mb-0">PELÍCULAS EN CARTELERA</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-bold w-full md:w-auto">
          📍 RECOMENDADO
        </button>
      </div>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="px-1">
            <Link to="/detalle" className="block w-full max-w-xs mx-auto">
              <div className="relative group">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-[280px] object-cover rounded-lg"
                  style={{ maxWidth: 220 }}
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                  {movie.ageRating}
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-white font-bold text-sm mb-2">{movie.title}</h3>
                <div className="text-gray-400 text-xs mb-2">{movie.format}</div>
                <button className="bg-gray-700 text-white px-3 py-1 rounded text-xs">
                  Estreno
                </button>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MovieCarousel;
