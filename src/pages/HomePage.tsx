import Divider from "@/components/Divider";
import About from "@/sections/HomeSection/About";
import Advantages from "@/sections/HomeSection/Advantages";
import BusinessModel from "@/sections/HomeSection/BusinessModel";
import CoreValues from "@/sections/HomeSection/CoreValues";
import Engagements from "@/sections/HomeSection/Engagements";
import Hero from "@/sections/HomeSection/Hero";
import MissionVision from "@/sections/HomeSection/MissionVision";
import Offers from "@/sections/HomeSection/Offers";

const HomePage = () => {
  return (
    <div className="wrapper h-auto flex flex-col items-center">
      <Hero />

      <Engagements />

      <Offers />

      <About />

      <MissionVision />

      <Divider />

      <CoreValues />

      <Advantages />

      <BusinessModel />

      <Divider />
    </div>
  );
};

export default HomePage;
