"use client";
enum Status {
  open = "open",
  close = "close",
}
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaMagnifyingGlass, FaUser, FaXmark } from "react-icons/fa6";
export default function Navbar() {
  // states
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  // navbar close and open
  const handleNavbar = (status: string) => {
    if (status === "open") {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        `fixed w-full top-0 z-50 transition-all duration-300 py-3 xl:py-5 ${
          isSticky ? "text-darkBlack" : "text-white"
        }`,
        isSticky
          ? "bg-white dark:bg-darkBlack backdrop-blur shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href={"/"} className="flex items-center gap-1">
          <div className="h-10 w-10 relative">
            <Image src={"/logo.png"} fill alt="logo" />
          </div>
          <span className="text-2xl font-bold dark:text-white">CareerJob</span>
        </Link>
        {/* Toggle */}
        <span className="xl:hidden dark:text-white">
          {isShow ? (
            <FaXmark
              className="text-2xl cursor-pointer"
              onClick={() => handleNavbar(Status.close)}
            />
          ) : (
            <FaBars
              className="text-xl cursor-pointer"
              onClick={() => handleNavbar(Status.open)}
            />
          )}
        </span>
        {/* Mobile nav */}
        <div
          className={`absolute left-0 top-16 bg-white text-darkBlack dark:text-white dark:bg-darkBlack w-full z-999 shadow-sm p-5 flex xl:hidden flex-col gap-2 transition-all duration-300 ${
            isShow ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center  gap-3 text-base font-semibold">
            <li className="hover:text-likeOrange relative transition-all duration-200 after:absolute after:block after:h-0.5 after:bg-likeOrange after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 after:transition-all after:duration-300">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-likeOrange relative transition-all duration-200 after:absolute after:block after:h-0.5 after:bg-likeOrange after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 after:transition-all after:duration-300">
              <Link href={"/jobs"}>Jobs</Link>
            </li>
            <li className="hover:text-likeOrange relative transition-all duration-200 after:absolute after:block after:h-0.5 after:bg-likeOrange after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 after:transition-all after:duration-300">
              <Link href={"/bookmarks"}>Bookmarks</Link>
            </li>
            <li>
              <Link
                href="/sign-in"
                className="bg-likeOrange py-3 px-8 text-base rounded-full text-white font-semibold transition-all duration-200 hover:bg-likeGreen flex items-center gap-1"
              >
                <FaUser className="text-base" /> Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="bg-likeGreen py-3 px-8 text-base rounded-full text-white font-semibold transition-all duration-200 hover:bg-likeOrange flex items-center gap-1"
              >
                <FaMagnifyingGlass className="text-base" /> Find Jobs
              </Link>
            </li>
          </ul>
        </div>
        {/* Nav links */}
        <ul className="hidden xl:flex items-center  gap-5 text-base font-semibold dark:text-white">
          <li className="hover:text-likeOrange relative transition-all duration-200 after:absolute after:block after:h-0.5 after:bg-likeOrange after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 after:transition-all after:duration-300">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-likeOrange relative transition-all duration-200 after:absolute after:block after:h-0.5 after:bg-likeOrange after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 after:transition-all after:duration-300">
            <Link href={"/jobs"}>Jobs</Link>
          </li>
          <li className="hover:text-likeOrange relative transition-all duration-200 after:absolute after:block after:h-0.5 after:bg-likeOrange after:w-0 after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all hover:after:duration-300 after:transition-all after:duration-300">
            <Link href={"/bookmarks"}>Bookmarks</Link>
          </li>
        </ul>
        {/* Buttons */}
        <div className="hidden xl:flex items-center gap-1">
          <Link
            href="/sign-in"
            className="bg-likeOrange py-3 px-8 text-base rounded-full text-white font-semibold transition-all duration-200 hover:bg-likeGreen flex items-center gap-1"
          >
            <FaUser className="text-base" /> Sign In
          </Link>
          <Link
            href="/jobs"
            className="bg-likeGreen py-3 px-8 text-base rounded-full text-white font-semibold transition-all duration-200 hover:bg-likeOrange flex items-center gap-1"
          >
            <FaMagnifyingGlass className="text-base" /> Find Jobs
          </Link>
        </div>
      </nav>
    </header>
  );
}
