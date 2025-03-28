import { FaArrowRight } from "react-icons/fa6";
import rasm from "../../assets/rasm/ras-1.png";
import rasm2 from "../../assets/rasm/rasm-2.png";
import rasm3 from "../../assets/rasm/rasm naushnik.png";

function Header() {
  return (
    <div className=" w-full mt-6 ">
      <div className="m-auto flex w-[1320px] gap-6">
        <div
          className="flex  bg-[#F2F4F5]
        "
        >
          <div className="flex w-[356px]  mt-[140px] ml-[56px] h-[224px] flex-col ">
            <div
              className="text-[#2484C2] text-3.5 flex
"
            >
              <h1>-</h1>
              <h1>THE BEST PLACE TO PLAY</h1>
            </div>
            <h1 className="text-[48px] text-[#191C1F] pb-2">Xbox Consoles</h1>
            <p className=" pb-6 text-[#475156] text-[18px]">
              Save up to 50% on select Xbox games. Get <br />3 months of PC Game
              Pass for $2 USD.
            </p>
            <button
              className="flex items-center bg-[#FA8232] text-white  w-[190px] h-[ 56px] gap-3 px-[32px] py-[12px]
"
            >
              SHOP NOW <FaArrowRight />
            </button>
          </div>

          <div className=" relative m-[56px] w-[368px] h-[408px] items-center justify-center">
            <img src={rasm} alt="" />
            <button
              className="w-[100px] absolute right-0 top-0 h-[100px] bg-[#2DA5F3] rounded-full text-[20px] text-white 
            "
            >
              $299
            </button>
          </div>
        </div>
        <div className="flex h-[520px] flex-col gap-6 ">
          <div className=" h-full  bg-[#191C1F] rounded-[6px]  flex">
            <div className="w-[160px] h-[155px] mt-10 ml-10 flex flex-col gap-1.5">
              <h1 className="text-[#EBC80C] text-[14px]">Summer Sales</h1>
              <h1 className="text-white text-[24px] pb-2.5">
                New Google <br />
                Pixel 6 Pro
              </h1>
              <button
                className="flex items-center bg-[#FA8232] text-white   gap-3 px-[20px] py-[10px]
            "
              >
                SHOP NOW <FaArrowRight />
              </button>
            </div>

            <div className="mt-[47px] relativ">
              <img src={rasm2} alt="" />
              <button
                className=" absolute top-5 right-115 text-[16px] text-[ #141414] bg-[#EFD33D] rounded-[2px] py-2 px-4 
              
              "
              >
                29 % OFF
              </button>
            </div>
          </div>

          <div className=" h-full rounded-[6px] bg-[#F2F4F5] flex  pt-10  py-8   gap-5">
            <div>
              <img src={rasm3} alt="" />
            </div>
            <div className="flex flex-col gap-3  ">
              <h1 className="text-[#191C1F] text-[24px] font-bold">
                Xiamoi <br />
                FlipBuds Pro
              </h1>
              <h1 className="text-[#2DA5F3] text-[18px]">$ 299 USD</h1>
              <button
                className="flex  mt-1 items-center bg-[#FA8232] text-white   gap-3 px-[20px] py-[10px]
              "
              >
                SHOP NOW <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
