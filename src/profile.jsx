import React, { useEffect, useState } from "react";
import axios from "axios";
import mainImg from "../src/assets/images/yellowMan.png";
import bank from "../src/assets/images/bank.png";
import number from "../src/assets/images/bankNum.png";
import user from "../src/assets/images/user.png";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [apiData, setApiData] = useState(null);
  const [bankName, setBankName] = useState("");
  const [bankNum, setBankNum] = useState("");
  const [acctName, setAcctName] = useState("");
  const [error, setError] = useState(false);

  // Function to fetch data from the API using Axios
  // const fetchData = async () => {
  //   try {
  //     const apiUrl = 'https://fitted-portal-api.herokuapp.com/api/v1/bank/banks';
  //     const response = await axios.get(apiUrl);
  //     setApiData(response.data);
  // Storing the API response in the state
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // Call the fetchData function when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);
  const apiUrl = "https://fitted-portal-api.herokuapp.com/api/v1/bank/banks";
  axios.get(apiUrl).then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.headers);
    console.log(response.config);
    console.log(response.statusText);
  });

const handleSubmit = (response) => {
    if (response === true && response) {
      setApiData(response.data);
      // useNavigate('/success')
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="bg-white box rounded-xl w-[80%]  mx-auto md:mt-32">
      <div className="text-center pt-8">
        <h1 className="text-darkGray text-[24px] font-bold">
          Vetted Tailor Application
        </h1>
        <p className="text-darkGray text-[14px] font-medium pt-2  leading-[20px] font-Karla-Regular">
          One step closer to the goal! please provide us with your Bank details
          <br></br>
          with which you will be recieving payment..
        </p>
      </div>
      <div className="flex justify-around items-center pt-12 pb-14">
        <div className="">
          <div className="bg-white drop-shadow-xl mb-8	w-24 p-2 rounded-2xl">
            <img src={mainImg} className="" />
          </div>
          <div className="w-[40%] flex flex-col justify-between">
            <div className="flex gap-4 ">
              <div className="">
                <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                  Name:
                </p>
                <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                  Gender:
                </p>
                <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                  Sew Gender:
                </p>
                <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                  Phone Number:
                </p>
                <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                  Email Address:
                </p>
                <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                  Store Name:
                </p>
                <p className="text-faintGray text-[16px] font-bold whitespace-nowrap">
                  Location:
                </p>
              </div>
              <div>
                <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                  Samuel Oladokun{" "}
                </p>
                <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                  Male{" "}
                </p>
                <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                  Both{" "}
                </p>
                <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                  08137901372{" "}
                </p>
                <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                  biola@fitted.ng{" "}
                </p>
                <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                  Skibi Fashion House{" "}
                </p>
                <p className="text-darkGray text-[16px] font-medium whitespace-nowrap">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-6">
            <div className="flex flex-col">
              <label className="text-Gray_">Gender You Sew For:</label>
              <select
                id="dropdown"
                className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray w-[100%] rounded-lg pl-2 pt-2 pb-2"
              >
                <option className="text-Gray_">Please Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-Gray_">Styles You Sew:</label>
              <select
                id="dropdown"
                className="border-faintGray border-2  mt-1 bg-bgColor text-darkGray w-[100%] rounded-lg pl-2 pt-2 pb-2"
              >
                <option className="text-Gray_  ">Please Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div>
            <label className="relative block text-Gray_ mt-4">
              Bank Name :
              <img src={bank} className="absolute pt-2 pl-2" />
              <input
                className="placeholder:text-slate-400 block bg-white w-full border border-faintGray rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Please select your bank"
                type="text"
              />
            </label>
          </div>
          <div>
            <label className="relative block text-Gray_ mt-4">
              Account Number :
              <img src={number} className="absolute pt-2 pl-2" />
              <input
                class="placeholder:text-slate-400 block bg-white w-full border border-faintGray rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Please input your account Number"
                type="text"
                name="search"
                value={bankNum}
                onChange={(e) => setBankNum(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="relative block text-Gray_ mt-4">
              Account Name :
              <img src={user} className="absolute pt-2 pl-2" />
              <input
                class="placeholder:text-slate-400 block bg-white w-full border border-faintGray rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Please Enter Bank Name"
                type="text"
                name="search"
                value={acctName}
                onChange={(e) => setAcctName(e.target.value)}
              />
            </label>
          </div>
          {/* {error && response.status === 404 ? (<div className='text-red-400 italics'>Oops,Account Details Not Found</div>) : ''} */}
          <button
            className="bg-pink p-2 rounded-xl mt-4 text-white text-[14px] italic"
            onClick={() => handleSubmit()}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
}
