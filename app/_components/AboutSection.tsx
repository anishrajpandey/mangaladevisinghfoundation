import Image from "next/image";
import React from "react";

const AboutSection = ({ detail }: { detail: Boolean }) => {
  return (
    <section className="py-12 px-2 md:px-12 bg-slate-50 ">
      <h3 className="text-center text-lg md:text-3xl uppercase tracking-wide my-2 font-semibold">
        <span className="text-purple-600 ">♥️ मंगला देवी सिंह</span>
      </h3>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center md:justify-around items-center my-4">
        <div
          className={` ${
            !detail ? "rounded-lg md:rounded-[100%]" : "rounded-sm"
          } shadow-lg overflow-hidden `}
        >
          <Image
            src="/photo.jpeg"
            width={400}
            height={400}
            alt="Mangala Devi Singh Photo"
          />
        </div>

        <div className=" px-12 w-screen md:w-[50vw]">
          <p className="my-3  text-md leading-7 md:text-lg text-gray-800 ">
            मंगला देवी सिंह यो देशको पहिलो महिला नेत्री हुनुहुन्छ । २००७ सालको
            क्रान्ति पूर्व देश भरिका महिलाहरुलाई जागृत बनाउने अभियानमा लागेर
            उहाले महिलाहरुलाई आफ्नो अधिकारको संरक्षण गर्ने संदेश दिनु भयो ।
            उहाँले प्रतिपादन गर्नु भएको सिद्धान्त उहाँले अङ्रिघकार गर्नु भएको
            मानब अधिकार र उहाँले पद प्रर्दसन गर्नुभएको एउटा सम्मृध र विकसित
            नेपालको प्ररिकल्पना जुन उहाँले गर्नुभएको थियो त्यसमा लाखौ लाख
            महिलाहरु संलग्न भएका थिए । आज महिलाहरुको जुन स्थान र अवस्था मुलुकमा
            हामीले देखिरहेका छा,ै त्यो एकाएक आएको होइन । त्यसको लागि प्रथम महिला
            नेत्री मंगला देवी सिंहको ठुलो योगदान छ । तिनै प्रथम महिला नेत्री
            मंगला देवी सिंहको जीवन संदेशहरु भावि सन्तती सम्म हस्तानतरित होस्
            भन्ने उदेश्य लिएरे मंगला देवी सिंह फाउन्डेसनको स्थापना भएको छ । यो
            फाउन्डेसनले संस्था दर्ता ऐन, २०३४ को अधीनमा रही विधान तर्जुमा गरिएको
            छ ।
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
