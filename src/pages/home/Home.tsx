import Deals from "../../components/bestDeals/Deals";
import Header from "../../components/Header/Header";
import Categorys from "../../components/main/Categorys";
import NewApple from "../../components/NewApple";
import Compoters from "../../components/products/Compoters";
import Products from "../../components/products/Products";

function Home() {
  return (
    <div>
      <Header />
      <Deals />
      <Deals />
      <Categorys />
      <Products />
      <NewApple />
      <Compoters />
    </div>
  );
}

export default Home;
