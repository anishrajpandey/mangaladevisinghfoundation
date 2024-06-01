import { Blockquote } from "flowbite-react";

import AboutSection from "../_components/AboutSection";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main className="py-24 w-screen md:w-[85vw] overflow-x-hidden flex flex-col gap-24">
        <section>
          <AboutSection detail={true} />
        </section>

        <section className="flex flex-col gap-6">
          <p className="text-md md:text-lg text-gray-800  ">
            Mangala Devi Singh ( मंगलादेवी सिंह) was a pioneer feminist and
            prominent democratic right activist of Nepal. Singh got involved in
            politics in 1940 at the age of 16. Her husband was the leading
            Nepali Congress Leader Ganesh Man Singh. Mangala Devi Singh&apos;s
            contributions include:
          </p>
          <ol>
            <li>
              <b> Advocacy for Women&apos;s Rights: </b>Singh was instrumental
              in advocating for women&apos;s education and legal rights. She
              worked tirelessly to bring issues affecting women into the public
              discourse.
            </li>

            <li>
              <b>Social Reforms:</b> Through her involvement with various social
              organizations, Singh contributed to reforms aimed at improving the
              social and economic status of women in Nepal.
            </li>
            <li>
              <b> Literary Contributions:</b> She also authored works that
              highlighted the challenges faced by women and promoted feminist
              ideas.
            </li>
          </ol>
          <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              className="h-auto max-w-full rounded-lg hover:grayscale transition duration-300"
              width={600}
              height={400}
              src={"/images/image45.jpg"}
              alt=""
            />
            <Image
              className="h-auto max-w-full rounded-lg hover:grayscale transition duration-300"
              width={600}
              height={400}
              src={"/images/image59.jpg"}
              alt=""
            />

            <Image
              className="h-auto max-w-full rounded-lg hover:grayscale transition duration-300"
              width={600}
              height={400}
              src={"/images/image66.jpg"}
              alt=""
            />

            <Image
              className="h-auto max-w-full rounded-lg hover:grayscale transition duration-300"
              width={600}
              height={400}
              src={"/images/image79.jpg"}
              alt=""
            />
          </div>

          <p className="text-md md:text-lg text-gray-800  ">
            In 1948 Mangala Devi Singh led a delegation to Prime Minister Padma
            Shumsher to demand education, employment and voting rights for
            women.
          </p>

          {/*
           */}

          <p className="text-md md:text-lg text-gray-800  ">
            <span>
              In 1952, the Nepal Womens Association had an ideological split,
              with Mangala leading a faction which believed that womens rights
              could be attained through democratic reform. while another
              faction, led by Kamaksha Devi held the belief that only a radical
              change could provide women with their rights, this division
              culminated later that year when a decision to protest the arrival
              of First Indian Prime Minister Jawaharlal Nehru caused Mangala to
              lose her support. During the protest police arrested a number of
              women attempting to reach the Prime Minister to protest radically
              with black flags, contrary to this Mangala welcomed Nehru alone.
              This act lead to her removal as president and replacement with
              Kamaksha Devi. Congress Leader Ganesh Man Singh.
              <br /> <br />
              She died in August 1996 of Kidney Failure, Aged 70
            </span>
            <br />
            <br />
            <b>
              {" "}
              Mangala Devi Singh&apos;s legacy is remembered as a cornerstone in
              the development of the women&apos;s movement in Nepal. Her efforts
              have had a lasting impact on the empowerment of women in the
              country.
            </b>
          </p>
        </section>

        <section className="flex flex-col gap-9">
          <h2 className="text-xl md:text-3xl font-bold text-purple-600 text-center tracking-normal uppercase">
            Mangaladevi Singh: A Pioneer Female Leader
          </h2>
          <div className="mx-auto w-screen md:w-[90vw] relative h-screen md:h-[80vh]">
            <Image src={"/images/aboutimage.jpg"} fill alt="unable to load" />
          </div>
          <div className="bg-red-100 p-4 my-4 rounded-sm border-l-8 border-red-700">
            <svg
              className="my-8 h-12 w-12 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
              The life and values of Late Mangala Devi Singh – a fierce advocate
              of democracy, a pioneer of women’s rights movement in Nepal, and
              an equal to Ganesh Man Singh.
            </Blockquote>
          </div>

          <p>
            Despite being recognized late, Mangaladevi Singh stands as the first
            female leader in Nepal who initiated the women empowerment movement.
            It took more than a century for her contributions to be officially
            acknowledged in establishing equal rights for women in Nepal.
          </p>

          <p>
            As the wife of Ganesh Man Singh, a prominent freedom fighter and
            democratic leader, Mangaladevi Singh dedicated over five decades to
            raising their children while supporting her husbands efforts in the
            struggle to establish and restore democracy in Nepal. In her memoir,
            this revolutionary female leader recounted her arduous journey in
            fighting for womens rights during the Rana Regime and the Panchayat
            era.
          </p>
          <p>
            Despite facing opposition from communist parties and leaders who
            attempted to discredit her revolutionary role, the Nepali Congress
            has been slow in recognizing her as the first female leader.
          </p>
          <div className="bg-red-100 p-4 my-4 rounded-sm border-l-8 border-red-700">
            <svg
              className="my-8 h-12 w-12 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Blockquote>
              In the coming weeks, Democracy Series: The life and values of
              Mangala Devi Singh will explore and understand Nepal’s political
              and social journey through the lens of Mangala Devi Singh.
            </Blockquote>
          </div>
          <p>
            After 100 weeks (2 years) of remembering Ganesh Man Singh’s
            contributions to modern day Nepal, reflecting upon his life and
            values in two phases divided between two major movements for
            democracy in Nepal, one against the Rana regime and the second
            against the partyless Panchayat System, the Ganesh Man Singh
            Foundation in its third phase has decided to pursue an equally
            important phase:
          </p>

          <p>
            The contributions of Mangala Devi Singh, while understanding the
            current political sphere of Nepal, cannot be overlooked. Her role,
            along with many other leading women rights activists of Nepal which
            include but are not limited to Yogmaya Neupane, Sahana Pradhan,
            Sadhana Pradhan, Kamaksha Devi Rana, and Hira Devi Tuladhar , have
            helped shape the current socio-political space of Nepal’s women,
            right from fighting for women’s political rights and education,
            initiatives to ban discriminatory practices and so on. While, the
            fight for equality continues, Phase 3 of Democracy Series: the life
            and values of Mangala Devi Singh will attempt to provide insight
            into the social and political rights of women in Nepal from the
            1940s.
          </p>

          <p>
            A fierce advocate of women’s political rights, Mangala Devi Singh in
            1948 led a delegation to Prime Minister Padma Shumsher to demand
            education, voting rights, and employment for women. She was also one
            of the many members, who defied curfew orders imposed by the Ranas
            in 1950, and also founder of the Nepal’s Women Association in 1947.
          </p>
        </section>
      </main>
    </>
  );
};

export default page;
