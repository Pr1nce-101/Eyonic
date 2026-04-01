import styles from "../../Styles/Product.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../Images/Gucci1.png"
import img2 from "../../Images/Gucci2.png"
import img3 from "../../Images/Prada1.png"
import img4 from "../../Images/Prada2.png"
import img5 from "../../Images/Balen1.png"
import img6 from "../../Images/Balen2.png"
import img7 from "../../Images/Miu1.png"
import img8 from "../../Images/Miu2.png"
import img9 from "../../Images/Loewe1.png"
import img10 from "../../Images/Loewe2.png"
import img11 from "../../Images/Versace1.png"
import img12 from "../../Images/Versace2.png"


/*Array of the each product details */
const PRODUCTS = [ 
    { id: 2,  name: "Cat-Eye Acetate", brand: "Gucci",      images: img1}, 
    { id: 3,  name: "Square Frame",     brand: "Prada",      images: img3}, 
    { id: 1,  name: "Pilot Aviator",   brand: "Versace",    images: img11}, 
    { id: 4,  name: "Shield Sport",    brand: "Balenciaga", images: img5}, 
    { id: 5,  name: "Miu Ombre",       brand: "Miu Miu",    images: img7}, 
    { id: 6,  name: "Geo Frame",       brand: "Loewe",      images: img9}, 
    { id: 7,  name: "Crystal Rim",     brand: "Versace",    images: img12}, 
    { id: 8,  name: "Heritage Round",  brand: "Prada",      images: img4}, 
    { id: 9,  name: "Bamboo Wrap",     brand: "Gucci",      images: img2}, 
    { id: 10, name: "Geo Black",     brand: "Balenciaga", images: img6}, 
    { id: 11, name: "Vertical Logo",     brand: "Miu Miu",    images: img8}, 
    { id: 12, name: "Calla Oval",      brand: "Loewe",      images: img10}, 
  ]; 

const BRANDS = ["All", "Versace", "Prada", "Gucci", "Balenciaga", "Miu Miu", "Loewe"];

/*The Product card as a function with styling */
function ProductCard({ product }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  
  return (
    
    <div
    
      onClick={() => navigate(`/products/${product.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${styles.productcard} ${hovered ? styles.active : ""}`}
    >{/*onClick to naviagte to the individual product page, and onMouseEnter & onMouseLeave for hover effects*/}

    <div className={styles.imageContainer}>

      <img src={product.images} alt={product.name} />
  
      <div className={styles.imageOverlay}>
        <span className={styles.center}>
          <p className={styles.p}>{product.name}</p>
        </span>
          

          <div className={styles.padding}>
              <p className={styles.brand}>{product.brand}</p>
              </div>
              
          </div>
      </div>
    </div>
  );
}

export default function Filter() {

const [activeBrand, setActiveBrand] = useState("All"); 
const filtered = activeBrand === "All" ? PRODUCTS : PRODUCTS.filter(p => p.brand === activeBrand);

  return (
    <section>
        <div className={styles.filterbar}> 
            {BRANDS.map(brand => { const isActive = brand === activeBrand; 
                return ( 
                <button 
                className={`${styles.button21} ${isActive ? styles.active : ""}`}
                key={brand} 
                onClick={() => setActiveBrand(brand)} > 
                {brand} 
                </button> ); 
            })} 
            </div> 

            <h1 className={styles.h2}>Designer Frames</h1>

            <div className={styles.itemtxt2}> 
                {filtered.map(product => ( <ProductCard key={product.id} product={product} /> ))} </div>
    </section>
  );
}