"use client";
import Banner from "@/components/Banner";
import JobCard from "@/components/JobCard";
import Filter from "@/components/Jobs/Filter";
import { JobType } from "@/types/job";
import { useRouter, useSearchParams } from "next/navigation";
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
  const router = useRouter();
  const params = useSearchParams();
  const [filters, setFilters] = useState<Filters>({
    type: "",
    category: params.get("category") ?? "",
    location: params.get("location") ?? "",
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (filters.type && job.type !== filters.type) return false;
      if (filters.category && job.category !== filters.category) return false;
      if (filters.location && job.location !== filters.location) return false;
      return true;
    });
  }, [jobs, filters]);
  //   Reset Filter
  const resetFilter = (): void => {
    router.push("/jobs");
  };
  return (
    <section className="min-h-screen dark:bg-darkBlack">
      {/* Banner */}
      <Banner title="All Jobs" />
      <div className="container">
        <div>
          {/* search filter */}
          <div>
            <Filter
              filters={filters}
              setFilters={setFilters}
              resetFilter={resetFilter}
            />
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
