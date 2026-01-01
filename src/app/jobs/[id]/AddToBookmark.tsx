"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBookmark, FaXmark } from "react-icons/fa6";

interface Props {
  id: number;
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

const AddToBookmark = ({ id }: Props) => {
  const [added, setAdded] = useState<boolean>(false);
  const handleAddToBookMark = () => {
    if (typeof window === "undefined") return;
    const bookmarks = getBookmarks();
    if (!bookmarks.includes(id)) {
      const updated = [...bookmarks, id];
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(updated));
      setAdded(true);
      toast.success("Added to bookmark");
    } else {
      toast.success("Already added");
    }
  };
  const handleRemoveFromBookMark = (): void => {
    if (typeof window === "undefined") return;
    const bookmarks = getBookmarks();
    if (bookmarks.includes(id)) {
      const updated = bookmarks.filter((bookmark) => bookmark !== id);
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(updated));
      setAdded(false);
      toast.success("Remove from bookmark");
    } else {
      handleAddToBookMark();
    }
  };
  useEffect(() => {
    setAdded(getBookmarks().includes(id));
  }, [id]);
  return (
    <>
      {added ? (
        <button
          onClick={handleRemoveFromBookMark}
          className="absolute top-0 right-0 cursor-pointer text-white text-lg w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-likeOrange transition-all duration-300"
        >
          <FaXmark />
        </button>
      ) : (
        <button
          onClick={handleAddToBookMark}
          className="absolute top-0 right-0 cursor-pointer text-white text-lg w-10 h-10 flex items-center justify-center bg-likeOrange hover:bg-likeGreen transition-all duration-300"
        >
          <FaBookmark />
        </button>
      )}
    </>
  );
};

export default AddToBookmark;
