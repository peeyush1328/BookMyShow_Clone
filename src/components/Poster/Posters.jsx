import React from "react";
import { Link } from "react-router-dom";

const Movieposter = (props) => {
  return (
    <Link to={`/movies/${props.id}`}>
      <div className="flex flex-col items-start gap-2 px-1 md:px-3 ">
        <div className="h-full w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="poster"
            className="h-full w-full rounded-md object-cover object-center"
          />
        </div>
        <span className="h-20 md:h-30 w-full">
          <h3
            className={`text-center text-lg font-bold ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.title}
          </h3>
        </span>
      </div>
    </Link>
  );
};

const PLayposter = (props) => {
  return (
    <Link to="">
      <div className="flex flex-col items-start gap-2 px-1 md:px-3 ">
        <div className="h-full w-full">
          <img
            src={props.src}
            alt="poster"
            className="h-full w-full rounded-md object-cover object-center"
          />
        </div>
        <span className="h-20 md:h-30 w-full">
          <h3
            className={`text-center text-lg font-bold ${
              props.isDark ? "text-white" : "text-gray-700"
            }`}
          >
            {props.title}
          </h3>
        </span>
      </div>
    </Link>
  );
};

const Posters = (props) => {
  if (props.play) {
    return (
      <>
        <PLayposter {...props} />
      </>
    );
  }
  return (
    <>
      <Movieposter {...props} />
    </>
  );
};

export default Posters;
