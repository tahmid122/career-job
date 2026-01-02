import { JobType } from "@/types/job";
import { FaAngleRight } from "react-icons/fa6";
import Bookmarks from "./Bookmarks";
import Banner from "@/components/Banner";

const BookMarks = async () => {
  const res = await fetch(`${process.env.API_URL}/db.json`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data: JobType[] = await res.json();
  return (
    <section className="min-h-screen">
      {/* Banner */}
      <Banner title="Bookmarks" />
      <div className="container">
        {/* bookmarks */}

        <Bookmarks jobs={data} />
      </div>
    </section>
  );
};

export default BookMarks;
