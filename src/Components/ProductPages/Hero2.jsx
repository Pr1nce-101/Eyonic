import styles from "../../Styles/Product.module.css";
import hero from "../../Images/HERO2.png"

export default function Hero2() {
  return (
    <section>
      <div className={styles.herocontainer}>
                  <img
                    src={hero}
                    alt="Hero"
                    className={styles.img2}
                    />
                <div className={styles.txt}>
                  <h2>Find Your Pair</h2>
                  <p className={styles.p}>From designer classics to smart lenses — every style, every need, all in one place.</p>
                </div>
              </div>
    </section>
  );
}