import { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";

function Navbar() {
  const [showNavbarAds,setShowNavbarAds]=useState<boolean>(true)
  return (
    <nav className={`${showNavbarAds ? "block":"hidden"} relative  bg-[#191C1F] py-5 w-full px-[12%]`}>
      <div className="flex items-center w-full justify-between ">
        <div className="flex gap-2.5 items-center ">
          <button className="text-[#141414] text-[20px] bg-[#F3DE6D] pt-[6px] px-3 py-2 -rotate-3 w-[74px] h-[40px] ">
            Black
          </button>

          <h1 className="text-white text-[24px]">Friday</h1>
        </div>
        <div className="w-[180px] h-[48px] flex items-center gap-[8px]">
          <h1 className="text-[14px] text-white ">Up to</h1>
          <h1 className="text-[#EBC80C] text-[40px]">59%</h1>
          <h1 className="text-[20px] text-white">OFF</h1>
        </div>
        <div className="flex items-center  w-[156px] h-[48px] gap-[8px] bg-[#EBC80C] justify-center rounded-[2px]">
          <button className="text-[14px]">SHOP NOW </button>
          <FaArrowRight className="text-[14px]" />
        </div>
      </div>
      <button
        onClick={()=>setShowNavbarAds(false)}
        className="w-8 cursor-pointer h-8 absolute right-6 top-6 bg-[#303639] p-2 rounded-[2px] flex items-center justify-center">
        <FaTimes />
      </button>
    </nav>
  );
}

export default Navbar;
