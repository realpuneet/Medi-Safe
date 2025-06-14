import React from "react";
import { Link, useLocation } from "react-router";
import { MdHealthAndSafety } from "react-icons/md";


const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 shadow-lg py-4 px-8 flex justify-between items-center">
      <Link
        to="/"
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r flex items-center from-white to-gray-300 tracking-wide"
      >
        Medi<span className="text-red-500"><MdHealthAndSafety />
</span>Safe
      </Link>

      <div className="flex gap-8">
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`text-white hover:text-yellow-300 transition-all duration-200 ${
              pathname === path ? "underline underline-offset-4 font-semibold" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
