"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="h-[85vh] w-screen">
      <Carousel
      //       slideInterval={2000
      //   }
      >
        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/photo.jpeg"
          //   className="object-contain"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
