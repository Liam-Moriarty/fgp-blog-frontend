import { Button } from "@/components/ui/button";
import { cards } from "@/constants";
import { LuArrowRight } from "react-icons/lu";

const Offers = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10 my-10">
      <h3>What We Do and Offer</h3>

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card) => (
          <div key={card.alt} className="h-auto flex flex-col gap-5">
            <div className="w-full h-[21.875rem]">
              <img
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-3 justify-start items-start">
              <p className="font-semibold tracking-wide">{card.label}</p>
              <Button className="max-w-2/5 w-full">
                Learn More
                <LuArrowRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
