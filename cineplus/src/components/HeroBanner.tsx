// cineplus/src/components/HeroBanner.tsx
import React from "react";
import Slider from "react-slick";

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
      id: 3,
      img: "https://static.cinepolis.com/img/front/11/202591012140659-prin.jpg",
      alt: "200% Lobo",
    },
        {
      id: 3,
      img: "https://static.cinepolis.com/img/front/11/2025822105333944-prin.jpg",
      alt: "Otro viernes de locos",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="w-full max-h-[500px] overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="w-full">
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroBanner;
