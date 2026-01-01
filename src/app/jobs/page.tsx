import { JobType } from "@/types/job";
import JobsClient from "./JobsClient";

const Jobs = async () => {
  const res = await fetch(`${process.env.API_URL}/jobs`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data: JobType[] = await res.json();
  return <JobsClient jobs={data} />;
};

export default Jobs;
