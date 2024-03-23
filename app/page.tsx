import Image from "next/image";
import CarouselComponent from "./_components/Carousel";
import AboutSection from "./_components/AboutSection";
import PresidentsMessage from "./_components/PresidentsMessage";

export default function Home() {
  return (
    <main>
      <CarouselComponent />
      <AboutSection />
      <PresidentsMessage />
    </main>
  );
}
