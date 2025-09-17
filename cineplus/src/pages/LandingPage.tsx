// cineplus/src/pages/LandingPage.tsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieCarousel from "../components/MovieCarousel";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <HeroBanner />
      <MovieCarousel />
      <Footer />
    </div>
  );
};

export default LandingPage;
