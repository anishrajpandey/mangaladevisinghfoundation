"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="h-[50vh] md:h-[100vh] mt-[15vh]  w-screen ">
      <Carousel
      //       slideInterval={2000
      //   }
      >
        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/mangala.jpg"
          //   className="object-contain"
          alt="..."
        />
        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image1.jpg"
          //   className="object-contain"
          alt="..."
        />
        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image27.jpg"
          //   className="object-contain"
          alt="..."
        />
        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image35.jpg"
          //   className="object-contain"
          alt="..."
        />
        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image48.jpg"
          //   className="object-contain"
          alt="..."
        />

        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image66.jpg"
          //   className="object-contain"
          alt="..."
        />

        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image79.jpg"
          //   className="object-contain"
          alt="..."
        />

        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image86.jpg"
          //   className="object-contain"
          alt="..."
        />
        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image100.jpg"
          //   className="object-contain"
          alt="..."
        />
        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image110.jpg"
          //   className="object-contain"
          alt="..."
        />
        <Image
          width={400}
          height={300}
          style={{ objectFit: "contain", width: "100%" }}
          src="/images/image119.jpg"
          //   className="object-contain"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
