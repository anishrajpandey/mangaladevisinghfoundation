import Image from "next/image";
import CarouselComponent from "./_components/Carousel";
import AboutSection from "./_components/AboutSection";
import PresidentsMessage from "./_components/PresidentsMessage";
import EventsCarousel from "./_components/EventsCarousel";
import Timeline from "./_components/Timeline";
export default function Home() {
  return (
    <main>
      <CarouselComponent />
      <AboutSection detail={false} />
      <PresidentsMessage />
      <EventsCarousel />
      <Timeline />
    </main>
  );
}
