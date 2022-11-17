import React, { useState } from "react";

//importing componenets...
import Default from "../Hoc/Default";
import Poster from "../components/PosterSlider/Poster";
import Playfilter from "../components/PLayfilter/Playfilter";
import { useEffect } from "react";
import axios from "axios";

const Movie = () => {
  const [nowplayingmovies, setNowplayingmovies] = useState([]);
  useEffect(() => {
    const reqmovie = async () => {
      const gettingmovie = await axios.get("/now_playing");
      setNowplayingmovies(gettingmovie.data.results);
    };
    reqmovie();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full lg:flex lg:flex-row-reverse flex-col-reverse flex gap-4">
          <div className="lg:w-3/4 p-4 rounded">
            <h2 className="text-2xl font-bold mb-4">Movies In Moradabad</h2>
            <div className="container mx-auto my-6">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/coming-soon-web-collection-202012090733.png"
                alt="poster"
                className="w-full h-full object-cover object-center cursor-pointer rounded-md"
              />
            </div>
            <div className="flex flex-wrap">
              <Poster
                poster={nowplayingmovies}
                isDark={false}
                notslider={true}
              />
            </div>
          </div>
          <div className="lg:w-1/4 p-4   rounded">
            <h2 className="text-2xl mb-4 font-bold ">Filters</h2>
            <div>
              <Playfilter
                title="Date"
                tag={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <Playfilter
                title="Language"
                tag={["English", "Hindi", "Tamil", "Telgu", "Kannada"]}
              />
            </div>
            <div>
              <Playfilter
                title="Genres"
                tag={[
                  "Action",
                  "Drama",
                  "Adventure",
                  "Comdedy",
                  "Romantic",
                  "Fantasy",
                  "Thriller",
                ]}
              />
            </div>
            <div>
              <Playfilter title="Format" tag={["2D", "3D"]} />
            </div>

            <div className="flex justify-center items-center border-red-600 border-solid border h-8 rounded-md">
              <span className="text-red-600 ">Browse by Cinema</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Default(Movie);
