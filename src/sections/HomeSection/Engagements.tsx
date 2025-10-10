import BaseCards from "@/components/BaseCards";
import { engagementStats } from "@/constants";

const Engagements = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center gap-5 my-20">
      {engagementStats &&
        engagementStats.map((count) => (
          <BaseCards key={count.label} className="w-full flex flex-col gap-5">
            <p className="tracking-wide font-semibold text-center">
              {count.label}
            </p>
            <p className="tracking-wide font-semibold text-center">
              {count.count}
            </p>
          </BaseCards>
        ))}
    </div>
  );
};

export default Engagements;
