import React, { useState } from "react";
import { Link, useLocation } from "react-router"; 
import { MdHealthAndSafety } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r flex items-center from-white to-gray-300 tracking-wide"
        >
          Medi
          <span className="text-red-500 text-3xl ml-1">
            <MdHealthAndSafety />
          </span>
          Safe
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
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
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleSidebar} className="md:hidden text-white text-3xl">
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-64 bg-blue-800 text-white z-50 p-6 shadow-lg transform animate-slide-in">
          <button onClick={closeSidebar} className="text-white text-2xl mb-6">
            <HiX />
          </button>
          <nav className="flex flex-col gap-6">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={closeSidebar}
                className={`text-white hover:text-yellow-300 transition-all duration-200 ${
                  pathname === path ? "underline underline-offset-4 font-semibold" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
