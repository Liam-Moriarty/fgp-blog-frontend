import placeholder from "@/assets/Carabaw-final.png";

const Banner = () => {
  return (
    <div className="max-w-[75rem] w-full h-[37.5rem] flex justify-center items-center border">
      <img
        src={placeholder}
        alt="placeholder"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
