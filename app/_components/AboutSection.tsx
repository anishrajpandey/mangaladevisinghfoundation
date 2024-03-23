import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="py-12 px-2 md:px-12 bg-slate-50 ">
      <h3 className="text-center text-lg md:text-xl uppercase tracking-wide my-2 font-semibold">
        <span className="text-purple-600 ">♥️ About Mangala Devi Singh</span>
      </h3>
      <div className="flex flex-row gap-4 flex-wrap justify-around items-center my-4">
        <div className="rounded-lg md:rounded-[100%] shadow-2xl overflow-hidden ">
          <Image
            src="/photo.jpeg"
            width={400}
            height={400}
            alt="Mangala Devi Singh Photo"
          />
        </div>

        <p className="w-full px-12 md:w-1/2">
          Mangala Devi Singh ( मंगलादेवी सिंह) was a pioneer feminist and
          prominent democratic right activist of Nepal. Singh got involved in
          politics in 1940 at the age of 16. Her husband was the leading Nepali
          Congress Leader Ganesh Man Singh. <br /> <br /> In 1948 Mangala Devi
          Singh led a delegation to Prime Minister Padma Shumsher to demand
          education, employment and voting rights for women.
          <br /> <br />
          In 1952 the Nepal Womens Association had an ideological split, with
          Mangala leading a faction which believed that womens rights could be
          attained through democratic reform. while another faction, led by
          Kamaksha Devi held the belief that only a radical change could provide
          women with their rights, this division culminated later that year when
          a decision to protest the arrival of First Indian Prime Minister
          Jawaharlal Nehru caused Mangala to lose her support. During the
          protest police arrested a number of women attempting to reach the
          Prime Minister to protest radically with black flags, contrary to this
          Mangala welcomed Nehru alone. This act lead to her removal as
          president and replacement with Kamaksha Devi. Congress Leader Ganesh
          Man Singh.
          <br /> <br />
          She died in August 1996 of Kidney Failure, Aged 70
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
