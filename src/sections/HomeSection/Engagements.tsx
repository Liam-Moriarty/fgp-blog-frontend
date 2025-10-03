import { engagementStats } from "@/constants";

const Engagements = () => {
  return (
    <>
      <div className="h-auto flex justify-center items-center gap-5 my-10">
        {engagementStats &&
          engagementStats.map((count) => (
            <div
              key={count.label}
              className="w-full h-auto rounded-md flex flex-col justify-center items-center gap-5 p-10 shadow-md"
            >
              <p className="text-xl font-bold ">{count.label}</p>
              <p className="text-xl font-bold">{count.count}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Engagements;
