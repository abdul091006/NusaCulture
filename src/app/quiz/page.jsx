import LandingQuiz from "@/components/LandingQuiz";
import Navigation from "@/components/Navigation";

const page = () => {
  return (
    <div className="bg-[#181818]">
      <Navigation />
      <LandingQuiz />
    </div>
  );
};

export default page;
