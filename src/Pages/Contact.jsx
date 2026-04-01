import Navbar from "./Navbar";
import Hero3 from "../Components/ContactPages/Hero3";
import Form from "../Components/ContactPages/Form";
import Stuff from "../Components/ContactPages/Stuff"

export default function Contact(){
   return (
      <div className="app">
        <Navbar />
        <Hero3 />
        <Form />
        <Stuff />
      </div> 
    );
}
