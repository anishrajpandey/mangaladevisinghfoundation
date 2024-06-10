"use client";

import { DialogBody } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleHamIconClick = (e: any) => {
    e.target.classList.toggle("open");
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // window.addEventListener("scroll", (e) => {
    //   let position = window.scrollY; // get current page-Y-offset
    //   window.addEventListener("scroll", () => {
    //     // Listen for scroll
    //     let scroll = window.scrollY; // get page-Y-offset value with every scroll
    //     //If the scroll is greater than position, user has scrolled down, else they scrolled up
    //     scroll > position ? console.log("down") : console.log("up");
    //     //Set the position equal to scroll
    //     position = scroll;
    //   });
    // });
  }, []);
  return (
    <nav className="navbar fixed z-50 bg-white flex justify-between h-24 px-2 md:px-9 items-center w-screen py-4 ">
      {/* navbar background */}
      <div
        className="absolute bg-blue-500 inset-0 h-screen z-10 pointer-events-none"
        id="openNavBg"
      ></div>

      {/* menu items */}
      <div
        id="menu"
        className={`block md:hidden ${
          !isNavOpen
            ? "-left-full opacity-0 pointer-events-none"
            : "left-0 opacity-100 pointer-events-auto"
        } fixed z-40 inset-0 flex justify-center items-center duration-700`}
      >
        <div className="flex flex-col md:flex-row text-white text-left uppercase font-semibold text-xl md:text-md space-3 ">
          {/* todo  */}
          {/* for the mobile VIEW */}
          <Link className="hover:text-amber-500 duration-300" href={"/"}>
            {" "}
            Home
          </Link>
          <div className="duration-300  group hover:text-amber-500 ">
            <Link className=" " href={"#"}>
              {" "}
              About
            </Link>
            <div className="dropdown absolute  min-h-fit  bg-gray-300 ounded-sm left-[50%] hidden group-hover:flex flex-col ">
              <div className="block w-full min-w-min hover:bg-white hover:text-amber-500 duration-300 px-3 py-2">
                <Link className=" " href={"/about"}>
                  Mangala Devi Singh
                </Link>
              </div>

              <div className="block w-full hover:bg-white hover:text-amber-500 duration-300 px-3 py-2">
                <Link className="" href={"/aboutorganization"}>
                  the organization
                </Link>
              </div>
            </div>
          </div>

          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            Events
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            News
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            Gallery
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            Contact
          </Link>
          <button className="rounded-md uppercase bg-blue-500 px-4 py-2 grid place-content-center text-white font-semibold w-24">
            Donate
          </button>
        </div>
      </div>
      <div
        id="hamIcon"
        onClick={handleHamIconClick}
        className="cursor-pointer isolate z-50 block md:hidden"
      >
        <svg
          className="pointer-events-none"
          width="60"
          height="70"
          viewBox="0 0 478 357"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="burger-menu-svgrepo-com 1">
            <path
              id="Line3"
              d="M79.6667 273.297H398.333"
              stroke="black"
              strokeWidth="35"
              strokeLinecap="round"
            />
            <path
              id="Line2"
              d="M79.6667 182.198H398.333"
              stroke="black"
              strokeWidth="35"
              strokeLinecap="round"
            />
            <path
              id="Line1"
              d="M79.6667 91.0989H398.333"
              stroke="black"
              strokeWidth="35"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
      <div>
        <Image
          src={"/logo.jpg"}
          width={300}
          height={100}
          alt="unable to load logo"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="hidden md:block"></div>
      <div className="md:flex  hidden  md:flex-row text-black text-left uppercase font-semibold  text-sm gap-7 relative ">
        {/* For the Desktop view */}
        <Link
          className="hover:text-amber-500 duration-300 flex gap-1 items-center  "
          href={"/"}
        >
          {" "}
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
            />
          </svg>
          Home
        </Link>
        <div className="duration-300  group relative">
          <Link
            className=" flex gap-1 items-center hover:text-amber-500 duration-300 "
            href={"#"}
          >
            {" "}
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            About
          </Link>
          <div
            className="dropdown absolute   min-h-fit w-72 bg-gray-300 ounded-sm  -translate-x-1/2
  hidden group-hover:flex flex-col "
          >
            <Link className=" " href={"/about"}>
              <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2">
                Mangala Devi Singh
              </div>
            </Link>

            <Link className="" href={"/aboutorganization"}>
              <div className=" h-16 flex justify-center items-center  w-full bg-white hover:bg-gray-200 hover:text-amber-500 duration-300 px-3 py-2">
                the organization
              </div>
            </Link>
          </div>
        </div>
        <div className="duration-300  cursor-pointer group relative">
          <Link
            className="hover:text-amber-500 duration-300  flex gap-1 items-center"
            href={"/events"}
          >
            {" "}
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
              />
            </svg>
            Events
          </Link>

          {/* Events dropdown */}
          <div
            className="dropdown absolute   min-h-fit w-72 bg-gray-300 rounded-sm  -translate-x-1/2
  hidden group-hover:flex flex-col "
          >
            {/* <div className=" "> */}
            <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative group/event1 border">
              Year : 2080
              {/* sub dropdown for event */}
              <div className="dropdown absolute hidden top-0  min-h-fit w-72 bg-gray-300 rounded-sm left-full flex-col group-hover/event1:flex">
                <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative">
                  <Link className=" " href={"/events/1"}>
                    Book Distribution{/* sub dropdown for event */}
                  </Link>
                </div>
                <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative">
                  <Link className=" " href={"/events/2"}>
                    Three Months Basic Sewing training
                    {/* sub dropdown for event */}
                  </Link>
                </div>
                <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative">
                  <Link className=" " href={"/about"}>
                    Event 1{/* sub dropdown for event */}
                  </Link>
                </div>
                <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative">
                  <Link className=" " href={"/about"}>
                    Event 1{/* sub dropdown for event */}
                  </Link>
                </div>
                <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative">
                  <Link className=" " href={"/about"}>
                    Event 1{/* sub dropdown for event */}
                  </Link>
                </div>

                <div className=" h-16 flex justify-center items-center  w-full bg-white hover:bg-gray-200 hover:text-amber-500 duration-300 px-3 py-2">
                  <Link className="" href={"/aboutorganization"}>
                    Event 2
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* 
            <div className=" h-16 flex justify-center items-center  w-full bg-white hover:bg-gray-200 hover:text-amber-500 duration-300 px-3 py-2"> */}
            <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative group/event2 ">
              Year : 2081
              <div className="dropdown absolute hidden top-0  min-h-fit w-72 bg-gray-300 rounded-sm left-full flex-col group-hover/event2:flex">
                <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative">
                  <Link className=" " href={"/about"}>
                    Event 2{/* sub dropdown for event */}
                  </Link>
                </div>
                <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative">
                  <Link className=" " href={"/about"}>
                    Event 2{/* sub dropdown for event */}
                  </Link>
                </div>
                <div className=" w-full min-w-min h-16 flex justify-center items-center  hover:bg-gray-200 bg-white hover:text-amber-500 duration-300 px-3 py-2 relative">
                  <Link className=" " href={"/about"}>
                    Event 2{/* sub dropdown for event */}
                  </Link>
                </div>
              </div>
              {/* sub events */}
            </div>
          </div>
        </div>
        {/* </div> */}
        <Link
          className="hover:text-amber-500 duration-300  flex gap-1 items-center"
          href={"#"}
        >
          {" "}
          <svg
            className="w-6 h-6 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"
            />
          </svg>
          News
        </Link>
        <Link
          className="hover:text-amber-500 duration-300  flex gap-1 items-center"
          href={"#"}
        >
          {" "}
          <svg
            className="w-6 h-6e"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
              clipRule="evenodd"
            />
          </svg>
          Gallery
        </Link>
        <Link
          className="hover:text-amber-500 duration-300  flex gap-1 items-center"
          href={"#"}
        >
          {" "}
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
            />
          </svg>
          Contact
        </Link>
      </div>

      <button className="rounded-md uppercase bg-blue-500 px-4 py-2 grid place-content-center text-white font-semibold gap-0 w-fit ">
        Donate
      </button>
    </nav>
  );
};

export default Navbar;
