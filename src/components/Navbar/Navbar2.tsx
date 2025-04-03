import twiter from "../../assets/iconka/Twitter.png";
import fasbook from "../../assets/iconka/Facebook.png";
import vector from "../../assets/iconka/Vector (1).png";
import reddit from "../../assets/iconka/Reddit.png";
import youteb from "../../assets/iconka/Vector (2).png";
import insta from "../../assets/iconka/Vector (3).png";
// import { FaArrowDown } from "react-icons/fa";

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
            <a
              rel="noopener nofollow noreferrer"
              target="_blank"
              href="https://www.x.com"
            >
              <img src={twiter} alt="" />
            </a>
            <a
              rel="noopener nofollow noreferrer"
              target="_blank"
              href="https://www.facebook.com"
            >
              <img src={fasbook} alt="" />
            </a>
            <a
              rel="noopener nofollow noreferrer"
              target="_blank"
              href="https://www.pinterest.com"
            >
              <img src={vector} alt="" />
            </a>
            <a
              rel="noopener nofollow noreferrer"
              target="_blank"
              href="https://www.reddit.com"
            >
              <img src={reddit} alt="" />
            </a>
            <a
              rel="noopener nofollow noreferrer"
              target="_blank"
              href="https://www.youtube.com"
            >
              <img src={youteb} alt="" />
            </a>
            <a
              rel="noopener nofollow noreferrer"
              target="_blank"
              href="https://www.instagram.com"
            >
              <img src={insta} alt="" />
            </a>
          </div>
          <div className="flex items-center gap-6 justify-between  pl-6">
            <select className="cursor-pointer border-none outline-none text-white text-[14px] flex items-center gap-1.5  ">
              <option className="text-black" value="en">
                Eng
              </option>
              <option className="text-black" value="uz">
                Uzbek
              </option>
              <option className="text-black" value="ru">
                Rus
              </option>
              {/* <FaArrowDown className="text-[9px] mt-1" /> */}
            </select>
            <select className="cursor-pointer border-none outline-none text-white text-[14px] flex items-center gap-1.5  ">
              <option className="text-black" value="usd">
                USD
              </option>
              <option className="text-black" value="sum">
                UZS
              </option>
              <option className="text-black" value="rubl">
                RUBL
              </option>
              {/* <FaArrowDown className="text-[9px] mt-1" /> */}
            </select>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
