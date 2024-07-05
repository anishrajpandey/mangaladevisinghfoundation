"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "@/app/news/News.css";
import "swiper/css";
import Swiper from "swiper";
import data from "../events/data";
import Link from "next/link";

const EventsCarousel = () => {
  useEffect(() => {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
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
          slidesPerView: 4,
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
  const Newsitems = [
    {
      Title: "Mangaladevi Singh: A Pioneer Female Leader",
      Description:
        "Sirjana Singh, the wife of her eldest son and a leader in the Nepali Congress, as well as a Member of Parliament, Prakash Man Singh, has recently organized a public event to honor and celebrate the significant role played by Mangaladevi Singh in empowering women in Nepal.",
      Image: "/news/news1.jpg",
      URL: "https://www.spotlightnepal.com/2024/03/31/mangaladevi-singh-pioneer-female-leader/",
    },

    {
      Title:
        "मंगला देवी सिंह फाउन्डेसनद्वारा पद्मकन्या बहुमुखी क्याम्पसमा ५ लाख राशीकाे अक्षयकाेष स्थापना ।",
      Description:
        "पद्मकन्या बहुमुखी क्याम्पसमा मंगलादेवी सिंह फाउन्डेसनले ५ लाख राशीकाे अक्षयकाेष स्थापना गरेकाे छ फाउन्डेसनका तर्फबाट सिर्जना सिंहले अक्षय काेषका लागि ५ लाख राशीकाे चेक क्याम्पस प्रमुखलाई हस्तान्तरण गरेकी छन्।",
      Image: "/news/news2.jpg",
      URL: "https://www.setopati.com/politics/330799",
    },
    {
      Title: "Remembering Mangala Devi Singh: woman of indomitable spirit",
      Description:
        "The 26th memorial day of the founding President of Nepal Women Association, Mangala Devi Singh, has been observed today. On the occasion, Nepali Congress leaders including Prakash Man Singh garlanded the statue of Mangaladevi at Shovabhagawati. The Nepal Women Association, Kathmandu, had organised the programme.",
      Image: "/images/mangala.jpg",
      URL: "https://nepalnews.com/s/nation/remembering-mangala-devi-singh-woman-of-indomitable-spirit",
    },
    {
      Title:
        "DEMOCRACY SERIES (PHASE 3): THE LIFE AND VALUES OF MANGALA DEVI SINGH",
      Description:
        "After 100 weeks (2 years) of remembering Ganesh Man Singh’s contributions to modern day Nepal, reflecting upon his life and values in two phases divided between two major movements for democracy in Nepal, one against the Rana regime and the second against the partyless Panchayat System, the Ganesh Man Singh Foundation in its third phase has decided to pursue an equally important phase:",
      Image: "/news/news4.jpg",
      URL: "https://aawaajnews.com/democracyseries/democracy-series-phase-3-the-life-and-values-of-mangala-devi-singh/",
    },
  ];
  return (
    <main className="pt-24 ">
      <h3 className="text-center text-lg md:text-3xl uppercase tracking-wide my-2 font-semibold">
        <span className="text-purple-600 ">काम र परियोजनाहरू</span>
      </h3>
      <section className="pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
            <div className="w-full flex justify-between flex-col">
              {/* <!-- Slider controls --> */}
            </div>

            <div className="w-full">
              {/* <!--Slider wrapper--> */}
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {data.map((Data, index) => {
                    return (
                      <div key={index} className="swiper-slide w-full  group">
                        <div className="flex items-center mb-9">
                          <Image
                            width={600}
                            height={600}
                            src={`/eventphotos/${Data.images[0]}`}
                            alt="blogs tailwind section"
                            className="rounded-2xl w-full"
                          />
                        </div>
                        <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-amber-500">
                          {Data.titleNepali}
                        </h3>
                        {/* <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                        {Data.Description}
                      </p> */}
                        <Link
                          href={`/events/${Data.id}`}
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
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventsCarousel;
