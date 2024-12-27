import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function AuthorCard() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 shadow-xl rounded-3xl p-8 mt-12 max-w-md mx-auto">
      <div className="flex items-center gap-6">
        <Image
          src="/images/profile.jpg.jpeg" // Correct path
          alt="profile-pic"
          width={200}
          height={200}
          className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
        />

        <div>
          <h3 className="text-2xl font-bold text-gray-800">Fatima Sheikh</h3>
          <p className="text-gray-600">Web Developer | Front-End Developer</p>
        </div>
      </div>

      <p className="mt-6 text-gray-700 leading-relaxed">
        I am a passionate beginner web developer who has created projects such as a personal portfolio, a travel website, and a shopping platform. My designs are interactive, responsive, and enriched with animations to ensure an exceptional user experience. I strive for continuous learning and aim to deliver impactful digital solutions.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/fatima-gul-4748402b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/fatimagulsheikh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900 transition-colors text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition-colors text-xl"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}


