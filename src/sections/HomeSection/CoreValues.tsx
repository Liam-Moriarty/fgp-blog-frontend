import BaseCards from "@/components/BaseCards";
import type { IconType } from "react-icons";
import {
  LuFolderOpen,
  LuFiles,
  LuFlag,
  LuChartColumnIncreasing,
  LuImage,
} from "react-icons/lu";

const CoreValues = () => {
  interface CoreValues {
    icon?: IconType;
    title: string;
    description?: string;
  }

  const coreValues: CoreValues[] = [
    { title: "Core Values" },
    {
      icon: LuFolderOpen,
      title: "Integrity",
      description:
        "Building trust through ethical and transparent business practices.",
    },
    {
      icon: LuFiles,
      title: "Professionalism",
      description: "Delivering excellence at every stage of operation.",
    },
    {
      icon: LuFlag,
      title: "Innovation",
      description:
        "Creating cutting-edge solutions that anticipate future needs.",
    },
    {
      icon: LuChartColumnIncreasing,
      title: "Collaboration",
      description: "Empowering partnerships that achieve shared success.",
    },
    {
      icon: LuImage,
      title: "Sustainability",
      description:
        "Investing in projects that benefit both economy and environment.",
    },
  ];
  return (
    <div className="max-w-[70.5rem] w-full grid grid-cols-3 gap-5">
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
