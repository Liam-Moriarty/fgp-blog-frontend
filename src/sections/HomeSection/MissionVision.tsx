import mission from "@/assets/mission.png";
import vision from "@/assets/vision.png";

const MissionVision = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-5 my-10">
      {/* Mission */}
      <div className="max-w-[70.5rem] w-full h-auto flex justify-center items-center gap-5">
        <div className="w-full h-[20.25rem]">
          <img
            src={mission}
            alt="mission img"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-auto flex flex-col">
          <p className="title text-2xl">Mission</p>
          <p className="text-justify">
            Integration: Develop a complete supply chain ecosystem from B2C to
            B2B, maximizing value creation. Innovation: Harness AI, live
            commerce, and matrix strategies to redefine shopping experiences.
            Sustainability: Advance green growth with renewable energy,
            waste-to-energy (WTE), and water resource projects Collaboration:
            Act as a strategic bridge connecting Taiwan, the Philippines, and
            global partners
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="max-w-[70.5rem] w-full h-auto flex justify-center items-center gap-5">
        <div className="w-full h-auto flex flex-col">
          <p className="title text-2xl">Vision</p>
          <p className="text-justify">
            To be Asia-Pacific’s most trusted innovator in cross-border trade
            and e-commerce, driving prosperity and modernization through
            technology, localization, and sustainability.
          </p>
        </div>

        <div className="w-full h-[20.25rem]">
          <img
            src={vision}
            alt="mission img"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
