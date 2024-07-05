"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Component() {
  return (
    <main className="bg-orange-100 bg-opacity-25 py-8 pt-12">
      <h3 className="text-center text-lg md:text-3xl uppercase tracking-wide my-2 font-semibold">
        <span className="text-purple-600 ">आधारभूत सिद्धान्तहरू</span>
      </h3>
      <main className="px-3 flex justify-center ">
        <Timeline className=" w-screen px-4 md:w-4/6">
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>१ </Timeline.Time>
              <Timeline.Title>
                शिक्षा र सीप विकासद्वारा सशक्तीकरण
              </Timeline.Title>
              <Timeline.Body>
                फाउण्डेशनले व्यक्तिहरूलाई, विशेषगरी महिलाहरूलाई सशक्त बनाउन
                शिक्षा र सीप विकासलाई प्रमुख प्राथमिकतामा राख्छ। गुणस्तरीय
                शिक्षा र व्यवसायिक तालिमको पहुँच प्रदान गरेर, फाउण्डेशनले
                मानिसहरूलाई आर्थिक स्वतन्त्रता प्राप्त गर्न र जीवनस्तर सुधार्न
                सक्षम बनाउने लक्ष्य राख्छ।
              </Timeline.Body>
              {/* <Button color="gray">
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button> */}
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>२</Timeline.Time>
              <Timeline.Title> स्वास्थ्य र भलाइ</Timeline.Title>
              <Timeline.Body>
                स्वास्थ्य र भलाइलाई प्रवर्द्धन गर्नु अर्को मुख्य सिद्धान्त हो।
                फाउण्डेशनले स्वास्थ्य सेवामा पहुँच सुधार गर्ने, स्वास्थ्य
                समस्याहरू बारे चेतना फैलाउने, र समुदायहरूको शारीरिक र मानसिक
                भलाइ सुनिश्चित गर्ने पहलहरूलाई समर्थन गर्दछ।
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>३</Timeline.Time>
              <Timeline.Title>सामाजिक न्याय र समानता: </Timeline.Title>
              <Timeline.Body>
                फाउण्डेशन सामाजिक न्याय र समानताको प्रवर्द्धन गर्न प्रतिबद्ध छ।
                यसमा, हाशिएमा परेका समूहहरूको अधिकारको वकालत गर्ने, लैङ्गिक
                भेदभावलाई सम्बोधन गर्ने पहलहरूलाई समर्थन गर्ने, र सबैलाई समान
                अवसर दिने समावेशी समाज निर्माणतर्फ काम गर्ने समावेश छ।
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </main>
    </main>
  );
}
