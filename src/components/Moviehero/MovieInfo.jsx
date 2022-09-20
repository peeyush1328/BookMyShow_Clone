import React, { useContext, useState } from "react";
import { MovieContext } from "../../Contex/Moviecontex";
import PaymentModal from "../PaymentModal/PaymentModal";

const MovieInfo = () => {
  const { movie, isopen, setIsopen, price, rentMovie, buyMovie } =
    useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <PaymentModal setIsopen={setIsopen} isopen={isopen} price={price} />
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">{movie.title}</h1>
        <div className="text-white flex-flex-col gap-2 ">
          <h4>4k Rating</h4>
          <h4>English,Hindi,Kannada,Telgu</h4>
          <h4>
            {movie.runtime} min | {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={rentMovie}
            className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
          >
            Rent ₹149
          </button>
          <button
            onClick={buyMovie}
            className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
          >
            Buy ₹599
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
