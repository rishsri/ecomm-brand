
import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/homePage/Home"
import CategoryProduct from './pages/product/CategoryProduct';
import AllProducts from './pages/product/AllProducts';
import SingleProductDetails from './pages/product/productDetails/singleProductDetails';
import Contact from './pages/Contact';
import Cart from "./pages/Cart";

function App() {
 

  return (
    <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryName" element={<CategoryProduct />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="product/:productId" element={<SingleProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        </Routes>
    </>
  )
}

export default App
