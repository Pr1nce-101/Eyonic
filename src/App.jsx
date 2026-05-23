import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Compare from './Pages/Compare';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Details from './Components/ProductPages/Details';
import "./App.css"
    
function App() {
        return(
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Product" element={<Product />} />
                    <Route path="/Compare" element={<Compare />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Products/:id" element={<Details />} />
                </Routes> 

                <Footer/>
            </BrowserRouter>
        );
    }


export default App
