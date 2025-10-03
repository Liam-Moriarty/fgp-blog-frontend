import { engagementStats } from "@/constants";

const Engagements = () => {
  return (
    <div className="h-auto flex justify-center items-center gap-5 my-10">
      {engagementStats &&
        engagementStats.map((count) => (
          <div
            key={count.label}
            className="w-full h-auto rounded-md flex flex-col p-10 shadow-md"
          >
            <p>{count.label}</p>
            <p>{count.count}</p>
          </div>
        ))}
    </div>
  );
};

export default Engagements;
