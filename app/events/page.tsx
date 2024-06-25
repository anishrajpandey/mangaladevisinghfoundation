"use client";

import { Card } from "flowbite-react";

import React from "react";
import data from "./data";
import Link from "next/link";

const page = () => {
  return (
    <main className="py-24">
      <h2 className="text-3xl px-7 py-12 font-semibold">
        Events and Activities
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {data.map(({ id, titleNepali, images, descEnglish, descNepali }) => {
          return (
            <Link key={id} href={`/events/${id}`}>
              <Card
                className="max-w-sm"
                imgAlt={descEnglish}
                imgSrc={`/eventphotos/${images[0]}`}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {titleNepali}{" "}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {descNepali}
                </p>
              </Card>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default page;
