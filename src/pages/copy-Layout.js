import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./components/shared-pages/Sidebar";
import Footer from "./components/shared-pages/Footer";
import Header from "./components/shared-pages/Header";

const Layout = () => {
  return (
    <div>
      <div className="flex justify-end">
        <div className="bg-gray-100 w-[80%]">
          <div className="flex flex-col">

            <Header />
          </div>
        </div>
      </div>
      {/* <Header/> */}
      <Sidebar />
      <div className="flex justify-end p-4 bg-gray-100">
        <div className=" w-[80%]">
          <div className="min-h-[calc(100vh-183px)]">
            {/* Main content */}
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
