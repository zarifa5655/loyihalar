import Header from "./Header"
import Header1 from "./Header1"
import Header2 from "./Header2"

function Xammasi() {
  return (
      <div className= " mt-[24px]  grid grid-flow-col grid-rows-3 gap-[24px]">
          <div className="row-span-3">
          <Header  />
          </div>

          <div className="">
          <Header1 />
          </div>

          <div>
          <Header2/>
          </div>
    </div>
  )
}

export default Xammasi