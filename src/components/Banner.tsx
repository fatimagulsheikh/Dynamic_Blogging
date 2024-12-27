import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Banner() {
  return (
    <div className="md:px-6 px-4 pt-32 pb-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 mx-auto">
      <div className="text-center text-black">
        <h1 className="sm:text-5xl text-4xl font-extrabold mb-5 py-3 lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
          Welcome to our Blog
        </h1>
        <p className="text-gray-800 lg:w-3/5 mx-auto mb-6 text-xl sm:text-2xl font-medium">
          Dive into the World of Technology: Unveiling Innovations That Shape
          Our Future
        </p>
        <div>
          <Link
            href={"/"}
            className="font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 
                inline-flex items-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Learn More
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
