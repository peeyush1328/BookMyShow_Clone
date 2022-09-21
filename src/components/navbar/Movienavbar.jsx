import React, { useContext } from "react";
import { MovieContext } from "../../Contex/Moviecontex";
import { BiCaretDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navsm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="p-4 text-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{movie.title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

function NavLG() {
  return (
    <>
      <div className="container flex mx-auto px-4 item-center justify-between">
        <div className="flex item-center w-1/2 gap-3">
          <Link to="/" className="w-10 h-10">
            <img
              src="http://www.lemondesign.co.in/wordpress/wp-content/uploads/2014/01/logo-on-gray.jpg"
              alt="logo"
              className="w-full h-full"
            />
          </Link>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent order-none outline-none"
              placeholder="Search for Movies, Events, Plays, Sports and Activites"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Moradabad <BiCaretDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm  rounded-lg ">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
const Secnav = () => {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-5">
          <Link to="/movies" className="text-gray-200  hover:text-white">
            <button>Movies</button>
          </Link>
          <Link to="" className="text-gray-200 hover:text-white">
            <button>Stream</button>
          </Link>
          <Link to="" className="text-gray-200 hover:text-white">
            <button>Events</button>
          </Link>
          <Link to="/plays" className="text-gray-200 hover:text-white">
            <button>Plays</button>
          </Link>
          <Link to="" className="text-gray-200 hover:text-white">
            <button>Sports</button>
          </Link>
          <Link to="" className="text-gray-200 hover:text-white">
            <button>Activities</button>
          </Link>
        </div>
        <div className=" hidden gap-5 items-center lg:flex md:flex">
          <Link to="" className="text-gray-200 text-sm hover:text-white">
            <button>ListYourShow</button>
          </Link>
          <Link to="" className="text-gray-200 text-sm hover:text-white">
            <button>Corporates</button>
          </Link>
          <Link to="" className="text-gray-200 text-sm hover:text-white">
            <button>Offers</button>
          </Link>
          <Link to="" className="text-gray-200 text-sm hover:text-white">
            <button>GiftCards</button>
          </Link>
        </div>
      </div>
    </>
  );
};

const Movienavbar = () => {
  return (
    <>
      <nav className="bg-white border-b-2 lg:bg-darkBackground-700 lg:border-b-0 px-4 py-3 ">
        <div className="lg:hidden">
          <Navsm />
        </div>
        <div className="hidden lg:flex">
          <NavLG />
        </div>
      </nav>
      <div className="bg-darkBackground-950 px-4 py-2 flex">
        <Secnav />
      </div>
    </>
  );
};

export default Movienavbar;
