"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function toggle() {
    setMenuOpen(!isMenuOpen);
  }

  const navLinks = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blog", link: "Blogs" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav className="px-6 py-4 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link className="text-white text-3xl font-extrabold tracking-wide hover:text-orange-400" href={"/"}>
          DynamicBlog
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex gap-10 text-lg">
          {navLinks.map((nav, i) => (
            <li
              key={i}
              className="hover:text-orange-400 transition duration-200 ease-in-out"
            >
              <Link href={nav.path}>{nav.link}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            className="py-2 px-5 rounded-md bg-gray-800 hover:bg-orange-500 transition duration-200"
            href={"/signup"}
          >
            Signup
          </Link>
          <Link
            className="py-2 px-5 rounded-md border border-gray-500 hover:border-orange-500 hover:text-orange-400 transition duration-200"
            href={"/login"}
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggle}
            className="p-2 rounded-md hover:bg-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 text-white space-y-6 px-8 py-16 transition-transform duration-300">
          {navLinks.map((nav, i) => (
            <li key={i}>
              <Link
                onClick={toggle}
                className="block text-lg font-semibold hover:text-orange-400 transition duration-200"
                href={nav.path}
              >
                {nav.link}
              </Link>
            </li>
          ))}
          <div className="space-y-4 mt-6">
            <Link
              onClick={toggle}
              className="block py-3 px-5 rounded-md bg-gray-800 hover:bg-orange-500 text-center transition duration-200"
              href={"/signup"}
            >
              Signup
            </Link>
            <Link
              onClick={toggle}
              className="block py-3 px-5 rounded-md border border-gray-500 hover:border-orange-500 text-center hover:text-orange-400 transition duration-200"
              href={"/login"}
            >
              Login
            </Link>
          </div>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
