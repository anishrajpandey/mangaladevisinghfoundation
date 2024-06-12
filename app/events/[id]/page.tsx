"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import data from "./../data";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  const [SelectedEvent, setSelectedEvent] = useState({
    id: 3,
    titleEnglish: ``,
    titleNepali: ``,
    descEnglish: ``,
    descNepali: ``,
    date: ``,
    images: [""],
  });

  let EventID = pathname.split("/").at(-1) || 1;
  function loadEvents() {
    let filteredData = data.filter(({ id }) => {
      return id === +EventID;
    })[0];
    setSelectedEvent({
      id: filteredData.id,
      titleEnglish: filteredData.titleEnglish,
      titleNepali: filteredData.titleNepali,
      descEnglish: filteredData.descEnglish,
      descNepali: filteredData.descNepali,
      date: filteredData.date,
      images: filteredData.images,
    });
  }

  useEffect(() => {
    loadEvents();
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
                {SelectedEvent.titleNepali} {/* {SelectedEvent.titlee} */}
              </h1>
              <h2 className="text-gray-800 text-lg md:text-2xl font-semibold">
                {SelectedEvent.titleEnglish}
              </h2>
              <h2 className="text-gray-800 text-md italic">
                {SelectedEvent.date}
              </h2>
            </div>
          </div>

          <section>
            <div className="w-full min-h-[60vh] relative">
              <Image
                src={`/eventphotos/${SelectedEvent.images[0]}`}
                fill
                alt="image"
              />
            </div>
            <p className="text-md md:text-lg py-4 cursor-pointer">
              {SelectedEvent.descNepali}
            </p>

            <p className="text-md md:text-lg py-4 text-gray-500">
              {SelectedEvent.descEnglish}
            </p>
            {SelectedEvent.images.map((image, index) => {
              if (index == 0) return;
              return (
                <div key={index}>
                  <div className="my-6">
                    <Image
                      src={`/eventphotos/${image}`}
                      height={700}
                      width={700}
                      style={{ width: "100%", height: "100%" }}
                      alt="image"
                    />
                  </div>
                </div>
              );
            })}
          </section>
        </main>
      ) : (
        <div> No events found</div>
      )}
    </>
  );
};

export default Page;
