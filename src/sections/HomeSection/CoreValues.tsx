import BaseCards from "@/components/BaseCards";
import { coreValues } from "@/constants";

const CoreValues = () => {
  return (
    <div className="max-w-[70.5rem] w-full grid grid-cols-3 gap-5 my-10">
      {coreValues &&
        coreValues.map((value) =>
          value.icon && value.description ? (
            <BaseCards
              key={value.title}
              className="flex flex-col justify-start gap-2"
            >
              <value.icon className="text-4xl" />
              <h3 className="text-xl font-semibold tracking-wide">
                {value.title}
              </h3>
              <p className="text-base font-normal">{value.description}</p>
            </BaseCards>
          ) : (
            <div
              key={value.title}
              className="flex justify-start items-center p-6"
            >
              <h3 className="text-3xl font-semibold tracking-wide">
                {value.title}
              </h3>
            </div>
          )
        )}
    </div>
  );
};

export default CoreValues;
