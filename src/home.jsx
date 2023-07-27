import React from "react";
// import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import handRock from "../src/assets/images/hand_rock.png";
import Finger from "../src/assets/images/hand_one_finger.png";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden h-[100vh] bg-gray relative">
       <img src={Finger} alt="" className="hidden md:top-5 md:flex md:bottom-0 md:right-0 md:w-40 md:absolute"/>
        <div className="grid grid-cols-11">
          <div className="col-span-3 min-h-screen">
            <Navbar />
          </div>
          <div className="col-span-8 ">
            <div className="md:flex hidden">
              <Header />
            </div>
            <div className="max-h-screen overflow-y-auto">
              <Outlet />
              <img src={handRock} alt="" className="hidden md:flex md:bottom-0 md:right-0 md:absolute md:w-[50px] md:h-[30]"/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
