import { useParams } from "react-router-dom";
import { PRODUCTS } from "../ProductPages/Product";
import styles from "../../Styles/Product.module.css";
import myFile from "../../Files/Product-Details.pdf"

export default function Details() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === Number(id));
  {/*Download function adjusted to bypass web browser preview */}
  const handleDownload = () => {
  fetch(myFile, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Product-Details.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
};


  return (
    <div className={styles.collage}>
      {/* Image */}
      <img src={product.images} alt={product.name} className={styles.img3}/>

      {/* Info */}
      <div className={styles.txtcollage}>
          <h1>{product.name}</h1>
          <p className={styles.p}><i className={styles.txtbrand}>{product.brand}</i></p>
          <p className={styles.price}>
            <span className={styles.currency}>$</span>
            {product.price}
          </p>
          <p className={styles.txtlist}>{product.description}</p>
      
      

      {/* Map() function comes in — listing details */}
      <ul className={styles.txtlist}>
        {product.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <button onClick={handleDownload} className={`${styles.button89} ${styles.paddingbt}`}>More Details</button>
</div>
     
    </div>
  );
}