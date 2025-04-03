import { FaMagnifyingGlass } from "react-icons/fa6";
import dumaloq from "../../assets/iconka/dumaloq.png";
import shoping from "../../assets/iconka/ShoppingCartSimple.png";
import layk from "../../assets/iconka/Vector (5).png";
import user from "../../assets/iconka/User.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
function Navbar3() {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="bg-[#1B6392]  w-full flex items-center justify-between border-t-1 border-white">
      <div className="min-w-[1320px] m-auto flex items-center justify-between py-5">
        <Link to={"/"} className="flex gap-2">
          <img src={dumaloq} alt="" />
          <h1 className="text-white text-[32px]">CLICON</h1>
        </Link>

        <form
          onSubmit={searchHandler}
          className="bg-white py-3.5 w-1/2 gap-4  flex items-center rounded-[2px] px-[14px]"
        >
          <input
            className="outline-none flex-1 text-[#77878F]"
            type="text"
            placeholder="Search for anything ..."
          />
          <button className="cursor-pointer">
            <FaMagnifyingGlass className="text-[18px]" />
          </button>
        </form>

        <div className="flex relative items-center gap-6 cursor-pointer">
          <Link to={"/basket"}>
            <img src={shoping} alt="" />
          </Link>
          <img src={layk} alt="" />
          <button className="cursor-pointer">
            <img onClick={()=>setShowLoginModal(prev=>!prev)} src={user} alt="" />
          </button>
          {showLoginModal ? <Login setShowLoginModal={setShowLoginModal} />:null}
        </div>
      </div>
    </div>
  );
}

export default Navbar3;
