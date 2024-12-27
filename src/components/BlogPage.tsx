import { Blog } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

function BlogPage() {
  return (
    <div className="min-h-screen py-40 px-4 flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <h1 className="sm:text-4xl text-3xl tracking-wider py-8 pb-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
        Our Latest Blog
      </h1>
      <div className="grid grid-cols-1 justify-center items-center gap-12 lg:gap-14 gap-x-7 lg:gap-x-16 xl:grid-cols-3 md:grid-cols-2">
        {Blog.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-xl transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-slate-500 transition-all duration-300 ease-in-out bg-white shadow-xl overflow-hidden"
            >
              <div className="relative">
                <Image
                  className="h-[250px] w-full rounded-tl-xl rounded-tr-xl object-cover"
                  src={item.imgUrl}
                  alt={item.title}
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="flex md:gap-x-5 gap-x-3 text-[#727272] px-4 py-3 text-sm md:text-base">
                <span className="inline-flex gap-x-2 items-center">
                  <MdOutlineDateRange className="text-blue-600" />
                  {item.date}
                </span>
                <span className="inline-flex gap-x-2 items-center">
                  <IoIosTimer className="text-purple-600" />
                  {item.read}
                </span>
              </div>

              <div className="px-4 pb-4">
                <p className="font-semibold text-[#444343] text-lg tracking-wide py-2">
                  {item.title}
                </p>
                <Link
                  href={`/blog/${item.title.toLowerCase().replace(/ /g, "-")}`}
                >
                  <button className="hover:text-blue-700 py-2 inline-flex text-lg font-medium items-center gap-x-2 text-blue-800 hover:underline transition-all">
                    Read more
                    <GoArrowRight className="text-blue-600" />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;
