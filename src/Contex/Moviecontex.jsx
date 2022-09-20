import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const Moviecontex = ({ children }) => {
  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });
  const [isopen, setIsopen] = useState(false);
  const [price, setPrice] = useState(0);
  const rentMovie = () => {
    setIsopen(true);
    setPrice(149);
  };
  const buyMovie = () => {
    setIsopen(true);
    setPrice(599);
  };

  return (
    <MovieContext.Provider
      value={{
        movie,
        setMovie,
        isopen,
        price,
        rentMovie,
        buyMovie,
        setIsopen,
        setPrice,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default Moviecontex;
