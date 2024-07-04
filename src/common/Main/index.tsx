import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Main = () => {
  return (
    <>
      <Sidebar />
      <div className="text-2xl ml-[200px]">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
