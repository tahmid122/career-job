import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
import { FaArrowRight, FaXmark } from "react-icons/fa6";
type Filters = {
  type: string;
  category: string;
  location: string;
};
type Props = {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  resetFilter: () => void;
};
const Filter = ({ filters, setFilters, resetFilter }: Props) => {
  return (
    <div className="py-10 grid grid-cols-1 xl:grid-cols-4 gap-2 xl:gap-5">
      {/* Job Type */}
      <div className="w-full">
        <Select
          value={filters.type}
          onValueChange={(value: string) =>
            setFilters((prev) => ({ ...prev, type: value }))
          }
        >
          <SelectTrigger
            className="rounded-none shadow-none text-base py-7 w-full dark:border-slate-700 dark:text-white"
            style={{ backgroundColor: "transparent" }}
          >
            <SelectValue placeholder="Job Types" />
          </SelectTrigger>
          <SelectContent className="dark:bg-darkBlack dark:text-white dark:border-slate-700">
            <SelectItem value="Full time">Full Time</SelectItem>
            <SelectItem value="Part time">Part Time</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Job Categories */}
      <div className="w-full">
        <Select
          value={filters.category}
          onValueChange={(value: string) =>
            setFilters((prev) => ({ ...prev, category: value }))
          }
        >
          <SelectTrigger
            className="rounded-none shadow-none text-base py-7 w-full dark:border-slate-700 dark:text-white"
            style={{ backgroundColor: "transparent" }}
          >
            <SelectValue placeholder="Job Categories" />
          </SelectTrigger>
          <SelectContent className="dark:bg-darkBlack dark:text-white dark:border-slate-700">
            <SelectItem value="graphic_design">Graphic Design</SelectItem>
            <SelectItem value="marketing">Digital Marketing</SelectItem>
            <SelectItem value="web_development">Web Development</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Job Categories */}
      <div className="w-full">
        <Select
          value={filters.location}
          onValueChange={(value: string) =>
            setFilters((prev) => ({ ...prev, location: value }))
          }
        >
          <SelectTrigger
            className="rounded-none shadow-none text-base py-7 w-full dark:border-slate-700 dark:text-white"
            style={{ backgroundColor: "transparent" }}
          >
            <SelectValue placeholder="Locations" />
          </SelectTrigger>
          <SelectContent className="dark:bg-darkBlack dark:text-white dark:border-slate-700">
            <SelectItem value="Remote">Remote</SelectItem>
            <SelectItem value="dhaka">Dhaka</SelectItem>
            <SelectItem value="khulna">Khulna</SelectItem>
            <SelectItem value="rajshahi">Rajshahi</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* button */}
      {filters.type || filters.category || filters.location ? (
        <div>
          <button
            onClick={(): void => {
              setFilters({ type: "", category: "", location: "" });
              resetFilter();
            }}
            className="btn2 bg-red-500 rounded-none h-full w-full justify-center cursor-pointer"
          >
            Reset Filter <FaXmark />
          </button>
        </div>
      ) : (
        <div>
          <button className="btn2 rounded-none h-full w-full justify-center cursor-pointer">
            Find Jobs Now <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
