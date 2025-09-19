// cineplus/src/components/HeroBanner.tsx
import React from "react";
import Slider from "react-slick";
import { ChevronRight, ChevronLeft } from "react-feather";

const HeroBanner: React.FC = () => {
  const banners = [
    {
      id: 1,
      img: "https://sacnkprodpecms.blob.core.windows.net/content/banners/home/1756939832041-large-BANNER-HOME.webp",
      alt: "Toy Story",
    },
    {
      id: 2,
      img: "https://sacnkprodpecms.blob.core.windows.net/content/banners/home/1757517212915-large-Banner-web.webp",
      alt: "Conjuro 4",
    },
    {
      id: 3,
      img: "https://static.cinepolis.com/img/front/11/20259311338169-prin.jpg",
      alt: "Demon Slayer",
    },
    {
      id: 4,
      img: "https://static.cinepolis.com/img/front/11/202591012140659-prin.jpg",
      alt: "200% Lobo",
    },
    {
      id: 5,
      img: "https://static.cinepolis.com/img/front/11/2025822105333944-prin.jpg",
      alt: "Otro viernes de locos",
    },
  ];

  // Flechas personalizadas
  const NextArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-10"
    >
      <ChevronRight size={28} />
    </button>
  );

  const PrevArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-10"
    >
      <ChevronLeft size={28} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="relative w-full max-h-[600px] overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner) => (
          <figure key={banner.id} className="relative w-full">
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-full h-[600px] object-cover"
            />
          </figure>
        ))}
      </Slider>
    </section>
  );
};

export default HeroBanner;

