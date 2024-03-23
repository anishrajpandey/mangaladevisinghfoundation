import Image from "next/image";
import React from "react";

const PresidentsMessage = () => {
  return (
    <section className="py-12 px-2 md:px-12 bg-slate-50 ">
      <h3 className="text-center text-lg md:text-xl uppercase tracking-wide my-2 font-semibold">
        <span className="text-purple-600 ">♥️ presidents message</span>
      </h3>
      <div className="flex flex-row-reverse  flex-wrap justify-around items-center my-4">
        <div className="rounded-md  shadow-xl overflow-hidden ">
          <Image
            src="/Prakash_Man_Singh.jpg"
            width={400}
            height={400}
            alt="Mangala Devi Singh Photo"
          />
        </div>

        <p className="w-full px-12 md:w-1/2">
          It is Mangala Devi Singh Foundation&#39;s pride to continue Mangala
          Devi Singh&#39;s legacy. Singh, besides being one of Nepal&#39;s most
          revered and respected leader, ensured a positive development of Nepal,
          and Nepalis throughout his lifetime. Considered Nepal&#39;s Father of
          Democracy, Singh in his lifetime resisted against two regimes to
          ensure Nepalis weren&#39;t deprived of their inherent right to
          democracy. He first led a movement against the autocratic Rana regime
          which ruled over Nepal for more than 100 years, and later against the
          &#39;partyless&#39; Panchayat System introduced by then King Mahendra.
          The Foundation continues to cherish Singh&#39;s belief in democracy,
          and other activities which include development of sports,
          infrastructure, improvement of living standards of all Nepalis, and
          much more.
          <br />
          <br />
          <b>
            Prakash Man Singh, President, <br />
            Ganesh Man Singh Foundation.
          </b>
        </p>
      </div>
    </section>
  );
};

export default PresidentsMessage;
