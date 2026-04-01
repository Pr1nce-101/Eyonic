import Navbar from "./Navbar";
import Hero2 from "../Components/ProductPages/Hero2";
import Filter from "../Components/ProductPages/Filter";
import Category from "../Components/ProductPages/Category";

export default function Product() {
  return (
    <div className="app">
      <Navbar />
      <Hero2 />
      <Filter/>
      <Category/>
    </div> 
  );
}
