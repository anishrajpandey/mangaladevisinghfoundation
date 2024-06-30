"use client";
import React from "react";
export function FeaturedImageGallery() {
  const data = [
    {
      imgelink: "/images/image27.jpg",
    },
    {
      imgelink: "/images/image81.jpg",
    },
    {
      imgelink: "/images/image55.jpg",
    },
    {
      imgelink: "/images/image69.jpg",
    },
    {
      imgelink: "/images/image45.jpg",
    },
  ];

  const [active, setActive] = React.useState("/images/image81.jpg");

  return (
    <div className="grid gap-4 px-24">
      <h2 className="text-xl md:text-2xl font-semibold py-6">
        Captured Moments of Mangala Devi Singh
      </h2>
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-24 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
