import { Blockquote } from "flowbite-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="p-2 pt-24 md:p-24 grid grid-cols-1 gap-16">
      <div>
        <Image src={"/logo.jpg"} width={1000} height={400} alt="Logo" />
        <h2 className="text-lg my-2 md:text-2xl text-gray-500 font-bold">
          ...an independent , non partisan institution for social welfare and
          women empowerment{" "}
        </h2>
      </div>

      <div className="">
        <p className="text-lg md:text-xl px-12 pt-12 text-gray-900  text-center font-semibold">
          The Mangala Devi Singh Foundation is an organization established in
          honor of Mangala Devi Singh, a notable figure in the feminist and
          social reform movement in Nepal. The foundation aims to continue her
          legacy by promoting women&apos;s rights, education, and social
          welfare. While specific details about the foundation&apos;s activities
          and programs may vary, its general objectives typically include:
        </p>

        <ul className="flex flex-col gap-8 py-8 relative">
          <div className="absolute w-1 bg-black h-full left-1/2 -z-10"></div>

          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-110 duration-75 transition rounded-md text-right text-gray-800 px-12 py-12 font-bold text-2xl w-[50vw] mr-auto bg-purple-200">
            <span className="group-hover:hidden"> Empowerment of Women</span>
            <span className="text-sm  font-normal hidden group-hover:block">
              The foundation works to empower women by providing educational
              opportunities, vocational training, and support for womens
              entrepreneurship.
            </span>
          </li>
          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-110 duration-75 transition rounded-md text-left text-gray-800 px-12 py-12 font-bold text-2xl w-[50vw] ml-auto bg-purple-200">
            <span className="group-hover:hidden"> Advocacy and Awareness</span>
            <span className="text-sm  font-normal hidden group-hover:block">
              It raises awareness about womens rights issues and advocates for
              policies that promote gender equality and social justice.
            </span>
          </li>
          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-110 duration-75 transition rounded-md text-right text-gray-800 px-12 py-12 font-bold text-2xl w-[50vw] mr-auto bg-purple-200">
            <span className="group-hover:hidden"> Social Welfare Programs</span>
            <span className="text-sm  font-normal hidden group-hover:block">
              The foundation may be involved in various social welfare
              initiatives, such as health camps, legal aid services, and support
              for marginalized communities.
            </span>
          </li>
          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-110 duration-75 transition rounded-md text-left text-gray-800 px-12 py-12 font-bold text-2xl w-[50vw] ml-auto bg-purple-200">
            <span className="group-hover:hidden">
              {" "}
              Preserving Mangala Devi Singh&apos;s Legacy{" "}
            </span>
            <span className="text-sm  font-normal hidden group-hover:block">
              By organizing events, seminars, and publications, the foundation
              aims to keep alive the memory and contributions of Mangala Devi
              Singh to Nepalese society.
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Our&nbsp;
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Mission Statement
          </span>
        </h1>

        <div className="bg-purple-100 p-4  rounded-sm border-l-8 border-purple-700">
          <svg
            className="my-8 h-12 w-12 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote className="font-normal">
            <h2 className="font-extrabold">
              {" "}
              Empowering Women, Enriching Communities:
            </h2>{" "}
            The Mangala Devi Singh Foundation is dedicated to advancing gender
            equality, promoting education, and fostering social justice in
            Nepal. Inspired by the pioneering spirit of Mangala Devi Singh, we
            strive to uplift women and marginalized communities through
            advocacy, education, and sustainable development initiatives.
            Together, we create a brighter future where every individual can
            thrive.
          </Blockquote>
        </div>
      </div>
    </main>
  );
};

export default page;
