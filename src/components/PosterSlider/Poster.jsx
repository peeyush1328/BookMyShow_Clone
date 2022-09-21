import React from "react";
import Slider from "react-slick";
import Posters from "../Poster/Posters";

const Poster = (props) => {
  const { poster, title, subtitle, movieslider, isDark, notslider, config } =
    props;
  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
   {title && (
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
      )}
      {movieslider && (
        <Slider {...movieslider}>
          {poster.map((each, index) => (
            <Posters {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
      {config && (
        <Slider {...setting}>
          {poster.map((each, index) => (
            <Posters {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
      

      {notslider &&
        poster.map((each, index) => (
          <div key={index} className="flex flex-wrap w-1/2 md:w-1/3 lg:w-3/12 my-3">
            <Posters {...each} isDark={isDark}  />
          </div>
        ))}
    </>
  );
};

export default Poster;
