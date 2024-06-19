import React from "react";
import "./donate.css";
import Image from "next/image";

const page = () => {
  return (
    <main className=" donatemain py-24 w-screen h-screen  ">
      <section className="w-1/2 mx-auto h-screen bg-gray-300 bg-opacity-50 rounded-xl px-4 py-6">
        <h1 className="text-xl flex justify-center items-center text-gray-800 md:text-2xl font-bold px-8 py-4 w-full underline ">
          Donate to Mangaladevi Singh Foundation
        </h1>
        <h1 className="text-xl flex justify-center items-center text-gray-800 md:text-xl font-bold px-8 py-4 w-full  ">
          Bank Account Number : 123456789098765{" "}
        </h1>
        <h1 className="text-xl flex justify-center items-center text-gray-800 md:text-xl font-bold px-8 py-4 w-full  ">
          Bank Account Name : Mangala Devi Singh Foundation{" "}
        </h1>
        <div className="flex justify-center">
          <Image
            src={"/qr.png"}
            height={200}
            width={200}
            alt="unable to load qr code. "
          />
        </div>
      </section>
    </main>
  );
};

export default page;
