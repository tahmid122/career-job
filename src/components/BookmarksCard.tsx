import { JobType } from "@/types/job";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FaArrowRight,
  FaBriefcase,
  FaCalendar,
  FaClockRotateLeft,
  FaDollarSign,
  FaLocationDot,
  FaXmark,
} from "react-icons/fa6";
interface JobCardProps {
  singleJob: JobType;
  handleRemoveFromBookMark: (id: number) => void;
}
const BOOKMARK_KEY = "job_bookmark";
const getBookmarks = (): number[] => {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(BOOKMARK_KEY);
    return stored ? (JSON.parse(stored) as number[]) : [];
  } catch {
    return [];
  }
};
const BookmarksCard = ({
  singleJob,
  handleRemoveFromBookMark,
}: JobCardProps) => {
  const getDayLeft = (date: string): number => {
    const futureDate = new Date(date);
    const today = new Date();
    //Reset time to midnight
    futureDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // difference
    const dateDiffMs = futureDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(dateDiffMs / (1000 * 60 * 60 * 24));
    return daysLeft;
  };
  const days = getDayLeft(singleJob?.deadline);

  return (
    <div className="border border-slate-200 dark:border-slate-700 p-5 transition-all duration-300 hover:shadow-sm space-y-5 relative">
      <span
        onClick={() => handleRemoveFromBookMark(singleJob.id)}
        className="absolute top-0 right-0 h-8 w-8 bg-red-500 flex items-center justify-center cursor-pointer"
      >
        <FaXmark className="text-xl text-white" />
      </span>
      {/* Upper tags part */}
      <div className="flex flex-col flex-wrap gap-2 items-start justify-between">
        <div className="flex items-center gap-2">
          {singleJob.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`${
                tag !== "Urgent"
                  ? "block py-1 px-2 uppercase text-likeGreen rounded bg-gray-100 font-bold text-xs"
                  : "block py-1 px-2 uppercase text-white rounded bg-red-500 font-bold text-xs"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm flex items-center gap-2 text-slate-600 dark:text-white dark:text-white">
          <FaCalendar className="text-base text-likeGreen -mt-0.5" /> Deadline:{" "}
          {singleJob.deadline}
        </div>
      </div>
      {/* Heading */}
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 relative">
          <Image
            src={singleJob?.logo}
            fill
            alt="company logo"
            className="p-2 object-cover"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold dark:text-white">
            {singleJob.title}
          </h3>
          <span className="text-sm text-likeGreen font-medium block">
            {singleJob.company}
          </span>
          <span className="flex items-end gap-1 text-sm text-slate-600  dark:text-white">
            <FaLocationDot className="text-xl text-likeGreen" />{" "}
            {singleJob.location}
          </span>
        </div>
      </div>
      {/* Salary and Experience */}
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex items-center gap-1">
          <span className="flex items-center">
            <FaDollarSign className="text-likeGreen text-base" />
          </span>
          <span className="flex items-center text-base text-slate-600 dark:text-white leading-0">
            {singleJob.salary}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex items-center text-base text-slate-600 dark:text-white leading-0 gap-1">
            <FaBriefcase className="text-likeGreen text-base" /> Experience:
          </span>
          <span className="flex items-center text-base text-slate-600 dark:text-white leading-0">
            {singleJob?.experience} Years
          </span>
        </div>
      </div>
      {/* Skills */}
      <div className="flex items-center flex-wrap gap-3">
        {singleJob?.skills.map((skill, idx) => (
          <span
            key={idx}
            className="block py-2 px-3 uppercase text-slate-500 rounded bg-gray-100 font-bold text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* View Link */}
      <div className=" flex flex-wrap gap-2  items-center justify-between">
        <div className="flex items-center gap-1">
          <FaClockRotateLeft
            className={`text-sm ${
              days > 0 ? "text-likeGreen" : "text-red-500"
            } `}
          />
          <span
            className={`text-base ${
              days > 0
                ? "text-slate-600 dark:text-white"
                : "text-red-500 font-semibold"
            } leading-0`}
          >
            {days > 0 ? `${days} Days Left To Apply` : "Time over"}
          </span>
        </div>
        {days > 0 ? (
          <Link
            href={`/jobs/${singleJob?.id}`}
            className="flex items-center gap-2 text-sm text-likeGreen transform-fill duration-300 hover:text-likeOrange"
          >
            <span className="font-bold ">Job Details </span>
            <FaArrowRight />
          </Link>
        ) : (
          <span className="flex items-center gap-2 text-sm text-red-500 transform-fill duration-300 cursor-not-allowed">
            <span className="font-bold ">Job Details </span>
            <FaXmark />
          </span>
        )}
      </div>
    </div>
  );
};

export default BookmarksCard;
