// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { ShopDetal } from "../shopDetal";
// import { useRef, useState } from "react";

// function Categorys() {
//   const scrollReff = useRef(null);

//   const scrollLeft = () => {
//     if (scrollReff.current) {
//       scrollReff.current.scrollLeft - = 300;
//     }


//     const scrollRight = () => {
//       if (scrollReff.current) {
//         scrollReff.current.scrollLeft += 300;
//       }
//     };
//   };
//   return (
//     <div className="w-[1320px] m-auto flex flex-col mt-[72px]  gap-10">
//       <div className="text-center ">
//         <h1 className="text-[#191C1F] text-8 ">Shop with Categorys</h1>
//       </div>

//       <div className="relative flex items-center ">
//         <button
//           onClick={scrollLeft}
//           className="bg-[#FA8232] absolute top-0 z-10  text-white w-[48px] h-[48px] rounded-full  flex items-center justify-center shadow-md"
//         >
//           <FaArrowLeft />
//         </button>
//       </div>
//       <div
//         ref={scrollReff}
//         className="flex gap-[18px] overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide  w-[1320px]  m-auto "
//       >
//         {ShopDetal.map((item, index) => (
//           <div
//             className="border-1 border-gray-100 rounded-1  w-full flex flex-col p-6 items-center justify-center gap-4 "
//             key={index}
//           >
//             <img src={item.rasm} alt="" />
//             <h1>{item.title}</h1>
//           </div>
//         ))}
//       </div>
      
//         <button onClick={scr}
//           className="bg-[#FA8232] absolute bottom-[30px] left-[350px] text-white w-[48px] h-[48px] rounded-full p-3"
//         >
//           <FaArrowRight />
//         </button>
//     </div>
    
//   );
// }

// export default Categorys;

// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// import { ShopDetal } from "../shopDetal";
// import { useRef } from "react";

// function Categorys() {
//   const scrollReff = useRef(null);

//   const scrollLeft = () => {
//     if (scrollReff.current) {
//       scrollReff.current.scrollLeft -= 300;
//     }
//   };

//   const scrollRight = () => {
//     if (scrollReff.current) {
//       scrollReff.current.scrollLeft += 300;
//     }
//   };

//   return (
//     <div className="w-[1320px] m-auto flex flex-col mt-[72px] gap-10">
//       <div className="text-center">
//         <h1 className="text-[#191C1F] text-3xl font-semibold">
//           Shop with Categories
//         </h1>
//       </div>

//       <div className="relative flex items-center">
//         {/* Chapga o'tish tugmasi */}
//         <button
//           onClick={scrollLeft}
//           className="bg-[#FA8232] absolute left-0 z-10 text-white w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-md"
//         >
//           <FaArrowLeft />
//         </button>

//         {/* Scrollable kategoriya list */}
//         <div
//           ref={scrollReff}
//           className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide flex gap-4 w-[1100px] mx-auto px-12"
//         >
//           {ShopDetal.map((item, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 rounded-lg w-[180px] flex flex-col p-6 items-center justify-center gap-4 shadow-sm inline-block"
//             >
//               <img
//                 src={item.rasm}
//                 alt={item.title}
//                 className="w-24 h-24 object-contain"
//               />
//               <h1 className="text-lg font-medium">{item.title}</h1>
//             </div>
//           ))}
//         </div>

//         {/* O'ngga o'tish tugmasi */}
//         <button
//           onClick={scrollRight}
//           className="bg-[#FA8232] absolute right-0 z-10 text-white w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-md"
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Categorys;

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { ShopDetal } from "../shopDetal";
import { useRef } from "react";

function Categorys() {
  const scrollReff = useRef < HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollReff.current) {
      scrollReff.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollReff.current) {
      scrollReff.current.scrollLeft += 300;
    }
  };

  return (
    <div className="w-[1320px] m-auto flex flex-col mt-[72px] gap-10">
      <div className="text-center">
        <h1 className="text-[#191C1F] text-3xl font-semibold">
          Shop with Categories
        </h1>
      </div>

      <div className="relative flex items-center">
        {/* Chapga o'tish tugmasi */}
        <button
          onClick={scrollLeft}
          className="bg-[#FA8232] absolute -left-6 z-10 text-white w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-md"
        >
          <FaArrowLeft />
        </button>

        {/* Scrollable kategoriya list */}
        <div
          ref={scrollReff}
          className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide flex gap-4 w-full px-12"
        >
          {ShopDetal.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg min-w-[180px] flex flex-col p-6 items-center justify-center gap-4 shadow-sm"
            >
              <img
                src={item.rasm}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <h1 className="text-lg font-medium">{item.title}</h1>
            </div>
          ))}
        </div>

        {/* O'ngga o'tish tugmasi */}
        <button
          onClick={scrollRight}
          className="bg-[#FA8232] absolute -right-6 z-10 text-white w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Categorys;
