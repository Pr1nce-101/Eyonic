import styles from "../../Styles/Contact.module.css";
import hero from "../../Images/HERO3.jpg"

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
                  <h2>Let's Get In Touch</h2>
                  <p className={styles.p3}>At Eyeonic, we will help you find the perfect pair no matter what. Whether online or at our store, support and direction will be there.</p>
                </div>
              </div>
    </section>
  );
}