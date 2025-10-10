import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { keyAdvantage, whyFgp } from "@/constants";

const Advantages = () => {
  return (
    <div className="wrapper flex flex-col items-center gap-5 my-10">
      <div className="flex flex-col gap-5 items-center my-10">
        <h3>Our Platforms & Advantages</h3>
        <div className="max-w-[10rem] w-full border-b border-[var(--gray-border)]" />
        <p>
          Learn about our core platforms and the unique business value we bring
          to customers and partners.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-[70.5rem] w-full h-auto flex justify-center items-stretch gap-5 my-10">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h3>Why FortuneGod?</h3>

          <Accordion
            type="single"
            collapsible
            className="flex-1 w-full"
            defaultValue="item-1"
          >
            {whyFgp &&
              whyFgp.map((item) => (
                <AccordionItem
                  key={item.title}
                  value={`item-${item.item}`}
                  className="border-none "
                >
                  <AccordionTrigger className="font-semibold">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h3>Key Market Advantages</h3>

          <Accordion
            type="single"
            collapsible
            className="flex-1 w-full"
            defaultValue="item-1"
          >
            {keyAdvantage &&
              keyAdvantage.map((item) => (
                <AccordionItem
                  key={item.title}
                  value={`item-${item.item}`}
                  className="border-none "
                >
                  <AccordionTrigger className="font-semibold">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
