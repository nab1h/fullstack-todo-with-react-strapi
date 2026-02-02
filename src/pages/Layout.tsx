import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="container mx-auto px-36 ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default RootLayout;
