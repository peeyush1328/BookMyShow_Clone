import React from "react";
import { BiCaretDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavSM() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Start From Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white ">
            Moradabad <BiCaretDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMD() {
  return (
    <>
      <div className="flex gap-3 w-full items-center">
        <Link to="/" className="w-10 h-10">
          <img
            src="https://lh3.googleusercontent.com/m0T5pBN2VgwdbWqJCHj75qsgIXIZEf8TPtfSK3el65lxNnoxMJwF9GwEwysG-vq9Fag"
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
    </>
  );
}

function NavLG() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <Link to="/" className="w-40 h-10">
            <img
              src="http://www.lemondesign.co.in/wordpress/wp-content/uploads/2014/01/logo-on-gray.jpg"
              alt="logo"
              className="w-full h-full bg-transparent"
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
      <div className="container flex mx-auto px-4 items-center md:justify-between">
        <div className="flex  items-center w-full  md:w-1/2 md:gap-3 justify-between md:justify-start">
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
        <div className="hidden   md:flex  md:gap-3 items-center">
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

const navbar = () => {
  return (
    <>
      <div className="bg-darkBackground-700 px-4 py-3">
        <div className="md:hidden">
          <NavSM />
        </div>
        <div className="hidden md:flex lg:hidden">
          <NavMD />
        </div>
        <div className="hidden md:hidden lg:flex flex-col">
          <NavLG />
        </div>
      </div>
      <div className="bg-darkBackground-950 px-4 py-2">
        <Secnav />
      </div>
    </>
  );
};

export default navbar;
