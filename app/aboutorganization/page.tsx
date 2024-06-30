import { Blockquote } from "flowbite-react";
import Image from "next/image";
import React from "react";
import Heartpattern from "./Heartpattern";
import {
  FacebookIcon,
  InstaIcon,
  MailIcon,
  XIcon,
} from "../_globalcomponents/SocialIcons";

const page = () => {
  const boardMembers = [
    {
      Name: "सृजना श्रेष्ठ सिंह ",
      Designation: "अधक्ष्य ",
      Photo: "/images/srijana.jpg",
      Socials: [
        <FacebookIcon link={""} key={""} />,
        <XIcon link={""} key={""} />,
        <MailIcon link={"mailto:srijanasingh@gmail.com"} key={""} />,
      ],
    },
    {
      Name: "भारती सिलवाल गिरि",
      Designation: "उपाध्यक्ष् ",
      Photo: "/placeholder.jpeg",
      Socials: [],
    },
    {
      Name: "  ईन्द्र मान सिंह सुवाल्",
      Designation: "महासचिव् ",
      Photo: "/placeholder.jpeg",
      Socials: [<MailIcon link={""} key={""} />],
    },
    {
      Name: " सारीता श्रेष्ठ",
      Designation: "कोसाधक्ष्य ",
      Photo: "/placeholder.jpeg",
      Socials: [<MailIcon link={""} key={""} />],
    },
    {
      Name: "शशी प्रधान",
      Designation: "   सदस्य",
      Photo: "/placeholder.jpeg",
      Socials: [<MailIcon link={""} key={""} />],
    },
    {
      Name: "  कल्याणी रिजाल",
      Designation: "  सदस्य ",
      Photo: "/placeholder.jpeg",
      Socials: [<MailIcon link={""} key={""} />],
    },
    {
      Name: "  राज्य लक्ष्मी श्रेष्ठ",
      Designation: "  सदस्य ",
      Photo: "/placeholder.jpeg",
      Socials: [<MailIcon link={""} key={""} />],
    },
    {
      Name: "  बिष्णु देवी पुडासैनि",
      Designation: "  सदस्य ",
      Photo: "/placeholder.jpeg",
      Socials: [<MailIcon link={""} key={""} />],
    },
    {
      Name: "  निकिता पान्डे",
      Designation: "  सदस्य ",
      Photo: "/placeholder.jpeg",
      Socials: [<MailIcon link={""} key={""} />],
    },
    {
      Name: "  आकृती राणा",
      Designation: "  सदस्य ",
      Photo: "/placeholder.jpeg",
      Socials: [<MailIcon link={""} key={""} />],
    },
    {
      Name: "  मिन रत्न बज्राचार्य",
      Designation: "  सदस्य ",
      Photo: "/placeholder.jpeg",
      Socials: [<MailIcon link={""} key={""} />],
    },
  ];

  return (
    <main className="p-2 pt-24 md:p-24 grid grid-cols-1 gap-16">
      <div>
        {/* <h1 className="text-2xl text-center md:text-5xl  pt-4 font-bold text-red-600 uppercase">
          About the Organization
        </h1> */}
        <Image src={"/logo.jpg"} width={1000} height={400} alt="Logo" />
        <h2 className="text-lg my-2 md:text-2xl text-gray-500 font-bold">
          ...an independent , non partisan institution for social welfare and
          women empowerment{" "}
        </h2>
      </div>
      <div className="">
        <p className="text-lg md:text-xl px-12  text-gray-900  text-center font-semibold">
          The Mangala Devi Singh Foundation is an organization established in
          honor of Mangala Devi Singh, a notable figure in the feminist and
          social reform movement in Nepal. The foundation aims to continue her
          legacy by promoting women&apos;s rights, education, and social
          welfare. While specific details about the foundation&apos;s activities
          and programs may vary, its general objectives typically include:
        </p>

        <ul className="flex flex-col gap-8 py-8 relative">
          <div className="absolute w-1 bg-black h-full left-1/2 -z-10"></div>

          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-105 duration-75 transition rounded-md text-right text-gray-800 px-12 py-12 font-bold text-2xl w-screen sm:w-[50vw] mr-auto bg-purple-200">
            <span className="group-hover:hidden"> Empowerment of Women</span>
            <span className="text-sm  font-normal hidden group-hover:block">
              The foundation works to empower women by providing educational
              opportunities, vocational training, and support for womens
              entrepreneurship.
            </span>
          </li>
          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-105 duration-75 transition rounded-md text-left text-gray-800 px-12 py-12 font-bold text-2xl w-screen sm:w-[50vw] ml-auto bg-purple-200">
            <span className="group-hover:hidden"> Advocacy and Awareness</span>
            <span className="text-sm  font-normal hidden group-hover:block">
              It raises awareness about womens rights issues and advocates for
              policies that promote gender equality and social justice.
            </span>
          </li>
          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-105 duration-75 transition rounded-md text-right text-gray-800 px-12 py-12 font-bold text-2xl w-screen sm:w-[50vw] mr-auto bg-purple-200">
            <span className="group-hover:hidden"> Social Welfare Programs</span>
            <span className="text-sm  font-normal hidden group-hover:block">
              The foundation may be involved in various social welfare
              initiatives, such as health camps, legal aid services, and support
              for marginalized communities.
            </span>
          </li>
          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-105 duration-75 transition rounded-md text-left text-gray-800 px-12 py-12 font-bold text-2xl w-screen sm:w-[50vw] ml-auto bg-purple-200">
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
          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-105 duration-75 transition rounded-md text-right  mr-auto text-gray-800 px-12 py-12 font-bold text-2xl w-screen sm:w-[50vw] bg-purple-200">
            <span className="group-hover:hidden">
              {" "}
              Advancing Gender Equality
            </span>
            <span className="text-sm  font-normal hidden group-hover:block">
              Championing policies and initiatives that ensure equal rights and
              opportunities for women and girls. Combatting gender-based
              violence and discrimination through advocacy and education.
            </span>
          </li>

          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-105 duration-75 transition rounded-md text-left text-gray-800 px-12 py-12 font-bold text-2xl w-screen sm:w-[50vw] ml-auto bg-purple-200">
            <span className="group-hover:hidden"> Promoting Education</span>
            <span className="text-sm  font-normal hidden group-hover:block">
              Providing scholarships and educational resources to
              underprivileged girls and women. Supporting literacy programs and
              vocational training to enhance skills and employability
            </span>
          </li>

          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-105 duration-75 transition rounded-md text-right  mr-auto text-gray-800 px-12 py-12 font-bold text-2xl w-screen sm:w-[50vw] bg-purple-200">
            <span className="group-hover:hidden"> Leadership and Advocacy</span>
            <span className="text-sm  font-normal hidden group-hover:block">
              Training women to become leaders and change-makers in their
              communities. Hosting seminars, workshops, and conferences to
              discuss and address gender issues.
            </span>
          </li>
          <li className="cursor-pointer group hover:bg-purple-100 hover:scale-105 duration-75 transition rounded-md text-left text-gray-800 px-12 py-12 font-bold text-2xl w-screen sm:w-[50vw] ml-auto bg-purple-200">
            <span className="group-hover:hidden">
              Cultural Preservation and Awareness
            </span>
            <span className="text-sm  font-normal hidden group-hover:block">
              Preserving and promoting the cultural heritage of Nepal while
              integrating progressive values. Highlighting the contributions of
              women in Nepalese history and society.
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

      <Heartpattern text={""} />
      <h1
        id="boardmembers"
        className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Our&nbsp;
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Board Members{" "}
        </span>
      </h1>

      <div className="flex gap-12 flex-wrap justify-center">
        {boardMembers.map(({ Name, Designation, Socials, Photo }, index) => {
          return (
            <div
              className="border shadow-md flex  gap-2 flex-col items-center justify-center"
              key={index}
            >
              <div className="bg-gray-400 height-[300px] w-full ">
                <Image
                  src={Photo}
                  width={300}
                  height={400}
                  className="w-72 h-80"
                  alt=""
                />
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {Name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {Designation}
              </p>
              <div className="flex gap-2 pb-2">{Socials}</div>
            </div>
          );
        })}

        {/*
         */}
        {/* <div className="border shadow-md flex  gap-2 flex-col items-center justify-center">
          <div className="bg-gray-400 height-[300px] w-full ">
            <Image
              src={"/images/dilip.jpg"}
              width={300}
              height={400}
              className="w-72 h-80"
              alt=""
            />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dilip Shrestha
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Manager
          </p>
          <div className="flex gap-2 pb-2">
            <FacebookIcon
              link={"https://www.facebook.com/profile.php?id=100016064358963"}
            />
            <InstaIcon link={"https://www.instagram.com/dilip_shrestha57/"} />
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default page;
