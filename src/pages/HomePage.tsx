import Divider from "@/components/Divider";
import About from "@/sections/HomeSection/About";
import Engagements from "@/sections/HomeSection/Engagements";
import Hero from "@/sections/HomeSection/Hero";
import MissionVision from "@/sections/HomeSection/MissionVision";
import Offers from "@/sections/HomeSection/Offers";

const HomePage = () => {
  return (
    <div className="container h-auto flex flex-col">
      {/* Banner Section */}
      <Hero />

      {/* Engagement Section */}
      <Engagements />

      {/* What We Do Section */}
      <Offers />

      {/* About & Overview Section */}
      <About />

      {/* Mission & Vision Section */}
      <MissionVision />

      <Divider />
    </div>
  );
};

export default HomePage;
