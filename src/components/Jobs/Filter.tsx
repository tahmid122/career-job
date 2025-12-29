import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaArrowRight } from "react-icons/fa6";
const Filter = () => {
  return (
    <div className="py-10 grid grid-cols-1 xl:grid-cols-4 gap-2 xl:gap-5">
      {/* Job Type */}
      <div className="w-full">
        <Select>
          <SelectTrigger className="rounded-none shadow-none text-base py-7 w-full">
            <SelectValue placeholder="Job Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full_time">Full Time</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Job Categories */}
      <div className="w-full">
        <Select>
          <SelectTrigger className="rounded-none shadow-none text-base py-7 w-full">
            <SelectValue placeholder="Job Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="graphic_design">Graphic Design</SelectItem>
            <SelectItem value="digital_marketing">Digital Marketing</SelectItem>
            <SelectItem value="web_development">Web Development</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Job Categories */}
      <div className="w-full">
        <Select>
          <SelectTrigger className="rounded-none shadow-none text-base py-7 w-full">
            <SelectValue placeholder="Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dhaka">Dhaka</SelectItem>
            <SelectItem value="khulna">Khulna</SelectItem>
            <SelectItem value="rajshahi">Rajshahi</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* button */}
      <div>
        <button className="btn2 rounded-none h-full w-full justify-center cursor-pointer">
          Find Jobs Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Filter;
