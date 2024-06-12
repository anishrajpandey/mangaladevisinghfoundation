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
            src="/images/srijana.jpg"
            width={400}
            height={400}
            alt="Mangala Devi Singh Photo"
          />
        </div>

        <p className="w-full px-12 md:w-1/2">
          मंगलादेवीसिंह फाउन्डेशनको अध्यक्षको रूपमा, म सृजना सिंहले तपाईंहरू
          सबैलाई हाम्रो वेबसाइटमा हार्दिक स्वागत गर्न चाहन्छु। हाम्रो संस्था
          शिक्षा, स्वास्थ्य, र समाज सेवाको क्षेत्रमा योगदान पुर्याउने
          प्रतिबद्धतामा दृढ रहेको छ। हामीले हाम्रा कार्यक्रमहरू मार्फत जनचेतना
          अभिवृद्धि, स्वास्थ्य सेवा सुधार, र शिक्षा अवसरहरूको विस्तार गर्ने
          प्रयास गरिरहेका छौं। समाजको हरेक वर्गलाई सशक्त बनाउन, विशेष गरी
          महिलाहरू र बालबालिकाहरूको जीवनस्तर उकास्न हामी समर्पित छौं। तपाईंहरूको
          सहयोग र सद्भावनाले हाम्रो लक्ष्य प्राप्तिमा महत्वपूर्ण भूमिका खेल्नेछ।
          एकसाथ मिलेर, हामी उज्जवल भविष्यको मार्गमा अगाडि बढ्न सक्छौं।
          <br />
          <br />
          <b>
            धन्यवाद,
            <br /> सृजना सिंह <br />
            अध्यक्ष, मंगलादेवीसिंह फाउन्डेशन
          </b>
        </p>
      </div>
    </section>
  );
};

export default PresidentsMessage;
