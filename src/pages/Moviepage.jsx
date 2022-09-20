import React, { useEffect, useState, useContext } from "react";
import Movies from "../Hoc/Movies";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../Contex/Moviecontex";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Poster from "../components/PosterSlider/Poster";
import Moviehero from "../components/Moviehero/Moviehero";
import Cast from "../components/Cast/Cast";

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

  const settingcast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
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

  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };

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
          <Slider {...settingcast}>
            {cast.map((castData, index) => (
              <Cast
                image={castData.profile_path}
                castname={castData.original_name}
                role={castData.character}
                key={index}
              />
            ))}
          </Slider>
        </div>
        <div className="my-8">
          <hr />
        </div>
        {/* poster slider */}
        <div className="my-8">
          <Poster
            config={setting}
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
          config={setting}
          title="Recommended Movies"
          poster={Recommended}
          isDark={false}
        />
      </div>
    </>
  );
};

export default Movies(Moviepage);
