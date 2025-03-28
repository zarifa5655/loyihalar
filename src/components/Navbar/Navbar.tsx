import { FaArrowRight, FaTimes } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="  bg-[#191C1F] p-5 w-full m-auto  flex items-center justify-between">
      <div className="flex items-center min-w-[1320px] m-auto justify-between ">
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
        <div className="w-[32px] h-[32px] bg-[#303639] p-[8px] rounded-[2px] flex items-center justify-center">
          <button>
            <FaTimes />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
