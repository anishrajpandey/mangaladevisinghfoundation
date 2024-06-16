"use client";
import React, { useEffect } from "react";
import "./News.css";
import NewsData from "./Newsdata";
import "swiper/css";
import Swiper from "swiper";
import Link from "next/link";
import Image from "next/image";
const Page = () => {
  useEffect(() => {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 28,
      centeredSlides: false,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: false,
        },
        568: {
          slidesPerView: 2,
          spaceBetween: 28,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });
  }, []);

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex justify-between flex-col lg:w-2/5">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                <span className=" text-amber-500">News </span> and{" "}
                <span className=" text-amber-500">Articles </span>
              </h2>
              <p className="text-gray-500 mb-10 leading-9 max-lg:max-w-xl max-lg:mx-auto">
                मंगलादेवीसिंह फाउन्डेशनले हालै विभिन्न क्षेत्रमा उल्लेखनीय
                उपलब्धिहरू हासिल गरेको छ। हाम्रो स्वास्थ्य शिविरले ग्रामिण
                समुदायमा व्यापक स्वास्थ्य परीक्षण र उपचार सेवा प्रदान गरेको छ
                भने, शिक्षाक्षेत्रमा छात्रवृत्ति कार्यक्रमले धेरै
                विद्यार्थीहरूलाई उज्जवल भविष्यतर्फ अग्रसर गराएको छ। साथै,
                सामाजिक सेवाका विभिन्न कार्यक्रमहरूद्वारा महिला सशक्तीकरण र
                बालबालिकाको संरक्षणमा महत्वपूर्ण योगदान पुर्याइएको छ। यी सबै
                कार्यहरूको समाचार र घटनाक्रम हाम्रो वेबसाइटमा नियमित रूपमा अपडेट
                गरिन्छ।
              </p>
            </div>
            {/* <!-- Slider controls --> */}
            <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
              <div className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center items-center gap-3 text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100">
                <Link href={"/"}>
                  <button
                    id="slider-button-left"
                    className="swiper-button-prev group flex justify-center items-center border border-solid border-amber-500 w-11 h-11 transition-all duration-500 rounded-full hover:bg-amber-500"
                    data-carousel-prev
                  >
                    <svg
                      className="w-6 h-6 text-amber-500 group-hover:text-white  "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        //   enableBackground={"orange"}
                        strokeWidth="2"
                        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                      />
                    </svg>
                  </button>
                </Link>
                Go to Home{" "}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            {/* <!--Slider wrapper--> */}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                {NewsData.map((Data, index) => {
                  return (
                    <div
                      key={index}
                      className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group"
                    >
                      <div className="flex items-center mb-9">
                        <Image
                          width={600}
                          height={600}
                          src={Data.Image}
                          alt="blogs tailwind section"
                          className="rounded-2xl w-full"
                        />
                      </div>
                      <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-amber-500">
                        {Data.Title}
                      </h3>
                      <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                        {Data.Description}
                      </p>
                      <a
                        href={Data.URL}
                        target="blank"
                        className="cursor-pointer flex items-center gap-2 text-lg text-amber-700 font-semibold"
                      >
                        Read more
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                            stroke="#4338CA"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
