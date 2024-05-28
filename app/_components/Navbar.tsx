"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleHamIconClick = (e: any) => {
    e.target.classList.toggle("open");
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="navbar fixed z-50 bg-white flex justify-between h-24 px-2 md:px-9 items-center w-screen py-4 ">
      {/* navbar background */}
      <div
        className="absolute bg-blue-500 inset-0 z-10 pointer-events-none"
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
        <div className="flex flex-col md:flex-row text-white text-left uppercase font-semibold text-xl md:text-md space-3">
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            Home
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            Mangala Devi Singh
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            About us
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            What We Do
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            Events
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            Publication Press Release
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            Gallery
          </Link>
          <Link className="hover:text-amber-500 duration-300" href={"#"}>
            {" "}
            Contact
          </Link>
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
          style={{ width: "300px", height: "80px" }}
        />
      </div>
      <div className="hidden md:block"></div>
      <div className="flex flex-col md:flex-row text-black text-left uppercase font-semibold  text-sm gap-4 ">
        <Link className="hover:text-amber-500 duration-300" href={"#"}>
          {" "}
          Home
        </Link>

        <Link className="hover:text-amber-500 duration-300" href={"#"}>
          {" "}
          About us
        </Link>
        <Link className="hover:text-amber-500 duration-300" href={"#"}>
          {" "}
          What We Do
        </Link>
        <Link className="hover:text-amber-500 duration-300" href={"#"}>
          {" "}
          Events
        </Link>
        <Link className="hover:text-amber-500 duration-300" href={"#"}>
          {" "}
          Publication Press Release
        </Link>
        <Link className="hover:text-amber-500 duration-300" href={"#"}>
          {" "}
          Gallery
        </Link>
        <Link className="hover:text-amber-500 duration-300" href={"#"}>
          {" "}
          Contact
        </Link>
      </div>

      <button className="rounded-md uppercase bg-blue-500 px-4 py-2 grid place-content-center text-white font-semibold w-24">
        Donate
      </button>
    </nav>
  );
};

export default Navbar;
