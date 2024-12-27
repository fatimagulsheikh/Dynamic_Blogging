import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiFiverr } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 body-font">
      <div className="container px-5 py-10 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Fatima Sheikh</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">
          &copy; 2024 DynamicBlog — All rights reserved
        </p>
        <div className="mt-4 flex space-x-6 sm:ml-auto sm:mt-0">
          <Link
            href="https://www.linkedin.com/in/fatima-gul-4748402b9/"
            target="_blank"
            className="text-gray-400 hover:text-[#0762C8] transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link
            href="https://github.com/fatimagulsheikh"
            target="_blank"
            className="text-gray-400 hover:text-[#6e5494] transition-transform transform hover:scale-110"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            href="https://vercel.com/fatima-sheikhs-projects-c67349cc"
            target="_blank"
            className="text-gray-400 hover:text-black transition-transform transform hover:scale-110"
          >
            <IoLogoVercel className="text-2xl" />
          </Link>
          <Link
            href="https://www.fiverr.com/fatimasheikh769/buying?source=avatar_menu_profile"
            target="_blank"
            className="text-gray-400 hover:text-[#00b22d] transition-transform transform hover:scale-110"
          >
            <SiFiverr className="text-2xl" />
          </Link>
          <Link
            href="https://www.facebook.com/fatimagull.sheikh"
            target="_blank"
            className="text-gray-400 hover:text-[#4267B2] transition-transform transform hover:scale-110"
          >
            <FaFacebook className="text-2xl" />
          </Link>
          <Link
            href="https://www.instagram.com/fatimagul_sheikh/"
            target="_blank"
            className="text-gray-400 hover:text-[#F56040] transition-transform transform hover:scale-110"
          >
            <FaInstagram className="text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}







