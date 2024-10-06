import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Carousel from "@/components/Carousel";
import MapIndonesia from "@/components/MapIndonesia";

import TitleMap from "@/components/TitleMap";
import TitleFunFact from "@/components/TitleFunFact";

import dynamic from "next/dynamic";
import LandingQuiz from "@/components/LandingQuiz";
import FunFact3 from "@/components/FunFact3";

const Video = dynamic(() => import("@/components/Video"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-[#181818] ">
      <Navigation />
      <Carousel />
      <div className="h-[70vh] md:h-screen w-full flex flex-col justify-center items-center">
        <TitleMap />

        <MapIndonesia />
      </div>

      <div className="w-full h-full md:h-screen flex flex-col justify-center items-center  bg-[url('/bgFunFact.png')]">
        <TitleFunFact />

        <div className="flex flex-wrap justify-center gap-6 lg:justify-between w-[80%] md:w-[600px] lg:w-[900px] xl:w-[1050px]">
          <FunFact3 />
        </div>
      </div>
      <LandingQuiz />
      <div className="w-full max-h-screen mb-[50px] md:h-screen flex flex-col justify-center items-center ">
        <Video />
      </div>
      <Footer />
    </div>
  );
}
