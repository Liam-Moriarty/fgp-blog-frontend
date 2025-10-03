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
      <div className="w-full h-auto flex flex-col gap-10 my-10">
        <p className="font-bold text-center text-4xl tracking-wide leading-20">
          What We Do and Offer
        </p>

        <Offers />
      </div>

      {/* About Section */}
      <About />
    </div>
  );
};

export default HomePage;
