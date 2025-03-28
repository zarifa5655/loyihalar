import { FaArrowRight } from "react-icons/fa6";
import { bestDealsDatas } from "../dealsData";
import rasm from "../../assets/rasm/Image (8).png";
import yulduz from "../../assets/iconka/Star.png";
import ikon from "../../assets/iconka/Heart.png";
import ikon2 from "../../assets/iconka/Eye.png";
import { FaShoppingCart } from "react-icons/fa";
function Deals() {
  return (
    <div className=" w-[1320px]  m-auto mt-[72px] flex flex-col  ">
      <div className="flex items-center justify-between ">
        <div className="flex gap-3">
          <h1 className="text-6 text-[191C1F] font-black">BEST DELS</h1>
          <h1 className="text-[000000] text-3.5"> Dela ends in</h1>
          <h1 className="bg-[#F3DE6D]  text-[#191C1F] text-4">
            16d: 21h: 57m: 23s
          </h1>
        </div>
        <div className="flex items-center gap-2 ">
          <h1 className="text-3.5  text-[#2DA5F3]">Browse All Product</h1>
          <FaArrowRight className="text-[#2DA5F3]" />
        </div>
      </div>
      <div className=" flex mt-6 border-1 border-[#E4E7E9]  ">
        <div className=" w-[328px] relative flex flex-col justify-between p-6 ">
          <img src={rasm} alt="" />
          <button className="absolute top-5 left-5 bg-[#EFD33D] py-1.5 px-2.5">
            32% OFF
          </button>
          <button className="bg-[#EE5858] absolute top-17 left-5 py-1.5 px-2.5 text-white">
            HOT
          </button>
          <div className="">
            <div className="flex  gap-0.5">
              <img src={yulduz} alt="" />
              <img src={yulduz} alt="" />
              <img src={yulduz} alt="" />
              <img src={yulduz} alt="" />
              <img src={yulduz} alt="" />
              <h1>(52,677)</h1>
            </div>
            <h1 className="text-[#191C1F] text-4">
              Xbox Series S - 512GB SSD Console <br />
              with Wireless Controller - EU Versio...
            </h1>
            <button className="text-[#ADB7BC] text-4 pr-2 line-through">$865.99</button>
            <button className="text-[#2DA5F3] text-[18px]">$442.12</button>
            <p className="text-[#5F6C72] text-[14px]">
              Games built using the Xbox Series X|S <br />
              development kit showcase unparalleled <br />
              load times, visuals.
            </p>
          </div>
          <div className="flex justify-between items-center ">
            <button className="p-3 bg-[#FFE7D6]">
              <img src={ikon} alt="" />
            </button>
            <button className="bg-[#FA8232] p-3 flex gap-2 items-center text-white ">
              <FaShoppingCart /> <h1>ADD TO CARD</h1>
            </button>
            <button className="p-3 bg-[#FFE7D6]">
              <img src={ikon2} alt="" />
            </button>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-4 ">
          {bestDealsDatas.map((item, index) => (
            <div
              className=" p-4  border-1 border-[#E4E7E9] flex flex-col justify-between relative "
              key={index}
            >
              <div>
                <img src={item.img} alt="" />
              </div>
              <h1 className="text-[#191C1F] text-[14px] ">{item.title}</h1>
              <h1 className="text-[#2DA5F3] text-[14px]">{item.price}</h1>
              <div className="">
                {item.btn ? (
                  <p className="bg-[#EFD33D] absolute top-2.5 left-2.5 py-1 max-w-20  px-1 text text-center">
                    {item.btn}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deals;
