import Form from "@/components/JobDetails/Form";
import Image from "next/image";
import Link from "next/link";
import {
  FaAngleRight,
  FaArrowRight,
  FaDollarSign,
  FaLocationDot,
} from "react-icons/fa6";

const JobDetails = () => {
  return (
    <section className="min-h-screen bg-[#F5F7FC]">
      {/* Banner */}
      <div className="h-100 xl:h-125 border bg-[linear-gradient(to_right,#000000b8,#000000b8),url('/jobdetailsbanner.jpg')] bg-center bg-cover flex items-center justify-center text-white">
        <div>
          <h1 className="text-4xl mb-4 font-bold text-white">Job Details</h1>
          <p className="flex items-center gap-1 justify-center font-medium text-white text-lg">
            Home <FaAngleRight /> Job Details
          </p>
        </div>
      </div>
      {/* main */}
      <div className="container">
        <div className="px-2.5 xl:max-w-[80%] mx-auto border-t-8 border-t-likeOrange -top-20 relative bg-white shadow-sm">
          <div className="p-2 xl:p-10 space-y-10">
            {/* top part */}
            <div className="flex xl:flex-row flex-col gap-5 xl:gap-0 items-start xl:items-center justify-between">
              {/* top */}
              <div className="space-y-1 xl:space-y-2">
                <div className="flex xl:flex-row flex-col items-start gap-2 xl:gap-4">
                  <div className="h-16 w-16 relative">
                    <Image
                      src={"/slack.webp"}
                      fill
                      alt="company logo"
                      className="p-2 object-cover"
                    />
                  </div>
                  <div className="space-y-2 xl:space-y-4">
                    <span className="inline-block py-1 px-2 uppercase text-likeGreen rounded bg-gray-100 font-bold text-xs">
                      Full time
                    </span>
                    <h3 className="text-lg font-bold">
                      Senior Graphics Designer
                    </h3>
                    {/* Skills */}
                    <div className="flex items-center flex-wrap gap-1">
                      <span className="block py-2 px-3 uppercase text-slate-500 rounded bg-gray-100 font-bold text-xs">
                        Photoshop
                      </span>
                      <span className="block py-2 px-3 uppercase text-slate-500 rounded bg-gray-100 font-bold text-xs">
                        Illustrator
                      </span>
                      <span className="block py-2 px-3 uppercase text-slate-500 rounded bg-gray-100 font-bold text-xs">
                        Canva
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* middle */}
              <div className="flex items-center gap-2">
                <span className="flex items-end gap-1 text-sm text-slate-600">
                  <FaLocationDot className="text-xl text-likeGreen" /> Florida
                </span>
                <div className="flex items-center gap-1">
                  <span className="flex items-center">
                    <FaDollarSign className="text-likeGreen text-base" />
                  </span>
                  <span className="flex items-center text-base text-slate-600 leading-0">
                    18k - 30k
                  </span>
                </div>
              </div>
              {/* Last */}
              <Link href={"/"} className="btn">
                Apply Job <FaArrowRight />
              </Link>
            </div>
            {/* Middle */}
            <div className="border-t-2 border-t-gray-100 py-10 flex xl:flex-row flex-col items-start gap-5">
              {/* left */}
              <div className="flex-1 space-y-10">
                {/* section 1 */}
                <div>
                  <h3 className="text-2xl font-semibold mb-5">
                    Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-base text-gray-600 font-medium">
                      <Image
                        src={"/tick.png"}
                        width={20}
                        height={20}
                        alt="tick"
                        className="mt-1"
                      />{" "}
                      Create visually appealing graphics, illustrations, and
                      layouts for various projects.
                    </li>
                    <li className="flex items-start gap-2 text-base text-gray-600 font-medium">
                      <Image
                        src={"/tick.png"}
                        width={20}
                        height={20}
                        alt="tick"
                        className="mt-1"
                      />{" "}
                      Collaborate with clients and internal teams to understand
                      design requirements and objectives.
                    </li>
                  </ul>
                </div>
                {/* section 2 */}
                <div>
                  <h3 className="text-2xl font-semibold mb-5">Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-base text-gray-600 font-medium">
                      <Image
                        src={"/tick.png"}
                        width={20}
                        height={20}
                        alt="tick"
                        className="mt-1"
                      />{" "}
                      Bachelor’s degree in Graphic Design, Visual Arts, or a
                      related field.
                    </li>
                    <li className="flex items-start gap-2 text-base text-gray-600 font-medium">
                      <Image
                        src={"/tick.png"}
                        width={20}
                        height={20}
                        alt="tick"
                        className="mt-1"
                      />{" "}
                      Proven experience as a graphics designer, with a strong
                      portfolio showcasing diverse projects.
                    </li>
                  </ul>
                </div>
              </div>
              {/* right */}
              <div className="xl:w-[35%]  space-y-5">
                {/* top */}
                <div className="border p-5">
                  <h3 className="text-2xl font-semibold mb-5">
                    Job Information
                  </h3>
                  <ul className="space-y-2">
                    <li className="w-full flex text-base">
                      <span className="text-gray-600 font-semibold min-w-1/2">
                        Company Name
                      </span>
                      InnoTech Solution
                    </li>
                    <li className="w-full flex text-base">
                      <span className="text-gray-600 font-semibold min-w-1/2">
                        Job Title
                      </span>
                      Senior Graphics Designer
                    </li>
                    <li className="w-full flex text-base">
                      <span className="text-gray-600 font-semibold min-w-1/2">
                        Job Type
                      </span>
                      Full Time
                    </li>
                    <li className="w-full flex text-base">
                      <span className="text-gray-600 font-semibold min-w-1/2">
                        Salary
                      </span>
                      $1800
                    </li>
                  </ul>
                </div>
                {/* bottom */}
                <div className="border p-5">
                  <h3 className="text-2xl font-semibold mb-5">
                    Send Us Message
                  </h3>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
