import React from "react";
import mainImg from "../src/assets/images/yellowMan.png";
import call from "../src/assets/images/call.png";
import message from "../src/assets/images/message.png";
import edit from "../src/assets/images/editt.png";
import search from "../src/assets/images/Search.png";
import more from "../src/assets/images/More.png";
import { NavLink, Link,Outlet } from "react-router-dom";
import Table from "./table";

export default function TransactionHistory() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'textGray' : '',
      borderBottom: isActive ? '4px solid pink' : '',
    };
  };
  return (
    <>
      <div className="">
        <div className="history static font-Kotori  bg-grey-800 w-[85%] h-32  mx-auto mt-32"></div>
        <div className="relative bottom-[120px] h-40     bg-black  w-[80%]  mx-auto card ">
          <div className="flex justify-end m-4">
            <img src={edit} alt="img" className="w-4 h-4" />
          </div>
          <div className="flex  gap-2 justify-evenly items-center">
            <div className="bg-white drop-shadow-xl mb-14  left-4	w-24 p-4 rounded-2xl">
              <img src={mainImg} className="absolute  inset-x-0 bottom-0" />
            </div>
            <div className="font-Karla">
              <h1 className="text-darkGray text-[18px] font-bold">
                Samuel Oladokun
              </h1>
              <div className="flex gap-4 ">
                <div className="">
                  <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                    Gender:
                  </p>
                  <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                    Location:
                  </p>
                  <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                    Sew Gender:
                  </p>
                </div>
                <div>
                  <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                    Male{" "}
                  </p>
                  <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                    Lagos, Nigeria{" "}
                  </p>
                  <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                    Male
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-faintGray w-[1px] h-16"></div>
            <div className="flex justify-center items-center gap-3">
              <img src={call} alt="" />
              <div>
                <h1>Phone Number</h1>
                <h1>+2348958484848</h1>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <img src={message} alt="" />
              <div>
                <h1>Email Address</h1>
                <h1>samuelolaleye@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  gap-20 items-center justify-center">
        <NavLink style={navLinkStyle} 
        to="/transaction_History/table"
        className="font-Karla text-[24px] font-normal text-textGray">
          <p>
            Transaction History
         
          </p>
        </NavLink>
        <NavLink style={navLinkStyle} 
        to="/billingAddress"
        className="font-Karla text-[24px] font-normal text-textGray">
        <p>Billing Address</p>
        </NavLink>
        <NavLink style={navLinkStyle} 
        to='/accountSettings'
        className="font-Karla text-[24px] font-normal text-textGray">
        <p>Account Settings</p>
        </NavLink>
      </div>
      <Outlet/>
    </>
  );
}
