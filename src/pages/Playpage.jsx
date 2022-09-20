import React from "react";

import Posters from "../components/Poster/Posters";
import Playfilter from "../components/PLayfilter/Playfilter";
import PlayMovie from "../Hoc/PlayMovie";
const Playpage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full lg:flex lg:flex-row-reverse flex-col-reverse flex gap-4">
          <div className="lg:w-3/4 p-4 rounded">
            <h2 className="text-2xl font-bold mb-4">Plays In Moradabad</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338375-jpjhxtcqzz-portrait.jpg"
                  title="Tughlaq - An Online Play"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338375-jpjhxtcqzz-portrait.jpg"
                  title="Tughlaq - An Online Play"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338375-jpjhxtcqzz-portrait.jpg"
                  title="Tughlaq - An Online Play"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338375-jpjhxtcqzz-portrait.jpg"
                  title="Tughlaq - An Online Play"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338375-jpjhxtcqzz-portrait.jpg"
                  title="Tughlaq - An Online Play"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338375-jpjhxtcqzz-portrait.jpg"
                  title="Tughlaq - An Online Play"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338375-jpjhxtcqzz-portrait.jpg"
                  title="Tughlaq - An Online Play"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00338375-jpjhxtcqzz-portrait.jpg"
                  title="Tughlaq - An Online Play"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 p-4  rounded">
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
              <Playfilter title="Categories" tag={["Theatre"]} />
            </div>
            <div>
              <Playfilter title="More Filters" tag={["Online Streaming"]} />
            </div>
            <div>
              <Playfilter
                title="Price"
                tag={["Free", "0-500", "501-2000", "Above 2000"]}
              />
            </div>
            <div className="flex justify-center items-center border-red-600 border-solid border h-8 rounded-md">
              <span className="text-red-600 ">Browse by Venues</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayMovie(Playpage);
