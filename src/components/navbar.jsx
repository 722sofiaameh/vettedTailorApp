// import React from 'react'
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Measurement from "../assets/images/Measurement.png";
import Orders from "../assets/images/Orders.png";
import Products from "../assets/images/Products.png";
import Customers from "../assets/images/Customers.png";
import User from "../assets/images/user.png";
import Logout from "../assets/images/Logout.png";
import Fitted from "../assets/images/fitted.png";
import edit from "../assets/images/icon.png";
import tag from "../assets/images/tag.png";

export default function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#000" : "white",
      backgroundColor: isActive ? "white" : "",
      borderRadius: isActive ? "0px 50px 50px 0px" : "",
    };
  };
  return (
    <>
      <div className=" bgColor  flex flex-col justify-between h-screen items-center text-black text-[16px]">
        <div className="flex flex-col items-start gap-4 w-full ">
          {/* <div className='flex justify-center items-start pt-4'> */}
          <div>
            <img src={Fitted} className="w-full px-8 mt-3" />
          </div>
          <div className="mx-auto p-2">
            <div className='flex justify-center items-center gap-1 mb-2'>

                <div className="bg-blue w-2 h-2 flex justify-center items-center rounded-full p-6 text-white font-bold">
                  SA
                </div>
            <div className=" w-8 h-8 -mb-8"><img src={edit}/></div>
            </div>
            <div className="text-center p-1">
              <h1 className="font-bold text-white text-2xl"> Sikiru Agbaje</h1>
              <div className="flex items-center gap-2">
                <p className="font-medium text-white text-lg">
                  www.tailors.fitted.ng/sikiru
                </p>
                <img src={tag} alt="" className=" w-5 h-5" />
              </div>
              <p className="font-light text-white text-[14px]">
                Get measurements from any customer via this link
              </p>

              <select
                id="dropdown"
                className="border-white border-2 rounded-lg mt-1 bg-bgColor p-2 text-white"
              >
                <option value="apple">Application Pending</option>
                <option value="banana">Non-Vetted Traitor</option>
              </select>
            </div>
          </div>
          {/* </div> */}
          <NavLink
            style={navLinkStyle}
            to="/dashboard/overview"
            className="p-3 px-10 rounded-[8px]"
          >
            <div className="flex justify-start items-center w-full gap-16 pr-6">
              <img src={Measurement} alt="" />
              <p className="">Measurements</p>
            </div>
          </NavLink>
          <NavLink
            style={navLinkStyle}
            to="/dashboard/overview"
            className="p-3  px-10 rounded-[8px]"
          >
            <div className="flex justify-start items-center w-full gap-16 pr-6">
              <img src={Orders} alt="" />
              <p className="">Orders</p>
            </div>
          </NavLink>
          <NavLink
            style={navLinkStyle}
            to="/dashboard/overview"
            className="p-3  px-10 rounded-[8px]"
          >
            <div className="flex justify-start items-center w-full gap-16 pr-6">
              <img src={Products} alt="" />
              <p className="">Products</p>
            </div>
          </NavLink>
          <NavLink
            style={navLinkStyle}
            to="/dashboard/overview"
            className="p-3  px-10 rounded-[8px]"
          >
            <div className="flex justify-start items-center w-full gap-16 pr-6">
              <img src={Customers} alt="" />
              <p className="">Customers</p>
            </div>
          </NavLink>
          <NavLink
            style={navLinkStyle}
            to="/profile"
            className="p-3  px-10  rounded-[8px]"
          >
            <div className="flex justify-start items-center w-full gap-16 pr-6">
              <img src={User} alt="" />
              <p className="">My Profile</p>
            </div>
          </NavLink>
          <NavLink
            style={navLinkStyle}
            to="/dashboard/overview"
            className="p-3  px-10 rounded-[8px]"
          >
            <div className="flex justify-start items-center w-full gap-16 pr-6">
              <img src={Logout} alt="" />
              <p className="">Logout</p>
            </div>
          </NavLink>
        </div>
        <div>
          <Link>
            <img src={""} alt="" className="" />
          </Link>
        </div>
      </div>
    </>
  );
}
