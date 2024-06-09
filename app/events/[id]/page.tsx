"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import data from "./../data";
const Page = () => {
  const [SelectedEvent, setSelectedEvent] = useState({});
  let Allparams = useSearchParams();
  let EventID = Allparams.get("id") || 1;

  useEffect(() => {
    console.log(EventID);
    console.log(data);
    setSelectedEvent(data.filter(({ id }) => id === +EventID));
  }, []);

  return (
    <>
      {SelectedEvent ? (
        <main className="py-24 px-2 md:px-24 w-screen">
          <div className="flex gap-2 py-12 items-center">
            <Image
              src={"/eventsymbol.svg"}
              width={70}
              height={70}
              alt="error"
            />
            <div>
              <h1 className="text-gray-800 text-2xl md:text-4xl font-bold">
                Title of the Event in english
              </h1>
              <h2 className="text-gray-800 text-lg md:text-2xl font-semibold">
                Title of the Event in Nepali
              </h2>
              <h2 className="text-gray-800 text-md italic">
                23rd February 2023
              </h2>
            </div>
          </div>

          <section>
            <div className="w-full min-h-[60vh] relative">
              <Image src={"/eventphotos/0101.jpg"} fill alt="image" />
            </div>
            <p className="text-md md:text-lg py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              quibusdam ducimus dolores! Maxime, eius. Odio, esse sint. Iure,
              consectetur voluptas? Doloribus odit eius, ut cum nemo quidem
              eveniet laboriosam. Obcaecati perspiciatis modi cum placeat
              architecto, nam sequi hic suscipit repudiandae neque reprehenderit
              odio praesentium?
            </p>

            <p className="text-md md:text-lg py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              quibusdam ducimus dolores! Maxime, eius. Odio, esse sint. Iure,
              consectetur voluptas? Doloribus odit eius, ut cum nemo quidem
              eveniet laboriosam. Obcaecati perspiciatis modi cum placeat
              architecto, nam sequi hic suscipit repudiandae neque reprehenderit
              odio praesentium?
            </p>

            <div className="my-4">
              <Image
                src={"/eventphotos/0102.jpg"}
                height={700}
                width={700}
                style={{ width: "100%", height: "100%" }}
                alt="image"
              />
            </div>
            <div className="my-4">
              <Image
                src={"/eventphotos/0103.jpg"}
                height={700}
                width={700}
                style={{ width: "100%", height: "100%" }}
                alt="image"
              />
            </div>
          </section>
        </main>
      ) : (
        <div> No events found</div>
      )}
    </>
  );
};

export default Page;
