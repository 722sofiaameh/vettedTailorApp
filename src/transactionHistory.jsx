import React from "react";
import mainImg from "../src/assets/images/yellowMan.png";
import call from "../src/assets/images/call.png";
import message from "../src/assets/images/message.png";
import edit from "../src/assets/images/editt.png";
import search from "../src/assets/images/Search.png";
import more from "../src/assets/images/More.png";

export default function TransactionHistory() {
  return (
    <>
      <div className="">
        <div className="history relative bg-grey-800 w-[85%] h-32  mx-auto mt-32"></div>
        <div className=" relative bottom-[120px] h-40   drop-shadow-xl  bg-white  w-[80%]  mx-auto card ">
          <div className="flex justify-end m-4">
            <img src={edit} alt="img" className="w-4 h-4" />
          </div>
          <div className="flex  gap-2 justify-evenly items-center">
            <div className="bg-white drop-shadow-xl mb-14  left-4	w-24 p-4 rounded-2xl">
              <img src={mainImg} className="absolute  inset-x-0 bottom-0" />
            </div>
            <div>
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
      <div className=" md:w-[80%] bg-white mx-auto rounded-xl p-8">
        <div className="flex justify-around pt-2 pb-4">
          <label className="relative block text-Gray_ mt-4 w-[60%]">
            <img src={search} alt="img" className="absolute pt-2 pl-2 " />
            <input
              className="placeholder:text-slate-400 block bg-white w-[100%] ml-10 border border-faintGray rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
              placeholder="Search Order..."
              type="text"
              name="search"
            />
          </label>
          <select
            id="dropdown"
            className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray   rounded-lg pl-2"
          >
            <option className="text-Gray_">Actions</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <table className="table-auto rounded-xl md:w-[100%] text-darkGray ">
          <thead className="pb-[-12]">
            <tr className="">
              <th>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="ml-1 w-4 h-4 mt-4"
                />
              </th>
              <th>
                <select
                  id="dropdown"
                  className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray w-[80%] rounded-lg pl-2 pt-2 pb-2"
                >
                  <option className="text-Gray_">Transaction ID</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </th>
              <th>
                <select
                  id="dropdown"
                  className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray w-[80%] rounded-lg pl-2 pt-2 pb-2"
                >
                  <option className="text-Gray_">Transation Type</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </th>
              <th>
                <select
                  id="dropdown"
                  className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray w-[60%] rounded-lg pl-2 pt-2 pb-2"
                >
                  <option className="text-Gray_">Date</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </th>
              <th>
                <select
                  id="dropdown"
                  className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray w-[80%] rounded-lg pl-2 pt-2 pb-2"
                >
                  <option className="text-Gray_">Amount</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </th>
              <th>
                <select
                  id="dropdown"
                  className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray w-[80%] rounded-lg pl-2 pt-2 pb-2"
                >
                  <option className="text-Gray_">Payment</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </th>
              <th>
                <select
                  id="dropdown"
                  className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray w-[100%] rounded-lg pl-2 pt-2 pb-2"
                >
                  <option className="text-Gray_">Status</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="mr-2 ">
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="ml-2 w-4 h-4 mt-4"
                />
              </td>
              <td className="text-center pt-4">#790841</td>
              <td className="text-center pt-4">Receive Token</td>
              <td className="text-center pt-4">12-Jun- 2021</td>
              <td className="text-center pt-4">5 Tokens</td>
              <td className="text-center pt-4">Token Wallet</td>
              <td className="bg-green-200 rounded-xl text-center text-green-400 text-sm ">
                Successful
              </td>
              <td><img src={more} alt="" /></td>
            </tr>

            <tr>
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="ml-2 w-4 h-4 mt-4"
                />
              </td>
              <td className="text-center pt-4">#790841</td>
              <td className="text-center pt-4">Transfer Token</td>
              <td className="text-center pt-4">12-Jun- 2021</td>
              <td className="text-center pt-4">20 Tokens</td>
              <td className="text-center pt-4">Token Wallet</td>
              <td className="bg-green-200 rounded-2xl text-center text-green-400">
                Successful
              </td>
              <td><img src={more} alt="" /></td>
            </tr>
            <tr className="">
              <td>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="ml-2 w-4 h-4 mt-4"
                />
              </td>
              <td className="text-center pt-4">#790841</td>
              <td className="text-center pt-4">Product Type</td>
              <td className="text-center pt-4">12-Jun- 2021</td>
              <td className="text-center pt-4">#30,000</td>
              <td className="text-center pt-4">Card Payment</td>
              <td className="bg-green-200 rounded-2xl text-center text-green-400 ">
                Successful
              </td>
              <td><img src={more} alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
