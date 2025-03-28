import rasm from "../../src/assets/iconka/Package.png";
import rasm2 from "../../src/assets/iconka/Trophy.png";
import rasm3 from "../../src/assets/iconka/CreditCard.png";
import rasm4 from "../../src/assets/iconka/Headphones.png";
function PastkiQIsm() {
  return (
    <div className="w-full">
      <div className=" w-[1320px] m-auto flex items-center justify-between  border-1 border-gray-300 mt-6 p-4 pr-10  ">
        <div className="flex p-4  pr-[50px]   border-r-1 border-gray-300 ml-[20px]  items-center gap-[16px] justify-between ">
          <div>
            <img src={rasm} alt="" />
          </div>
          <div className="flex flex-col   gap-1">
            <h1 className="text-[14px] uppercase decoration-1 text-[#191C1F]">
              Fasted Delivery
            </h1>
            <h1 className="text-[#5F6C72]  text-[14px]">Delivery in 24/H</h1>
          </div>
        </div>

        <div className="flex p-4 gap-[16px] border-r-1 items-center  pr-[50px] border-gray-300 justify-">
          <div>
            <img src={rasm2} alt="" />
          </div>
          <div className="flex flex-col   gap-1">
            <h1 className="text-[14px] uppercase decoration-1 text-[#191C1F]">
              24 Hours Return
            </h1>
            <h1 className="text-[#5F6C72]  text-[14px]">
              100% money-back guarantee
            </h1>
          </div>
        </div>

        <div className="flex p-4  border-gray-300 pr-[50px] gap-[16px] border-r-1 items-center justify-between">
          <div>
            <img src={rasm3} alt="" />
          </div>
          <div className="flex flex-col   gap-1">
            <h1 className="text-[14px] uppercase decoration-1 text-[#191C1F]">
              Secure Payment
            </h1>
            <h1 className="text-[#5F6C72]  text-[14px]">Your money is safe</h1>
          </div>
        </div>

        <div className="flex p-4 gap-[16px] items-center justify-between">
          <div>
            <img src={rasm4} alt="" />
          </div>
          <div className="flex flex-col   gap-1">
            <h1 className="text-[14px] uppercase decoration-1 text-[#191C1F]">
              Support 24/7
            </h1>
            <h1 className="text-[#5F6C72]  text-[14px]">
              Live contact/message
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastkiQIsm;
