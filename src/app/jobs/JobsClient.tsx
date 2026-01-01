"use client";
import JobCard from "@/components/JobCard";
import Filter from "@/components/Jobs/Filter";
import { JobType } from "@/types/job";
import { useMemo, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
type Props = {
  jobs: JobType[];
};
type Filters = {
  type: string;
  category: string;
  location: string;
};
const JobsClient = ({ jobs }: Props) => {
  const [filters, setFilters] = useState<Filters>({
    type: "",
    category: "",
    location: "",
  });
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (filters.type && job.type !== filters.type) return false;
      if (filters.category && job.category !== filters.category) return false;
      if (filters.location && job.location !== filters.location) return false;
      return true;
    });
  }, [jobs, filters]);
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
            <Filter filters={filters} setFilters={setFilters} />
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 py-10">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} singleJob={job} />
              ))
            ) : (
              <p className="col-span-full text-center">No jobs found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsClient;
