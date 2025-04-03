import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar/Navbar2";
import Navbar3 from "./components/Navbar/Navbar3";
import Navbar4 from "./components/Navbar/Navbar4";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import ProductDetail from "./pages/productDetail/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Navbar3 />
      <Navbar4 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
