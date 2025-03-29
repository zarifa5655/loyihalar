import { BiPhoneCall } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { PiArrowsCounterClockwise, PiMapPinLine } from "react-icons/pi";

function Navbar4() {
  // !Esizdanm Chiqmasiz
  return (
    <div className="shadow-[0px_-1px_0px_0px_#E4E7E9_inset] border border-[#E4E7E9]  w-full  ">
      <div className=" w-[1320px] m-auto py-4 flex items-center justify-between gap-6  text-[#5F6C72] text-3.5 ">
 
        <div className="flex items-center gap-1.5">
          <h1>ALL Category</h1>
          <FaArrowDown />
        </div>

      
        <div className="flex items-center gap-1.5">
          <PiMapPinLine />
          <h1>Track Order</h1>
        </div>

        <div className="flex items-center gap-1.5">
          <PiArrowsCounterClockwise />
          <h1>Compare</h1>
        </div>

        <div className="flex items-center gap-1.5">
          <BsHeadphones />
          <h1>Customer Support</h1>
        </div>

        <div className="flex items-center gap-1.5">
          <ImInfo />
          <h1>Need Help</h1>
        </div>
        <div
          className="flex items-center gap-2 text-4.5 text-[ #191C1F]
 "
        >
          <BiPhoneCall />
          <h1>+1-202-555-0104</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar4;
