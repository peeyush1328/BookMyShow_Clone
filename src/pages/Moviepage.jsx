import React, { useEffect, useState, useContext } from "react";
import Movies from "../Hoc/Movies";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../Contex/Moviecontex";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Poster from "../components/PosterSlider/Poster";
import Moviehero from "../components/Moviehero/Moviehero";
import Cast from "../components/Cast/Cast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Moviepage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [Similar, setSimilar] = useState([]);
  const [Recommended, setRecommended] = useState([]);

  useEffect(() => {
    const reqCast = async () => {
      const getReq = await axios.get(`/${id}/credits`);
      setCast(getReq.data.cast);
    };
    reqCast();
  }, [id]);

  useEffect(() => {
    const reqsimilar = async () => {
      const getsimilar = await axios.get(`/${id}/similar`);
      setSimilar(getsimilar.data.results);
    };
    reqsimilar();
  }, [id]);

  useEffect(() => {
    const reqrecommended = async () => {
      const getrecommended = await axios.get(`/${id}/recommendations`);
      setRecommended(getrecommended.data.results);
    };
    reqrecommended();
  }, [id]);

  useEffect(() => {
    const reqmovie = async () => {
      const getmoviedata = await axios.get(`/${id}`);
      setMovie(getmoviedata.data);
    };
    reqmovie();
  });

  return (
    <>
      <Moviehero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About The Movie</h1>
          <p className="">{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offer
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p>
                  Get 50% Off upto INR 150 on all Rupay Card* on BookMyshow
                  Stream
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p>
                  Get 50% Off upto INR 150 on all Rupay Card* on BookMyshow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        {/* cast slider */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            modules={[Navigation]}
            navigation={true}
            className="mySwiper"
            slidesPerGroup={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },

              600: {
                slidesPerView: 3,
                slidesPerGroup: 2,
              },

              1000: {
                slidesPerView: 5,
                slidesPerGroup: 4,
              },
            }}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {cast.map((castData, index) => (
              <SwiperSlide key={index}>
                <Cast
                  image={castData.profile_path}
                  castname={castData.original_name}
                  role={castData.character}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="my-8">
          <hr />
        </div>
        {/* poster slider */}
        <div className="my-8">
          <Poster
            movieslider={true}
            title="You might also like "
            poster={Similar}
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
        {/* poster slider */}
        <Poster
          movieslider={true}
          title="Recommended Movies"
          poster={Recommended}
          isDark={false}
        />
      </div>
    </>
  );
};

export default Movies(Moviepage);
