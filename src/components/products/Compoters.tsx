import { FaArrowRight } from "react-icons/fa6";
import rasm from "../../assets/rasm/Image.jpg";
import rasm2 from "../../assets/rasm/Image (23).png";
import { FeatProducts } from "./FeatProduct";

function Compoters() {
  return (
    <div className="w-[1320px] m-auto mt-[72px] flex  gap-6">
      <div className="flex-1 flex-col">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#191C1F] font-semibold text-6 ">
              Computer Accessories
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
      <div className="w-[312px] flex flex-col items-center gap-6  pt-8 ">
        <div className="bg-[#F7E99E] w-full ">
          <img src={rasm2} alt="" />
          
        </div>
        <div
          className="bg-[#124261] "
        ></div>
      </div>
    </div>
  );
}

export default Compoters;
