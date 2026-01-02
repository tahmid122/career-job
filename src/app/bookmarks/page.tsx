import { JobType } from "@/types/job";
import { FaAngleRight } from "react-icons/fa6";
import Bookmarks from "./Bookmarks";

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
      <div className="h-100 xl:h-125 border bg-[linear-gradient(to_right,#000000b8,#000000b8),url('/jobdetailsbanner.jpg')] bg-center bg-cover flex items-center justify-center text-white">
        <div>
          <h1 className="text-4xl mb-4 font-bold text-white">Bookmarks</h1>
          <p className="flex items-center gap-1 justify-center font-medium text-white text-lg">
            Home <FaAngleRight /> Bookmarks
          </p>
        </div>
      </div>
      <div className="container">
        {/* bookmarks */}

        <Bookmarks jobs={data} />
      </div>
    </section>
  );
};

export default BookMarks;
