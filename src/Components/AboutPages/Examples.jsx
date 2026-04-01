import styles from "../../Styles/About.module.css";
import img1 from "../../Images/im9.jpg";
import img2 from "../../Images/im8.jpg";
import img3 from "../../Images/im7.jpg";
import { useNavigate } from "react-router-dom";


export default function Examples() {

    const navigate = useNavigate();

    return (
        <section>
            <div>
                <h1 className={styles.h1}>
                         <span className={styles.star}>✦</span>
                            Our Products
                          <span className={styles.star}>✦</span>
                      </h1>
            </div>
            <div className={styles.categories}>
                <div className={styles.gallery}>
                    <img src={img1} />
                        <div className={styles.info}>
                        <h3>Designer Glasses</h3>
                        <p>Stylish frames for matching elegance with comfort.</p>
                </div>
            </div>

            <div className={styles.gallery}>
                <img src={img2} />
                    <div className={styles.info}>
                    <h3>Sunglasses</h3>
                    <p>Protect your eyes while looking sharp.</p>
                </div>
            </div>

            <div className={styles.gallery}>
                <img src={img3} />
                    <div className={styles.info}>
                    <h3>Contact Lenses</h3>
                    <p>Lightweight and convenient vision solutions.</p>
                </div>
            </div>
        </div>

        <div className={styles.note}>
            <p> We also offer frames for medicated lenses. Please contact us in advance for pickup or lens fitting arrangements. </p>
            <button className={styles.button89}  onClick={() => navigate("/Contact")}>Contact Us</button>
        </div>
    </section>
  );
}