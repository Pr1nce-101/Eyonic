import styles from "../../Styles/Product.module.css";
import { useState } from "react";
import img1 from "../../Images/Sunglasses1.png"
import img2 from "../../Images/Bluelight1.png"
import img3 from "../../Images/Contacts1.png"
import img4 from "../../Images/Smart1.png"
import img5 from "../../Images/Sunglasses2.png"
import img6 from "../../Images/Bluelight2.png"
import img7 from "../../Images/Contacts2.png"
import img8 from "../../Images/Smart2.png"
import img9 from "../../Images/Sunglasses3.png"
import img10 from "../../Images/Bluelight3.png"
import img11 from "../../Images/Contacts3.png"
import img12 from "../../Images/Smart3.png"



const PRODUCTS = [ 
    { id: 1,  name: "Original Wayfarer", brand: "Ray-Ban",    images: img1, category: "Sunglasses"}, 
    { id: 2,  name: "Nash", brand: "Felix Gray", images: img2, category: "Blue-Light Glasses"}, 
    { id: 3,  name: "Hidrocor Collection", brand: "Solotica", images: img3, category: "Contact Lenses"}, 
    { id: 4,  name: "Rokid Max",    brand: "Rokid", images: img4, category: "Smart Glasses"}, 
    { id: 5,  name: "Oakley Holbrook", brand: "Oakley",    images: img5, category: "Sunglasses"}, 
    { id: 6,  name: "Gunnar Intercept", brand: "Gunnar",      images: img6, category: "Blue-Light Glasses"}, 
    { id: 7,  name: "ColorBlends",     brand: "Freshlook",    images: img7, category: "Contact Lenses"}, 
    { id: 8,  name: "Ray-Ban Meta",  brand: "Meta",      images: img8, category: "Smart Glasses"}, 
    { id: 9,  name: "Persol Folding",  brand: "Persol",     images: img9, category: "Sunglasses"}, 
    { id: 10, name: "Blue Light",  brand: "Cyxus", images: img10, category: "Blue-Light Glasses"}, 
    { id: 11, name: "Bella",  brand: "Bella-Elite",    images: img11, category: "Contact Lenses"}, 
    { id: 12, name: "Air 2",  brand: "Xreal", images: img12, category: "Smart Glasses"}, 
  ]; 

const CATEGORY = ["CATEGORIES", "Sunglasses", "Contact Lenses", "Blue-Light Glasses", "Smart Glasses"];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${styles.productcard} ${hovered ? styles.active : ""}`}
    >

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

export default function Category() {

  const [activeCategory, setActiveCategory] = useState("CATEGORIES"); 
  const filtered = activeCategory === "CATEGORIES" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section>

      <h1 className={styles.h2}>More To Discover</h1>
      <div className={styles.filterbar}> 
                  {CATEGORY.map(category => {
                      const isActive = category === activeCategory;
                      return (
                        <button
                          className={`${styles.button21} ${isActive ? styles.active : ""}`}
                          key={category}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div> 
      
                  <div className={styles.itemtext3}> 
                      {filtered.map(product => ( <ProductCard key={product.id} product={product} /> ))} </div>
    </section>
  );
}