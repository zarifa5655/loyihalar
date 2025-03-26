import { FaMagnifyingGlass } from "react-icons/fa6"
import dumaloq from "../../assets/iconka/dumaloq.png"
import shoping from "../../assets/iconka/ShoppingCartSimple.png"
import layk from "../../assets/iconka/Vector (5).png"
import user from "../../assets/iconka/User.png"
function Navbar3() {
  return (
      <div className="bg-[#1B6392] flex items-center justify-between px-[300px] py-5 border-t-1 border-white
">
          <div className="flex gap-2" >
              <img src={dumaloq} alt="" />
              <h1 className="text-white text-[32px]">CLICON</h1>
          </div>

          <div className="bg-white py-3.5  flex items-center rounded-[2px] justify-between px-[14px] cursor-pointer">
              <input className="outline-none text-[#77878F] pr-20" type="text" placeholder="Search for anything ..." />
              <FaMagnifyingGlass className="text-[18px]"/>
          </div>

          <div className="flex items-center gap-6">
              <img src={ shoping} alt="" />
              <img src={ layk} alt="" />
              <img src={user} alt="" />
          </div>
      </div>
      
  )
}

export default Navbar3