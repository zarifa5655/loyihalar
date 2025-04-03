import { RootState } from '../features/store';
import React from 'react'
import {useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import{FaEye } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// type Tlogin = {
//   isloginnn: boolean;
//   setlogin: Dispatch<SetStateAction<boolean>>;

// };

function SaxifaYaratsh(){
    const{user}=useSelector((state:RootState)=>state.user)
    const [Eya, setEya] = useState(false);
    const navigete=useNavigate()
     const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       const from = new FormData(event?.currentTarget);
         const data = Object.fromEntries(from.entries());
         console.log(data)
    };
    const orqaga = () => {
        navigete("/login")
    }
  return (
    <div>
      <div className="w-[424px]  p-8 border-[#E4E7E9] bg-white  border-2 rounded-1 m-auto ">
        <form
          onSubmit={formSubmit}
          className="flex flex-col items-center justify-between gap-5"
        >
          <h1 className="text-center text-[#191C1F] font-semibold text-5">
            ROYXATDAN O'TISH
          </h1>
          <div className="flex flex-col ">
            <label htmlFor="ism">
              <span className="text-[#191C1F] text-[14px] font-normal">
                ISM
              </span>
              <input
                className="min-w-[360px] outline-none min-h-[44px] rounded-[2px] border-[1px] border-[#E4E7E9] "
                type="text"
                name="ism"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-[#191C1F] text-[14px] font-normal ">
              Tel Raqam
            </h1>
            <div className="flex w-full min-w-[360px] min-h-[44px] rounded-[2px] border-[1px] border-[#E4E7E9] items-center justify-end px-3">
              <input
                className=" flex-1  outline-none border-none"
                type={Eya ? "text" : "password"}
                name="password"
              />
              {Eya ? (
                <FaEye onClick={() => setEya(false)} />
              ) : (
                <FaEyeSlash onClick={() => setEya(true)} />
              )}
            </div>
          </div>
          <button className="bg-[#FA8232] w-full flex items-center justify-center text-white text-[14px] font-bold gap-2 py-[14px]">
            Ro'yxatdan o'tish
          </button>
          <button onClick={orqaga} className="bg-[#FA8232] w-full flex items-center justify-center text-white text-[14px] font-bold gap-2 py-[14px]">
            ORQAGA QAYTISH
          </button>
              </form>
              <h1>foydalanuvchi: {user?.name || "tizimga kirmagan" }</h1>      </div>
    </div>
  );
}

export default SaxifaYaratsh
