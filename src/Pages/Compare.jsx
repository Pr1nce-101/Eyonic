
import styles from "../Styles/Compare.module.css";
import { useState } from "react";
import { PRODUCTS } from "../Components/ProductPages/Product.js";

// Renders a single clickable product card in the grid
//   product= the product object (name, brand, images)
//   onClick= function to call when this card is clicked (sets left or right selection)
//   isSelected= boolean: true if this product is currently the active selection
function ProductCard({ product, onClick, isSelected }) {
  return (
    // Clicking the card calls onClick with this product
    // If isSelected is true the selected CSS class is added
    <div
      onClick={() => onClick(product)}
      className={`${styles.productcard} ${isSelected ? styles.selected : ""}`}
    >
      <div className={styles.imageContainer}>

        {/* Product image */}
        <img src={product.images} alt={product.name} />

        {/* Overlay that appears on top of the image with name + brand */}
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

// Renders a two-sided comparison layout where users pick one product per side
export default function Compare() {

  // Tracks the product selected on the LEFT side
  const [leftSelected, setLeftSelected] = useState(null);

  // Tracks the product selected on the RIGHT side
  const [rightSelected, setRightSelected] = useState(null);

  return (
    <div className={styles.compareContainer}>

      {/* ===== LEFT SIDE ===== */}
      <div className={styles.compareSide}>

        {/* If a product has been selected on the left, show its details panel */}
        {leftSelected ? (
          <div className={styles.selectedPanel}>

            {/* Large product image */}
            <div className={styles.selectedImageContainer}>
              <img src={leftSelected.images} alt={leftSelected.name} />
            </div>

            <div className={styles.txt1}>
              <h2>{leftSelected.name}</h2>
              <p className={styles.txtbrand}><i>{leftSelected.brand}</i></p>
              <p className={styles.price}>
                <span className={styles.currency}>$</span>
                {leftSelected.price}
              </p>

              {/* Loop through the product's details array and render each as a list item */}
              <ul className={styles.details}>
                {leftSelected.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>

              {/* Clear button resets leftSelected back to null, hiding the panel */}
              <button
                className={styles.button53}
                onClick={() => setLeftSelected(null)}
              >
                Clear
              </button>
            </div>

          </div>
        ) : (
          // Shown when no left product is selected yet
          <div className={styles.emptyPanel}>Click a product to select</div>
        )}

        {/* Grid of all products — clicking one sets it as the left selection */}
        <div className={styles.grid}>
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setLeftSelected}        // Clicking calls setLeftSelected with this product
              isSelected={leftSelected?.id === product.id}  // Highlights if it's currently selected
            />
          ))}
        </div>
      </div>

      {/* ===== DIVIDER ===== */}
      {/* Visual separator between the two sides */}
      <div className={styles.divider}>VS</div>

      {/* ===== RIGHT SIDE ===== */}
      {/* Mirror of the left side, but uses rightSelected + setRightSelected */}
      <div className={styles.compareSide}>

        {/* If a product has been selected on the right, show its details panel */}
        {rightSelected ? (
          <div className={styles.selectedPanel}>

            {/* Large product image */}
            <div className={styles.selectedImageContainer}>
              <img src={rightSelected.images} alt={rightSelected.name} />
            </div>

            <div className={styles.txt1}>
              <h2>{rightSelected.name}</h2>
              <p className={styles.txtbrand}><i>{rightSelected.brand}</i></p>
              <p className={styles.price}>
                <span className={styles.currency}>$</span>
                {rightSelected.price}
              </p>

              {/* Loop through the product's details array and render each as a list item */}
              <ul className={styles.details}>
                {rightSelected.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            {/* Clear button resets rightSelected back to null */}
            <button
              className={styles.button53}
              onClick={() => setRightSelected(null)}
            >
              Clear
            </button>

          </div>
        ) : (
          // Shown when no right product is selected yet
          <div className={styles.emptyPanel}>Click a product to select</div>
        )}

        {/* Grid of all products — clicking one sets it as the right selection */}
        <div className={styles.grid}>
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setRightSelected}        // Clicking calls setRightSelected with this product
              isSelected={rightSelected?.id === product.id}  // Highlights if it's currently selected
            />
          ))}
        </div>
      </div>

    </div>
  );
}