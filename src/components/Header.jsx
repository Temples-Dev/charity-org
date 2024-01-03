import React from "react";
import logo from "../assets/prestige.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  const handleDonate = () => {
    // TODO()
  };

  return (
    <>
      <div className=" flex justify-between py-2 items-center px-12 bg-orange-600 ">
        <ul className="flex gap-8 text-white">
          <li>EMAIL: {props.email}</li>
          <li>PHONE: {props.phone}</li>
        </ul>

        <button
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDonate}
        >
          Donate Now
        </button>
      </div>

      <div className=" flex items-center justify-between px-12 h-20 sticky top-0 z-50 bg-white">
        <img src={logo} alt="brand logo" className="h-40"/>

        <ul className="flex gap-10 font-semibold ">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <Link to="/about-us" className="hover:text-orange-600">About</Link>
          <Link to="/causes" className="hover:text-orange-600">Causes</Link>
          <Link to="/gallery" className="hover:text-orange-600">Gallery</Link>
          <Link to="/blog" className="hover:text-orange-600">Blog</Link>
          <Link to="/contact-us" className="hover:text-orange-600">Contact</Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
