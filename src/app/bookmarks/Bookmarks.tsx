"use client";
import BookmarksCard from "@/components/BookmarksCard";
import { JobType } from "@/types/job";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
interface Props {
  jobs: JobType[];
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
const Bookmarks = ({ jobs }: Props) => {
  const [bookmarks, setBookmarks] = useState<number[]>(getBookmarks());
  const [bookmarksJob, setBookmarksJob] = useState<JobType[]>([]);

  const gerBookmarksFromLS = (bookmarks: number[]): void => {
    bookmarks.forEach((bookmark) => {
      const foundJob = jobs.find((job) => job.id == bookmark);
      if (foundJob?.id) {
        const foundOnState = bookmarksJob.find((book) => book.id == bookmark);
        if (!foundOnState) {
          setBookmarksJob((prev) => [...prev, foundJob]);
        }
      }
    });
  };

  useEffect(() => {
    gerBookmarksFromLS(bookmarks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarks]);
  const handleRemoveFromBookMark = (id: number): void => {
    if (typeof window === "undefined") return;
    if (bookmarks.includes(id)) {
      const updated = bookmarks.filter((bookmark) => bookmark !== id);
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(updated));
      toast.success("Remove from bookmark");
      setBookmarks(getBookmarks());
      setBookmarksJob([]);
    }
  };
  return (
    <div>
      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 py-10">
        {bookmarksJob.length > 0 ? (
          bookmarksJob.map((job) => (
            <BookmarksCard
              key={job.id}
              singleJob={job}
              handleRemoveFromBookMark={handleRemoveFromBookMark}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No bookmarks added yet</p>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
