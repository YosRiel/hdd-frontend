import React from "react";
import { Sliders } from "react-feather";
import movieOptions from "../data/movieOptions";
import cityOptions from "../data/cityOptions";
import cinemaOptions from "../data/cinemaOptions";
import getDateOptions from "../data/dateOptions";

const dateOptions = getDateOptions();

const FilterBar: React.FC = () => {
  return (
    <section className="flex justify-center w-full -mt-12 z-20 relative">
      <form className="bg-white shadow-lg rounded-md flex flex-col md:flex-row items-stretch px-2 py-4 gap-4 md:gap-0 w-full max-w-2xl md:min-w-[700px]">
        {/* Filtro 1 */}
        <div className="flex flex-col justify-center flex-1 min-w-0 px-0 md:px-6 border-b border-gray-200 md:border-b-0 md:border-r">
          <label className="font-bold text-base text-gray-800 mb-0">Por película</label>
          <select className="text-gray-500 text-sm bg-transparent focus:outline-none w-full">
            <option disabled selected>Qué quieres ver</option>
            {movieOptions.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}
          </select>
        </div>

        {/* Filtro 2 */}
        <div className="flex flex-col justify-center flex-1 min-w-0 px-0 md:px-6 border-b border-gray-200 md:border-b-0 md:border-r">
          <label className="font-bold text-base text-gray-800 mb-0">Por ciudad</label>
          <select className="text-gray-500 text-sm bg-transparent focus:outline-none w-full">
            <option disabled selected>Dónde estás</option>
            {cityOptions.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Filtro 3 */}
        <div className="flex flex-col justify-center flex-1 px-0 md:px-6 border-b border-gray-200 md:border-b-0 md:border-r">
          <label className="font-bold text-base text-gray-800 mb-0">Por cine</label>
          <select className="text-gray-500 text-sm bg-transparent focus:outline-none w-full">
            <option disabled selected>Elige tu Cineplus</option>
            {cinemaOptions.map((cinema, index) => (
              <option key={index} value={cinema}>{cinema}</option>
            ))}
          </select>
        </div>

        {/* Filtro 4 */}
        <div className="flex flex-col justify-center flex-1 px-0 md:px-6">
          <label className="font-bold text-base text-gray-800 mb-0">Por fecha</label>
          <select className="text-gray-500 text-sm bg-transparent focus:outline-none w-full">
            <option disabled selected>Elige un día</option>
            {dateOptions.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </select>
        </div>

        {/* Botón */}
        <div className="flex items-center justify-center pt-2 md:pt-0 md:pl-6 w-full md:w-auto">
          <button
            type="submit"
            className="flex items-center gap-2 bg-gray-200 text-gray-500 font-semibold rounded-full px-6 py-2 hover:bg-gray-300 transition w-full md:w-auto"
          >
            <Sliders size={18} />
            Filtrar
          </button>
        </div>
      </form>
    </section>
  );
};

export default FilterBar;
