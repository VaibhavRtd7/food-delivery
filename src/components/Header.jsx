/* eslint-disable no-unused-vars */
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header = () => {
  const onlineStatus = useOnlineStatus();
   
  const cartItems = useSelector( (store) => store.cart.items)
  // console.log("CardItems from header:-", cartItems);
 
   
  return (
    <header className="bg-gray-600 text-white p-4 rounded-sm flex justify-between items-center shadow-lg">
      <div className="flex flex-auto text-2xl font-bold tracking-wide">
        <img
          src={LOGO_URL}
          alt="logo-url"
          className="w-12 object-contain rounded-full border-2 border-white shadow-lg"
        ></img>
        <p className="text-2xl font-bold tracking-wide m-2">
        <Link to="/">
              Food Ordering
        </Link>
        </p>
      </div>

      <nav>

        <ul className="flex content-between my-3 font-mono text-xl ">
          <li className="text-yellow-900"> Status :  {onlineStatus ? "Online" : "Offline"}</li>
          <li>
            <Link to="/" className="hover:underline p-4">
              Home 
            </Link>
          </li>

          <li>
            <Link to="/cart" className="font-bold text-xl p-4">
              Cart({cartItems.length})item
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:underline p-4">
              Grocery
            </Link>
          </li>

          <li
            className="bottom-2 px-3 py-1 bg-slate-400 rounded-full"
          >
                       <li>
            <Link to="/login" className="hover:underline p-4">
              Login
            </Link>
          </li>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const Search = () => {
  // let foodsData1 = foodsData;
  // console.log("foodsData1");

  return (
    <div className="p-4">
      <button
        className="border-4 border-slate-400 rounded-md mt-2 p-1"
        onClick={() => {
          console.log("Button is cliked...");
        }}
      >
        {" "}
        Top rated restaurants
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-2">
      &copy; {new Date().getFullYear()} Food Ordering. All rights reserved.
    </footer>
  );
};
