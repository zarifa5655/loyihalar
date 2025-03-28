import { bestDealsDatas } from "../dealsData"
function Deals() {
  return (
      <div>
          <div>
              {bestDealsDatas.map((item,index) => (
                  <div key={index}>
                      <img src={item.img} alt="" />
                      <h1>{item.title }</h1>
                      <h1>{item.price}</h1>
                      {item.discount ? <p>{item.discount}</p> : "Chegirma Yo'q"}
                  </div>
              ))}
          </div>
          

    </div>
  )
}

export default Deals