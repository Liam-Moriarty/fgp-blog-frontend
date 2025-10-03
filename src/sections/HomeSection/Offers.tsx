import ecommerce from "@/assets/Ecommerce-web-page-bro.svg";
import trade from "@/assets/International-trade-rafiki.svg";
import operation from "@/assets/Operating-system-upgrade-amico.svg";
import project from "@/assets/Projections-bro-(1).svg";

import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";

const Offers = () => {
  const cards = [
    { src: ecommerce, alt: "Ecommerce Illustration", label: "Ecommerce" },
    { src: trade, alt: "Trade Illustration", label: "International Trade" },
    {
      src: project,
      alt: "Project Illustration",
      label: "Project and Investment",
    },
    {
      src: operation,
      alt: "Operation Illustration",
      label: "Turn Key Operation",
    },
  ];

  return (
    <>
      <div className="w-full h-auto flex flex-col gap-10 my-10">
        <p className="title">What We Do and Offer</p>

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
                <p className="font-semibold text-md">{card.label}</p>
                <Button className="max-w-2/5 w-full">
                  Learn More
                  <LuArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Offers;
