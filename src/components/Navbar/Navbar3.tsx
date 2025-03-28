import { FaMagnifyingGlass } from "react-icons/fa6";
import dumaloq from "../../assets/iconka/dumaloq.png";
import shoping from "../../assets/iconka/ShoppingCartSimple.png";
import layk from "../../assets/iconka/Vector (5).png";
import user from "../../assets/iconka/User.png";
function Navbar3() {
  return (
    <div className="bg-[#1B6392] w-full flex items-center justify-between border-t-1 border-white">
      <div className="min-w-[1320px] m-auto flex items-center justify-between py-5">
        <div className="flex gap-2">
          <img src={dumaloq} alt="" />
          <h1 className="text-white text-[32px]">CLICON</h1>
        </div>

        
        <div className="bg-white py-3.5 min-w-[646px]  flex items-center rounded-[2px] justify-between px-[14px] cursor-pointer">
          <input
            className="outline-none w- text-[#77878F] pr-20"
            type="text"
            placeholder="Search for anything ..."
          />
          <FaMagnifyingGlass className="text-[18px]" />
        </div>

        <div className="flex items-center gap-6">
          <img src={shoping} alt="" />
          <img src={layk} alt="" />
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar3;
