import { data2 } from "@/app/data/data2";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

function SingleBlog() {
  return (
    <div className="max-w-full min-h-screen py-16 px-4 flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="grid grid-cols-1 justify-center items-center gap-9 lg:gap-14 gap-x-7 lg:gap-x-12 xl:grid-cols-3 md:grid-cols-2">
        {data2.map((item, i) => {
          return (
            <div
              key={i}
              className="rounded-3xl bg-white shadow-lg hover:scale-[1.05] hover:shadow-2xl hover:shadow-gray-400 transition-transform duration-300 ease-in-out"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <Image
                  className="h-[250px] w-full object-cover transition-transform duration-300 hover:scale-110"
                  src={item.imgUrl}
                  alt={item.title}
                  width={1000}
                  height={1000}
                />
              </div>

              <div className="flex gap-x-5 px-4 py-3 text-sm text-gray-600">
                <span className="inline-flex gap-x-2 items-center">
                  <MdOutlineDateRange className="text-blue-500" />
                  {item.date}
                </span>
                <span className="inline-flex gap-x-2 items-center">
                  <IoIosTimer className="text-purple-500" />
                  {item.read}
                </span>
              </div>

              <div className="px-4 pb-6">
                <p className="font-semibold text-gray-800 text-lg tracking-wide py-3">
                  {item.title}
                </p>
                <Link
                  href={`/blog/${item.title.toLowerCase().replace(/ /g, "-")}`}
                >
                  <button className="hover:text-blue-600 text-blue-500 py-2 inline-flex items-center gap-x-2 text-lg font-medium transition-all">
                    Read more
                    <GoArrowRight className="text-blue-600" />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-12">
        <Link href={"/blog"}>
          <button className="px-7 py-3 hover:bg-opacity-80 hover:-translate-y-1 transform transition-transform duration-300 inline-flex items-center gap-x-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg">
            View All Posts
            <GoArrowRight size={25} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SingleBlog;
