import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBriefcase,
  FaCalendar,
  FaClockRotateLeft,
  FaDollarSign,
  FaLocationDot,
  FaXmark,
} from "react-icons/fa6";

const BookmarksCard = () => {
  return (
    <div className="border border-slate-200 p-5 transition-all duration-300 hover:shadow-sm space-y-5 relative">
      <span className="absolute top-0 right-0 h-8 w-8 bg-red-500 flex items-center justify-center cursor-pointer">
        <FaXmark className="text-xl text-white" />
      </span>
      {/* Upper tags part */}
      <div className="flex flex-col-reverse flex-wrap gap-2 items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="block py-1 px-2 uppercase text-likeGreen rounded bg-gray-100 font-bold text-xs">
            Full time
          </span>
          <span className="block py-1 px-2 uppercase text-white rounded bg-red-500 font-bold text-xs">
            Urgent
          </span>
        </div>
        <div className="text-sm flex items-center gap-2 text-slate-600">
          <FaCalendar className="text-base text-likeGreen -mt-0.5" /> 5 Months
          ago
        </div>
      </div>
      {/* Heading */}
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 relative">
          <Image
            src={"/slack.webp"}
            fill
            alt="company logo"
            className="p-2 object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold">Senior Graphics Designer</h3>
          <span className="text-sm text-likeGreen font-medium block">
            InnoTech Solutions
          </span>
          <span className="flex items-end gap-1 text-sm text-slate-600">
            <FaLocationDot className="text-xl text-likeGreen" /> Florida
          </span>
        </div>
      </div>
      {/* Salary and Experience */}
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex items-center gap-1">
          <span className="flex items-center">
            <FaDollarSign className="text-likeGreen text-base" />
          </span>
          <span className="flex items-center text-base text-slate-600 leading-0">
            18k - 30k
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex items-center text-base text-slate-600 leading-0 gap-1">
            <FaBriefcase className="text-likeGreen text-base" /> Experience:
          </span>
          <span className="flex items-center text-base text-slate-600 leading-0">
            5 Years
          </span>
        </div>
      </div>
      {/* Skills */}
      <div className="flex items-center flex-wrap gap-3">
        <span className="block py-2 px-3 uppercase text-slate-500 rounded bg-gray-100 font-bold text-xs">
          Photoshop
        </span>
        <span className="block py-2 px-3 uppercase text-slate-500 rounded bg-gray-100 font-bold text-xs">
          Illustrator
        </span>
        <span className="block py-2 px-3 uppercase text-slate-500 rounded bg-gray-100 font-bold text-xs">
          Canva
        </span>
      </div>
      {/* View Link */}
      <div className=" flex flex-wrap gap-2  items-center justify-between">
        <div className="flex items-center gap-1">
          <FaClockRotateLeft className="text-sm text-likeGreen" />
          <span className="text-base text-slate-600 leading-0">
            15 Days Left To Apply
          </span>
        </div>
        <Link
          href={`/jobs/1`}
          className="flex items-center gap-2 text-sm text-likeGreen transform-fill duration-300 hover:text-likeOrange"
        >
          <span className="font-bold ">Job Details </span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BookmarksCard;
