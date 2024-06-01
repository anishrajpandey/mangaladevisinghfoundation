import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="relative w-screen opacity-50 grid place-content-center h-screen">
      <Image src={"/sketch.png"} width={300} height={300} alt="loading" />
    </div>
  );
};

export default loading;
