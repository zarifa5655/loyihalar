import { FaArrowRight } from "react-icons/fa6";
import rasm from "../../assets/rasm/Image.jpg";
import { ShopDetal } from "../shopDetal";
import Deals from "../bestDeals/Deals";
import { bestDealsDatas } from "../dealsData";
import { FeatProducts } from "./FeatProduct";
function Products() {
  return (
    <div className="w-[1320px] m-auto mt-[72px] flex  gap-6">
      <div className="bg-[#F3DE6D] flex flex-col items-center gap-4  pt-8 ">
        <h1 className="text-[#BE4646] text-[14px]">COMPUTER & ACCESSORIES</h1>
        <h1 className="text-[#191C1F] text-[32px] font-semibold ">
          32% Discount
        </h1>
        <h1 className="text-[#475156] text-4 ">
          For all ellectronics products
        </h1>
        <div>
          <button className="text-[#191C1F] text-3.5 font-medium ">
            Offers ends in:
          </button>
          <button className="text-[#191C1F] bg-white py-1.5 px-3 font-semibold rounded-[2px] ">
            ENDS OF CHRISTMAS
          </button>
        </div>
        <button
          className="flex items-cente text-white bg-[#FA8232]   gap-3 px-[20px] py-[10px]
            "
        >
          SHOP NOW <FaArrowRight />
        </button>
        <img src={rasm} alt="" />
      </div>
      <div className="flex-1 flex-col">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#191C1F] font-semibold text-6 ">
              Featured Products
            </h1>
          </div>
          <div className="flex gap-2 items-center ">
            <h1 className="text-[#191C1F] text-[14px] font-semibold">
              All Product
            </h1>
            <h1 className="text-[#5F6C72] text-[14px] font-normal">
              Smart Phone
            </h1>
            <h1 className="text-[#5F6C72] text-[14px] font-normal">Laptop</h1>
            <h1 className="text-[#5F6C72] text-[14px] font-normal">
              Headphone
            </h1>
            <h1 className="text-[#5F6C72] text-[14px] font-normal">TV</h1>
            <h1 className="text-[#FA8232] text-[14px] font-semibold pl-2  ">
              Browse All Product
            </h1>
            <FaArrowRight className="text-[#FA8232] text-[14px] font-semibold " />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6 flex-1 w-full h-[656px]  ">
          {FeatProducts.map((item, index) => (
            <div
              className="border-1 p-4  flex flex-col gap-2 items-start   border-gray-200 rounded-[3px]"
              key={index}
            >
              <img src={item.rasm} alt="" />
              <div className="flex">
                <img src={item.icon} alt="" />
                <img src={item.icon} alt="" />
                <img src={item.icon} alt="" />
                <img src={item.icon} alt="" />
                <img src={item.icon} alt="" />
                <h1>(738)</h1>
              </div>
              <h1 className="text-[#191C1F] text-[14px] font-[400]">
                {item.title}
              </h1>
              <h1 className="text-[#2DA5F3] text-[14px] font-semibold ">
                {item.price}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
