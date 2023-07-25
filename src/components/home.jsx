import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden h-[100vh] bg-gray">
        <div className="grid grid-cols-11">
          <div className="col-span-3 min-h-screen">
            <Navbar />
          </div>
          <div className='col-span-8 '>
          <Header/>
          <div className="max-h-screen overflow-y-auto">
            <Outlet />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
