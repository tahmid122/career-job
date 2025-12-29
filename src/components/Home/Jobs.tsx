import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import JobCard from "../JobCard";

const Jobs = () => {
  return (
    <section>
      <div className="container">
        <div className="py-20 xl:py-25">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Featured Jobs</h1>
            <Link href={"/jobs"} className="btn2">
              Browse All Jobs <FaArrowRight />
            </Link>
          </div>
          {/* jobs */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
