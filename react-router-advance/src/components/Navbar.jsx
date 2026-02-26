import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-4 bg-cyan-900 ">
      <h2 className="font-bold text-xl ">Paritosh</h2>
      <div className="flex gap-10 ">
        <Link to="/" className="font-bold text-xl ">
          Home
        </Link>
        <Link to="/about" className="font-bold text-xl ">
          About
        </Link>
        <Link to="/contact" className="font-bold text-xl ">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
