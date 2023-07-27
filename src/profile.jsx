import React, { useEffect, useState } from "react";
import axios from "axios";
import mainImg from "../src/assets/images/yellowMan.png";
import bank from "../src/assets/images/bank.png";
import number from "../src/assets/images/bankNum.png";
import user from "../src/assets/images/user.png";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Profile() {
  const [apiData, setApiData] = useState(null);
  const [bankName, setBankName] = useState("");
  const [bankNum, setBankNum] = useState("");
  const [acctName, setAcctName] = useState("");
  const [error, setError] = useState(false);
  const [banks, setBanks] = useState([]);
  const [resolverData, setResolverData] = useState(null);
  const [formData, setFormData] = useState({
    bankCode: '',
    accountNo: '',
    accountName: ''
  })

  useEffect(() => {
    const fetchBankList = async() => {
      const response = await fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/banks')

      if(!response.ok) throw new Error('Could not retrieve bank list, please try again.')

      const data = await response.json();
      await setBanks(data.data);
    }

    fetchBankList();
  }, [])

  const handleFormChange = async(event) => {
    const { name, value } = event.target;
    setFormData((initData) => ({
      ...initData,
      [name]: value,
    }))
  };

  const handleSubmit = async() => {
    try{
      delete formData.accountName;
      console.log(formData);
      const response = await fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
console.log(response);
      if(!response.ok) {
        await setError(true);
        throw new Error('Could not perform this operation, please try again.');
      }
      else{
        useNavigation("/success");
      }

      const data = await response.json();
      console.log("Data: ", data);
      await setResolverData(data.data);
    } catch (error) {
      throw new Error(`Encountered an Error: ${error}`)
    }
  };

  return (
    <div className="md:bg-white font-kotori shadow-xl rounded-xl md:w-[80%]  w-[100%]  mx-auto md:mt-32 mt-32 md:mx-auto">
      <div className="md:text-center md:pt-8 md:flex md:flex-col hidden">
        <h1 className="text-darkGray text-[24px] font-bold">
          Vetted Tailor Application
        </h1>
        <p className="text-darkGray text-[14px] font-medium pt-2  leading-[20px] font-Karla">
          One step closer to the goal! please provide us with your Bank details
          <br></br>
          with which you will be recieving payment..
        </p>
      </div>
      <div className="flex font-Karla flex-col md:flex-row  justify-around items-center pt-12 pb-14">
        <div className="z-20 bg-white p-8 md:p-0 drop-shadow-xl rounded-xl">
          <div className=" drop-shadow-xl mb-8	w-28 p-2 rounded-2xl">
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
        <div className='my-16 drop-shadow-xl md:my-0 p-2 md:bg-none md:drop-shadow-none bg-white rounded-xl'>
          <div className="flex gap-6 rounded-xl">
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
              <select
                id="bankCode"
                name="bankCode"
                value={formData.bankCode}
                onChange={handleFormChange}
                className="placeholder:text-slate-400 block bg-white w-full border border-faintGray rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              >
                <option value="">Please Select a bank</option>
                {
                  banks.map((bank) => (
                    <option id={bank.id} value={bank.longcode}>{bank.name}</option>
                  ))
                }
              </select>
            </label>
          </div>
          <div>
            <label className="relative block text-Gray_ mt-4">
              Account Number :
              <img src={number} className="absolute pt-2 pl-2" />
              <input
                type="text"
                class="placeholder:text-slate-400 block bg-white w-full border border-faintGray rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Please input your account Number"
                name="accountNo"
                value={formData.accountNo}
                onChange={handleFormChange}
              />
            </label>
          </div>
          <div>
            <label className="relative block text-Gray_ mt-4">
              Account Name :
              <img src={user} className="absolute pt-2 pl-2" />
              <input
                type="text"
                class="placeholder:text-slate-400 block bg-white w-full border border-faintGray rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Please Enter Bank Name"
                name="accountName"
                value={formData.accountName}
                onChange={handleFormChange}
                />
            </label>
          </div>
                { error ?  (<div className='text-red italics pt-2'>Oops,Account Details Not Found</div>) : ""}
          {/* {error && response.status === 404 ? (<div className='text-red-400 italics'>Oops,Account Details Not Found</div>) : ''} */}
          <button
            className="bg-pink p-2 rounded-xl mt-4 text-white text-[14px] italic"
            onClick={() => handleSubmit()}
          >
            Submit Application
          </button>
          {console.log(formData)}
        </div>
      </div>
    </div>
  );
}
