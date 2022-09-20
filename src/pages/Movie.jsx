import React from "react";
import HeroCrousal from "../components/heroCrousal/HeroCrousal";
import Default from "../Hoc/Default";
import Posters from "../components/Poster/Posters";
import Playfilter from "../components/PLayfilter/Playfilter";

const Movie = () => {
  return (
    <>
      <HeroCrousal />
      <div className="container mx-auto px-4 my-10">
        <div className="w-full lg:flex lg:flex-row-reverse flex-col-reverse flex gap-4">
          <div className="lg:w-3/4 p-4 rounded">
            <h2 className="text-2xl font-bold mb-4">Movies In Moradabad</h2>
            <div className="  w-full ">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/coming-soon-web-collection-202012090733.png"
                alt="poster"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAxODdrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00063710-eeytyxnmga-portrait.jpg"
                  title="Brahmastra"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjclICA5ODAgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00308073-dxetpujvll-portrait.jpg"
                  title="Jahaan Char Yaar"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzUlICA3ODIgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00336816-lcywmvhaxy-portrait.jpg"
                  title="Middle-Class Love"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICAxNjVrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329656-przcvuftwc-portrait.jpg"
                  title="Sita Raman"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00004000-whyutwzsdy-portrait.jpg"
                  title="Avatar"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjEsIFNlcCAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00340455-pfubjxzfpz-portrait.jpg"
                  title="Teresa Had A Dream"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjIsIFNlcCAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00339759-vumyfgryws-portrait.jpg"
                  title="Paga Paga Paga"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Posters
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjMsIFNlcCAyMDIy,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00321670-nxjmpgkcug-portrait.jpg"
                  title="Krishna Vrinda Vihari"
                  subtitle="Theatre | Hindi, Urdu | All age groups | 1hr 50mins"
                  play={true}
                />
              </div>
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
