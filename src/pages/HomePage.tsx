import About from "@/sections/HomeSection/About";
import Engagements from "@/sections/HomeSection/Engagements";
import Hero from "@/sections/HomeSection/Hero";
import Offers from "@/sections/HomeSection/Offers";

const HomePage = () => {
  return (
    <div className="container h-auto flex flex-col gap-10">
      {/* Banner Section */}
      <Hero />

      {/* Engagement Section */}
      <Engagements />

      {/* What We Do Section */}
      <Offers />

      {/* About & Overview Section */}
      <About />
    </div>
  );
};

export default HomePage;
