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
import close from "../assets/images/close.png";
import back from "../assets/images/back.png";
import closeFist from "../assets/images/hand_fist.png";

import hamburger from "../assets/images/hamburger.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

import React from "react";

export default function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#000" : "white",
      backgroundColor: isActive ? "white" : "",
      borderRadius: isActive ? "0px 50px 50px 0px" : "",
    };
  };
  return (
    <div className="">
      <div className="">
        <Disclosure>
          <Disclosure.Button className="absolute md:hidden inline-flex items-center gap-20 peer rounded-md p-6 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group bg-white drop-shadow-xl w-[100%] justify-end">
            <img src={back} alt="" className="md:hidden " />
            <div className="flex gap-4">
              <p className="md:hidden flex-col flex text-black text-3xl">
                Profile
              </p>
            </div>
            <GiHamburgerMenu
              className="block  md:hidden h-6 w-6"
              aria-hidden="true "
            />
          </Disclosure.Button>
          <div className="font-Karla flex flex-col justify-between items-center text-black text-[16px] relative gap-6  bg-blend-multiply bgColor md:h-[100vh]  h-screen bg-white z-20  top-0 -left-96 lg:left-0 lg:w-full md:w-[100%] peer-focus:left-0 peer:transition ease-out delay-150 duration-200 ">
            <div className=" flex flex-col items-start gap-4 w-full">
              <div>
                <img src={Fitted} className="w-full px-8 mt-2" />
              </div>
              <div className="mx-auto p-2 hidden md:flex md:flex-col">
                <div className="flex justify-center items-center gap-1 mb-2">
                  <div className="bg-blue w-2 h-2 flex justify-center items-center rounded-full p-6 text-white font-bold drop-shadow-xl">
                    SA
                  </div>
                  <div className=" w-8 h-8 -mb-8">
                    <img src={edit} />
                  </div>
                </div>
                <div className="text-center p-1">
                  <h1 className="font-bold text-white text-2xl">
                    {" "}
                    Sikiru Agbaje
                  </h1>
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
                    className="border-white font-Poppins border-2 rounded-lg mt-1 bg-bgColor p-2 text-white"
                  >
                    <option value="apple">Application Pending</option>
                    <option value="banana">Non-Vetted Traitor</option>
                  </select>
                </div>
              </div>

              <NavLink
                style={navLinkStyle}
                to="/measurements"
                className="p-3 px-10 rounded-[8px] font-Karla "
                
              >
                <div className="flex justify-start items-center w-full gap-16 pr-6">
                  <img src={Measurement} alt="" />
                  <p className='md:flex hidden'>Measurements</p>
                </div>
              </NavLink>
              <NavLink
                style={navLinkStyle}
                to="/transaction_History"
                className="p-3  px-10 rounded-[8px] font-Karla "
                
              >
                <div className="flex justify-start items-center w-full gap-16 pr-6">
                  <img src={Orders} alt="" />
                  <p className='md:flex hidden'>Orders</p>
                </div>
              </NavLink>
              <NavLink
                style={navLinkStyle}
                to="/products"
                className="p-3  px-10 rounded-[8px]"
                
              >
                <div className="flex justify-start items-center w-full gap-16 pr-6">
                  <img src={Products} alt="" />
                  <p className='md:flex hidden'>Products</p>
                </div>
              </NavLink>
              <NavLink
                style={navLinkStyle}
                to="/customers"
                className="p-3  px-10 rounded-[8px] font-Karla "
              >
                <div className="flex justify-start items-center w-full gap-16 pr-6">
                  <img src={Customers} alt="" />
                  <p className='md:flex hidden'>Customers</p>
                </div>
              </NavLink>
              <NavLink
                style={navLinkStyle}
                to="/"
                className="p-3  px-10  rounded-[8px] font-Karla "
                
              >
                <div className="flex justify-start items-center w-full gap-16 pr-6">
                  <img src={User} alt="" />
                  <p className='md:flex hidden'>My Profile</p>
                </div>
              </NavLink>
              <NavLink
                style={navLinkStyle}
                to="/success"
                className="p-3  px-10 rounded-[8px] font-Karla "
                
              >
                <div className="flex justify-start items-center w-full gap-16 pr-6">
                  <img src={Logout} alt="" />
                  <p className='md:flex hidden'>Logout</p>
                </div>
              </NavLink>
            </div>
      <img src={closeFist} className="absolute bottom-0 left-0 w-[30%]" />
          </div>
        </Disclosure>
      </div>
    </div>
  );
}
