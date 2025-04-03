import { Dispatch, SetStateAction, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaArrowRight, FaEye } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type Tlogin = {
  setShowLoginModal: Dispatch<SetStateAction<boolean>>;
};
function Login({ setShowLoginModal }: Tlogin) {
  const [Eya, setEya] = useState(false)
    const { user } = useSelector((state: RootState) => state.user);
  
  const naviget=useNavigate()
  const formSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const from = new FormData(event.currentTarget)
    const data = Object.fromEntries(from.entries())
    console.log(data)
  }
  return (
    <div className={`absolute rounded-sm right-0 top-11 z-10   `}>
      <div className="w-[424px] min-h-[444px] p-8 rounded-sm border-[#E4E7E9] bg-white  border-2 rounded-1 ">
        <form onSubmit={formSubmit} className="flex flex-col items-center justify-between gap-5">
          <h1 className="text-center text-[#191C1F] font-semibold text-5">
            Sign in to your account
          </h1>
          <div className="flex w-full flex-col ">
            <label htmlFor="email">
              <span className="text-[#191C1F] text-[14px] font-normal">
                Email Address
              </span>
              <input
                className="w-full p-2 outline-none  rounded-[2px] border-[1px] border-[#E4E7E9] "
                type="text"
                name="email"
              />
            </label>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-[#191C1F] text-[14px] font-normal ">Password</h1>
            <div className="flex w-full min-w-[360px] min-h-[44px] rounded-[2px] border-[1px] border-[#E4E7E9] items-center justify-end px-3">
              <input className=" flex-1  outline-none border-none" type={Eya ? "text" : "password"} name="password" />
              {
                Eya ? 
                  <FaEye onClick={()=>setEya(false)} /> :
                  
              <FaEyeSlash onClick={()=>setEya(true)} />
              }
            </div>
          </div>
          <button className="bg-[#FA8232] w-full flex items-center justify-center text-white text-[14px] font-bold gap-2 py-[14px]">
            LOGIN <FaArrowRight />
          </button>
          <div className="w-full">
            <h1 className="text-center ">Don't have account</h1>
            <button onClick={()=>naviget("saxifayaratsh")} className="w-full  border-[#FFE7D6] border-[2px] text-[#FA8232] font-bold py-[14px]  ">
              Create account
            </button>
          </div>
          <button
            onClick={() => setShowLoginModal(false)}
            className=" border-[#FFE7D6] border-[2px] text-[#FA8232] w-full flex items-center justify-center text-[14px] font-bold  py-[14px] cursor-pointer"
          >
            LOG OUT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
