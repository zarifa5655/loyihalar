import {  FaArrowRight } from "react-icons/fa6";
import rasm from "../assets/rasm/Image 6.png";
import rasm2 from "../assets/rasm/Image (22).png";
function NewApple() {
  return (
    <div className="w-[1320px] m-auto mt-[72px]  grid grid-cols-2 gap-6  ">
      <div className="bg-[#F2F4F5] flex  p-11 gap-10  ">
        <div className=" flex flex-col gap-2 justify-between  items-start ">
          <button className="text-white bg-[#2DA5F3] py-1.5 px-3  text-[14px] font-semibold ">
            INTRODUCING
          </button>
          <h1 className="text-[#191C1F] font-semibold text-[32px] ">
            New Apple
          </h1>
          <p className="text-[#475156] text-[16px] font-normal">
            Jam-packed with innovation, <br />
            HomePod mini delivers unexpectedly.
          </p>
          <div className="flex items-center justify-center bg-[#FA8232] w-[156px] gap-2 py-2">
            <button className="flex bg-[#FA8232] text-white text-[14px] font-bold">
              SHOP NOW
            </button>
            <FaArrowRight className="text-[14px] text-white " />
          </div>
        </div>
        <div className="">
          <img src={rasm} alt="" />
        </div>
      </div>
      <div className="bg-[#191C1F] flex  p-11 gap-10  ">
        <div className=" flex flex-col gap-2 justify-between  items-start ">
          <button
            className="text-[#191C1F] bg-[#EFD33D] py-1.5 px-3  text-[14px] font-semibold "
          >
            INTRODUCING NEW
          </button>
          <h1 className="text-white font-semibold text-[32px] ">New Apple</h1>
          <p className="text-[#475156] text-[16px] font-normal">
            Jam-packed with innovation, <br />
            HomePod mini delivers unexpectedly.
          </p>
          <div className="flex items-center justify-center bg-[#FA8232] w-[156px] gap-2 py-2">
            <button className="flex bg-[#FA8232] text-white text-[14px] font-bold">
              SHOP NOW
            </button>
            <FaArrowRight className="text-[14px] text-white " />
          </div>
        </div>
        <div className="">
          <img src={rasm2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NewApple;
