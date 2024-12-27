import React from "react";

function page() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16 px-4">
      <div className="container max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-orange-500 py-10 px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide">About</h1>
          <h2 className="text-lg sm:text-2xl font-medium tracking-wide">
            Exploring the Future of Artificial Intelligence
          </h2>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-12 text-slate-700">
          <p className="text-base sm:text-lg leading-relaxed sm:leading-8 mb-8">
            Dive into the rapidly evolving world of Artificial Intelligence, where technology meets
            innovation. This exploration sheds light on groundbreaking advancements, real-world
            applications, and the ethical considerations shaping the future of AI. From machine
            learning and neural networks to robotics and natural language processing, discover how
            AI is transforming industries, empowering decision-making, and redefining the way we
            live and work. Join us on this journey to uncover the limitless possibilities and
            challenges that lie ahead in the realm of Artificial Intelligence.
          </p>
          <p className="text-base sm:text-lg leading-relaxed sm:leading-8">
            Artificial Intelligence (AI) is rapidly transforming the world, revolutionizing
            industries and reshaping the way we interact with technology. From machine learning
            algorithms and robotics to natural language processing and neural networks, AI is at
            the forefront of innovation. It has the potential to solve complex problems, enhance
            decision-making, and create efficiencies in various fields such as healthcare, finance,
            transportation, and education. However, as we embrace these advancements, it is crucial
            to address the ethical considerations and societal impacts of AI. Exploring the future
            of AI means unlocking its vast possibilities while ensuring it benefits humanity
            responsibly and inclusively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
