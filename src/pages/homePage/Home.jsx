import TopNavbar from "../../components/header/Navbar";
import HeaderSlider from "../../components/slider/HeaderSlider";
import AllCategories from "../../components/category/AllCategories"
import LatestProducts from "../../components/product/LatestProduct";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <TopNavbar />
       <HeaderSlider />
       <AllCategories />
      <LatestProducts />  
      <Footer />
    </>
  );
}

export default Home;
