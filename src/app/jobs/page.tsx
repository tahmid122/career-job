import JobCard from "@/components/JobCard";
import Filter from "@/components/Jobs/Filter";
import { JobType } from "@/types/job";
import { FaAngleRight } from "react-icons/fa6";

const Jobs = async () => {
  const res = await fetch(`${process.env.API_URL}/jobs`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data: JobType[] = await res.json();
  return (
    <section className="min-h-screen">
      {/* Banner */}
      <div className="h-100 xl:h-125 border bg-[linear-gradient(to_right,#000000b8,#000000b8),url('/jobdetailsbanner.jpg')] bg-center bg-cover flex items-center justify-center text-white">
        <div>
          <h1 className="text-4xl mb-4 font-bold text-white">All Jobs</h1>
          <p className="flex items-center gap-1 justify-center font-medium text-white text-lg">
            Home <FaAngleRight /> All Jobs
          </p>
        </div>
      </div>
      <div className="container">
        <div>
          {/* search filter */}
          <div>
            <Filter />
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 py-10">
            {data &&
              data.length > 0 &&
              data.map((singleJob) => (
                <JobCard key={singleJob?.id} singleJob={singleJob} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
