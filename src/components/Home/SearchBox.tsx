"use client";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const SearchBox = () => {
  const [jobCategory, setJobCategory] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const router = useRouter();
  //   search handle
  const handleSearch = (): void => {
    if (!jobCategory.trim() || !location.trim()) {
      toast.error("Select category and location");
    } else {
      router.push(`/jobs?category=${jobCategory}&location=${location}`);
    }
  };
  return (
    <div className="flex pt-5 xl:pt-0 xl:flex-row flex-col xl:*:gap-0 gap-2 items-center bg-white xl:h-14 xl:rounded-full xl:w-1/2 xl:pl-2">
      <Select onValueChange={(value: string) => setJobCategory(value)}>
        <SelectTrigger className="h-full shadow-none  ring-0 flex-1 border-none w-full">
          <SelectValue placeholder="Job Categories" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value="graphic_design">Graphic Design</SelectItem>
          <SelectItem value="digital_marketing">Digital Marketing</SelectItem>
          <SelectItem value="web_development">Web Development</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex-1 bor pr-4 xl:pr-0 xl:border-none xl:border-l flex items-center justify-between xl:mr-5 w-full xl:w-auto border-t">
        <input
          type="text"
          placeholder="Locations"
          className="outline-none p-3 w-full"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
        />
        <FaLocationDot className="text-likeOrange" />
      </div>
      {/* desktop btn */}
      <button onClick={handleSearch} className="btn h-full xl:flex hidden">
        Find Jobs <FaArrowRight />
      </button>
      {/* mobile btn */}
      <button
        onClick={handleSearch}
        className="btn h-full w-full rounded-none text-center items-center justify-center flex xl:hidden"
      >
        Find Jobs <FaArrowRight />
      </button>
    </div>
  );
};

export default SearchBox;
