import Navbar from "./Navbar";
import Hero from "../Components/HomePages/Hero";
import Collage from "../Components/HomePages/Collage";
import Notsure from "../Components/HomePages/Notsure";
import Showcase from "../Components/HomePages/Showcase";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Collage />
      <Notsure />
      <Showcase />
    </div> 
  );
}