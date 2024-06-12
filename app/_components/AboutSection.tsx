import Image from "next/image";
import React from "react";

const AboutSection = ({ detail }: { detail: Boolean }) => {
  return (
    <section className="py-12 px-2 md:px-12 bg-slate-50 ">
      <h3 className="text-center text-lg md:text-xl uppercase tracking-wide my-2 font-semibold">
        <span className="text-purple-600 ">♥️ Mangala Devi Singh</span>
      </h3>
      <div className="flex flex-row gap-4 flex-wrap justify-around items-center my-4">
        <div
          className={` ${
            !detail ? "rounded-lg md:rounded-[100%]" : "rounded-sm"
          } shadow-lg overflow-hidden `}
        >
          <Image
            src="/photo.jpeg"
            width={400}
            height={400}
            alt="Mangala Devi Singh Photo"
          />
        </div>

        <div className="w-full px-12 md:w-1/2">
          <p className="text-md md:text-lg text-gray-800  ">
            Mangala Devi Singh was a prominent Nepali feminist, social worker,
            and writer. She is best known for her pioneering efforts in
            advancing womens rights and social reform in Nepal. Born on January
            15, 1925, Mangala Devi Singh played a significant role in the
            feminist movement in Nepal during the mid-20th century. She was one
            of the founding members of the Nepal Women&apos;s Association (NWA),
            established in 1947, which aimed to empower women and address issues
            such as women&apos;s education, health, and social status.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
