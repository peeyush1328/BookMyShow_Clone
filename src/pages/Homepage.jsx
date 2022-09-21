import React, { useEffect, useState } from "react";
// Hoc
import Default from "../Hoc/Default";
// componenets
import EntertainmentCard from "../components/Entertainment/EntertainmentCard";
import HeroCrousal from "../components/heroCrousal/HeroCrousal";
import Poster from "../components/PosterSlider/Poster";
import axios from "axios";

const Homepage = () => {
  const [RecommendedMovies, setRecommendedMovies] = useState([]);
  const [PremiereMovies, setPremiereMovies] = useState([]);
  const [OnlineStreamingEvents, setOnlineStreamingEvents] = useState([]);
  useEffect(() => {
    const reqtopmovies = async () => {
      const topmovies = await axios.get("/top_rated");
      setRecommendedMovies(topmovies.data.results);
    };
    reqtopmovies();
  }, []);
  useEffect(() => {
    const reqpremmovies = async () => {
      const premmovies = await axios.get("/upcoming");
      setPremiereMovies(premmovies.data.results);
    };
    reqpremmovies();
  }, []);
  useEffect(() => {
    const requpcommmovies = async () => {
      const upcommmovies = await axios.get("/popular");
      setOnlineStreamingEvents(upcommmovies.data.results);
    };
    requpcommmovies();
  }, []);
  return (
    <>
      <HeroCrousal />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/lead-in-v3-collection-202102040828.png"
          alt="poster"
          className="w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-grey-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <Poster
          config={true}
          title="Recommended Movies"
          subtitle="List of Recommended Movies"
          poster={RecommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
              alt="rupee"
              className="w-full h-full"
            />
          </div>
          <Poster
            config={true}
            title="Premiers"
            subtitle="Brand new releases every Friday"
            poster={PremiereMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <Poster
          config={true}
          title="Online Streaming Events"
          poster={OnlineStreamingEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default Default(Homepage);
