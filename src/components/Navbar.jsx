import React from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="bg-gradient-to-r mb-10 from-blue-700 to-blue-400 shadow-md py-3 px-6 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-bold text-white tracking-wide bg-[linear-gradient(to_right,_#1D4ED8,_#60A5FA,_#1D4ED8)] px-2 py-1 rounded"
      >
        Med<span className="text-red-500">i</span> Safe
      </Link>{" "}
      <div className="flex gap-6">
        <Link
          to="/"
          className={`text-white hover:underline ${
            pathname === "/" ? "font-semibold underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-white hover:underline ${
            pathname === "/about" ? "font-semibold underline" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`text-white hover:underline ${
            pathname === "/contact" ? "font-semibold underline" : ""
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
