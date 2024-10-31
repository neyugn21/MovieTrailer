import React, { useContext } from "react";
import ImgTemp from "./../assets/temp-1.jpeg";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import { MovieContext } from "../context/MovieProvider";

const SearchMovie = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);
  console.log(data);
  return (
    <div className="text-white p-10">
      <h2 className="uppercase text-xl font-bold mb-4">{title}</h2>
      <div
        className="grid grid-cols-2 gap-4 
      sm:grid-cols-3 lg:grid-cols-4"
      >
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              className="w-[200px] h-[300px] relative group"
              key={item.id}
              onClick={() => handleTrailer(item.id)}
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-2">
                  <p className=" uppercase text-sm">
                    {item.title || item.original_title || "Unnamed Movie"}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

SearchMovie.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
export default SearchMovie;
