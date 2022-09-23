import React from "react";
import Posters from "../Poster/Posters";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Poster = (props) => {
  const { poster, title, subtitle, movieslider, isDark, notslider, config } =
    props;

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
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          slidesPerGroup={3}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },

            600: {
              slidesPerView: 3,
              slidesPerGroup: 2,
            },

            1024: {
              slidesPerView: 4,
              slidesPerGroup: 3,
            },
          }}

          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {poster.map((each, index) => (
            <SwiperSlide key={index}>
              <Posters {...each} isDark={isDark} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {config && (
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          slidesPerGroup={3}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },

            600: {
              slidesPerView: 3,
              slidesPerGroup: 2,
            },

            1024: {
              slidesPerView: 4,
              slidesPerGroup: 3,
            },
          }}

          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {poster.map((each, index) => (
            <SwiperSlide key={index}>
              <Posters {...each} isDark={isDark} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {notslider &&
        poster.map((each, index) => (
          <div
            key={index}
            className="flex flex-wrap w-1/2 md:w-1/3 lg:w-3/12 my-3"
          >
            <Posters {...each} isDark={isDark} />
          </div>
        ))}
    </>
  );
};

export default Poster;
