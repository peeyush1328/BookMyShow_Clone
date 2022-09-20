import React from "react";
import { BiCaretDown, BiMenu, BiSearch } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavSM() {
  return (
    <>
      <div className="text-white flex item-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <span className="w-6 h-6">
            <BsChevronLeft className="w-full h-full" />
          </span>
          <h3 className="text-xl font-bold">Plays in Moradabad</h3>
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
        <div className="w-10 h-10">
          <img
            src="https://lh3.googleusercontent.com/m0T5pBN2VgwdbWqJCHj75qsgIXIZEf8TPtfSK3el65lxNnoxMJwF9GwEwysG-vq9Fag"
            alt="logo"
            className="w-full h-full"
          />
        </div>
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
        <div className="flex gap-5 items-center">
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

const PlayNav = () => {
  return (
    <>
      <nav className="bg-darkBackground-700 px-4 py-3">
        <div className="md:hidden">
          <NavSM />
        </div>
        <div className="hidden md:flex lg:hidden">
          <NavMD />
        </div>
        <div className="hidden md:hidden lg:flex flex-col">
          <NavLG />
        </div>
      </nav>
      <div className="bg-darkBackground-950 px-4 py-2 hidden md:hidden lg:flex">
        <Secnav />
      </div>
    </>
  );
};

export default PlayNav;
