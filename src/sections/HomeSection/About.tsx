import aboutIllustration from "@/assets/About-me-rafiki.png";

const About = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center gap-5">
      <div className="max-w-[600px] w-full h-[500px]">
        <img
          src={aboutIllustration}
          alt="about illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[600px] w-full h-auto flex flex-col gap-3">
        <h2 className="text-center">About Us</h2>
        <p>
          FortuneGod connects Asia-Pacific opportunities with the Philippine
          market driving innovation in trade, e-commerce, and sustainable
          growth. Through ShoPilipinas, we empower businesses and communities to
          thrive in the global economy.
        </p>
      </div>
    </div>
  );
};

export default About;
