import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import JobCard from "../JobCard";
import { JobType } from "@/types/job";

const Jobs = async () => {
  const res = await fetch(`${process.env.API_URL}/db.json`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data: JobType[] = await res.json();
  const featuredJobs: JobType[] = data.slice(0, 6);

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
            {featuredJobs &&
              featuredJobs.length > 0 &&
              featuredJobs.map((singleJob) => (
                <JobCard key={singleJob?.id} singleJob={singleJob} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
