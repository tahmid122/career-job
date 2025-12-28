import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

import SearchBox from "./SearchBox";
const Banner = () => {
  return (
    <section className="border bg-[url('/banner.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="container">
        <div className="mt-25 h-125 xl:h-170 flex flex-col justify-center gap-5">
          {/* Heading */}
          <h1 className="text-3xl xl:text-5xl text-white font-medium xl:leading-14">
            <span className="text-likeOrange font-semibold">2560</span>{" "}
            Thousands Dream <br className="xl:block hidden" /> Jobs Available
            Now
          </h1>
          {/* Search box */}
          <SearchBox />
          {/* profiles */}
          <div className="flex xl:flex-row flex-col xl:items-center gap-2 xl:gap-5">
            <h4 className="text-xl text-white font-semibold">
              Popular Profiles
            </h4>
            <div className="flex items-center">
              <div className="relative rounded-full">
                <Image
                  src={"/avatar1.png"}
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </div>
              <div className="text-white flex items-center justify-center h-11 w-11 rounded-full bg-likeOrange -ml-5 z-10">
                <FaPlus className="text-xl" />
              </div>
            </div>
            <h4 className="text-xl text-white font-semibold">3k+ Jobs Done</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
