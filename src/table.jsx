import React from 'react'
import search from "../src/assets/images/Search.png";
import more from "../src/assets/images/More.png";
export default function Table() {
  return (
    <div>
       <div className=" md:w-[80%] md:mt-6 md:mb-8  bg-white mx-auto rounded-xl p-8">
            <div className="flex justify-between items-center pt-2 pb-4">
              <label className="relative block text-Gray_ mt-4 w-[60%]">
                {/* <img src={search} alt="img" className="absolute pt-2 pl-2 " /> */}
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="search"
                  >
                    <g data-name="Layer 2">
                      <path
                        d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                        data-name="search"
                      ></path>
                    </g>
                  </svg>
                </span>
                <input
                  className="placeholder:text-slate-400 block bg-white font-Karla w-[80%]  ml-10 border border-faintGray rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
                  placeholder="Search Order..."
                  type="text"
                  name="search"
                />
              </label>
              <select
                id="dropdown"
                className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray font-Karla w-[20%]   h-8 rounded-lg pl-2"
              >
                <option className="text-Gray_">Actions</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <table className="mb-4 table-auto rounded-xl md:w-[100%] text-darkGray ">
              <thead className="mr-2 border-b-2 mb-2 mt-2 w-full border-gray pt-2">
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
                      className="font-Karla border-faintGray border-2  mt-1 bg-bgColor text-darkGray w-[full] rounded-lg pl-2 pt-2 pb-2 mb-4"
                    >
                      <option className="text-Gray_">Transaction ID</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </th>
                  <th>
                    <select
                      id="dropdown"
                      className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray font-Karla w-[full] rounded-lg pl-2 pt-2 pb-2 mb-4"
                    >
                      <option className="text-Gray_">Transation Type</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </th>
                  <th>
                    <select
                      id="dropdown"
                      className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray font-Karla w-[full]  rounded-lg pl-2 pt-2 pb-2 mb-4"
                    >
                      <option className="text-Gray_">Date</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </th>
                  <th>
                    <select
                      id="dropdown"
                      className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray font-Karla w-[full]  rounded-lg pl-2 pt-2 pb-2 mb-4"
                    >
                      <option className="text-Gray_">Amount</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </th>
                  <th>
                    <select
                      id="dropdown"
                      className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray font-Karla w-[full]  rounded-lg pl-2 pt-2 pb-2 mb-4"
                    >
                      <option className="text-Gray_">Payment</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </th>
                  <th>
                    <select
                      id="dropdown"
                      className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray font-Karla w-[full] rounded-lg pl-2 pt-2 pb-2 mb-4"
                    >
                      <option className="text-Gray_">Status</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="mr-2 border-b-2 mb-2 mt-2 w-full border-gray font-Karla ">
                  <td>
                    <input type="checkbox" name="" id="" className="ml-2 w-4 h-4" />
                  </td>
                  <td className="text-center py-  ">#790841</td>
                  <td className="text-center py-">Receive Token</td>
                  <td className="text-center py-">12-Jun- 2021</td>
                  <td className="text-center py-">5 Tokens</td>
                  <td className="text-center py-">Token Wallet</td>
                  <td className="text-center py-4">
                    <a
                      href="/"
                      className="bg-green-200 rounded-2xl text-center py-2 p-2 text-green-400 "
                    >
                      Successful
                    </a>
                  </td>
                  <td>
                    <img src={more} alt="" />
                  </td>
                </tr>
                <tr className="mr-2 border-b-2 mb-2 mt-2 w-full border-gray">
                  <td>
                    <input type="checkbox" name="" id="" className="ml-2 w-4 h-4" />
                  </td>
                  <td className="text-center py-">#790841</td>
                  <td className="text-center py-">Transfer Token</td>
                  <td className="text-center py-">12-Jun- 2021</td>
                  <td className="text-center py-">20 Tokens</td>
                  <td className="text-center py-">Token Wallet</td>
                  <td className="text-center py-4">
                    <a
                      href="/"
                      className="bg-green-200 rounded-2xl text-center py-2 p-2 text-green-400 "
                    >
                      Successful
                    </a>
                  </td>
                  <td>
                    <img src={more} alt="" />
                  </td>
                </tr>
                <tr className="mx-3">
                  <td>
                    <input type="checkbox" name="" id="" className="ml-2 w-4 h-4" />
                  </td>
                  <td className="text-center py-4 ">#790841</td>
                  <td className="text-center py-4 ">Product Type</td>
                  <td className="text-center py-4 ">12-Jun- 2021</td>
                  <td className="text-center py-4 ">#30,000</td>
                  <td className="text-center py-4 ">Card Payment</td>
                  <td className="text-center py-4">
                    <a
                      href="/"
                      className="bg-green-200 rounded-2xl text-center py-2 p-2 text-green-400 "
                    >
                      Successful
                    </a>
                  </td>
                  <td>
                    <img src={more} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
        
          </div>
    </div>
  )
}
