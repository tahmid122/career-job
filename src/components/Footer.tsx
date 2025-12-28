import Link from "next/link";
import {
  FaArrowRight,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import Image from "next/image";
const Footer = () => {
  return (
    <section className="pt-10 pb-5 bg-slate-900">
      <div className="container">
        <div className="pt-12.5">
          {/* Upper */}
          <div className="grid grid-cols-1 xl:grid-cols-4 pb-10 gap-10">
            <div>
              <div className="flex items-center">
                <Image src={"/logo.png"} height={100} width={100} alt="logo" />
                <h1 className="text-2xl font-bold text-white">CareerJob</h1>
              </div>
              <p className="text-gray-300 text-justify">
                Discover the latest in Job with CareJob. Your go-to source for
                insights, trends, and Internship. Explore our user-friendly
                platform for a seamless experience. Elevate your Job journey
                with us.
              </p>
            </div>
            <div className="xl:place-items-center">
              <div>
                <h3 className="text-white text-xl font-bold mb-5">
                  Information
                </h3>
                <ul className="text-gray-300">
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Looking For A Jobs?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      International Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Upload Resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Setting & Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Career Advice
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Freelance Category
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:place-items-center">
              <div>
                <h3 className="text-white text-xl font-bold mb-5">
                  Quick Jobs
                </h3>
                <ul className="text-gray-300">
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Finance & Banking
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Business & Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Creative Designer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Web Developer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/"}
                      className="transition-all duration-300 hover:text-white overflow-hidden relative py-1 inline-block group"
                    >
                      <span className="absolute w-full h-px bg-white opacity-50 left-0 top-10 group-hover:opacity-100 group-hover:top-7 transition-all duration-300"></span>
                      Senior Manager
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-5">
                News Letters
              </h3>
              <p className="text-gray-300">
                Subscribe for job alerts, career tips, and exclusive
                opportunities
              </p>
              <div className="mt-5 space-y-2">
                <input
                  type="email"
                  className="outline-none p-3 border border-gray-300 rounded-full placeholder:text-gray-300 w-full text-gray-300"
                  placeholder="Enter your email"
                />
                <button className="btn w-full rounded-full justify-center">
                  Subscribe <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          {/*  lower */}
          <div className="border-t border-t-gray-700 pt-5 flex items-center justify-between flex-col xl:flex-row gap-2">
            <p className="text-gray-200">
              &copy; Copyright 2024
              <Link href={"/"} className="text-likeGreen">
                {" "}
                CareerJob{" "}
              </Link>
              All Rights Reserved
            </p>

            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/TahmidAlamJG"
                target="_blank"
                className="h-12 w-12 rounded-full bg-[#354352] flex items-center justify-center text-white transition-all duration-300 relative overflow-hidden group "
              >
                <span className="block h-full w-full rounded-full absolute transition-all duration-300 left-0 right-0 bg-likeOrange translate-x-full group-hover:-translate-x-[40%] z-10"></span>
                <FaFacebookF className="text-xl z-20" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdtahmidalam/"
                target="_blank"
                className="h-12 w-12 rounded-full bg-[#354352] flex items-center justify-center text-white transition-all duration-300 relative overflow-hidden group "
              >
                <span className="block h-full w-full rounded-full absolute transition-all duration-300 left-0 right-0 bg-likeOrange translate-x-full group-hover:-translate-x-[40%] z-10"></span>
                <FaLinkedin className="text-xl z-20" />
              </a>
              <a
                href="https://github.com/tahmid122"
                target="_blank"
                className="h-12 w-12 rounded-full bg-[#354352] flex items-center justify-center text-white transition-all duration-300 relative overflow-hidden group "
              >
                <span className="block h-full w-full rounded-full absolute transition-all duration-300 left-0 right-0 bg-likeOrange translate-x-full group-hover:-translate-x-[40%] z-10"></span>
                <FaGithub className="text-xl z-20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
