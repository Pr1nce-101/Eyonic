import Navbar from "./Navbar";
import Hero1 from "../Components/AboutPages/Hero1";
import Display from "../Components/AboutPages/Display";
import Examples from "../Components/AboutPages/Examples";
import Loc from "../Components/AboutPages/Loc";

export default function About() {
  return (
    <div className="app">
      <Navbar />
      <Hero1 />
      <Display />
      <Examples />
      <Loc />
    </div> 
  );
}
