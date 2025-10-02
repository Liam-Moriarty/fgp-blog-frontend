import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
