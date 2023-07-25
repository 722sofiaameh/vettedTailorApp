import React from "react";
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import handRock from "../src/assets/images/hand_rock.png";
import Finger from "../src/assets/images/hand_one_finger.png";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden h-[100vh] bg-gray relative">
       <img src={Finger} alt="" className="top-5 bottom-0 right-0 w-40 absolute"/>
        <div className="grid grid-cols-11">
          <div className="col-span-3 min-h-screen">
            <Navbar />
          </div>
          <div className="col-span-8 ">
            <Header />
            <div className="max-h-screen overflow-y-auto">
              <Outlet />
              <img src={handRock} alt="" className="bottom-0 right-0 absolute"/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
