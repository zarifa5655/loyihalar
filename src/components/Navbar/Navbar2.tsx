import twiter from "../../assets/iconka/Twitter.png";
import fasbook from "../../assets/iconka/Facebook.png";
import vector from "../../assets/iconka/Vector (1).png";
import reddit from "../../assets/iconka/Reddit.png";
import youteb from "../../assets/iconka/Vector (2).png";
import insta from "../../assets/iconka/Vector (3).png";
import { FaArrowDown } from "react-icons/fa";

function Navbar2() {
  return (
  
    <div className="bg-[#1B6392] w-full flex justify-between items-center ">
      <div className="min-w-[1320px] m-auto flex items-center justify-between py-5 px-0">

        <div>
          <h1 className="text-[14px] text-white">
            Welcome to Clicon online eCommerce store.{" "}
          </h1>
        </div>
        <div className="flex">
          <div className="flex pr-6   text-white items-center gap-[12px]   border-r-1 border-white  ">
            <h1 className="text-[14px]">Follow us:</h1>
            <img src={twiter} alt="" />
            <img src={fasbook} alt="" />
            <img src={vector} alt="" />
            <img src={reddit} alt="" />
            <img src={youteb} alt="" />
            <img src={insta} alt="" />
          </div>
          <div className="flex items-center gap-6 justify-between  pl-6">
            <div className="  text-white text-[14px] flex items-center gap-1.5  ">
              <h1>Eng</h1>
              <FaArrowDown className="text-[9px] mt-1" />
            </div>

            <div className="  text-white text-[14px] flex items-center gap-1.5  ">
              <h1>USD</h1>
              <FaArrowDown className="text-[9px] mt-1" />
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default Navbar2;
