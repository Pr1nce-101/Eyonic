import styles from "../../Styles/About.module.css";
import hero from "../../Images/HERO1.png";

export default function Hero1() {

    return (
        <section>
            <div className={styles.herocontainer}>
                            <img
                              src={hero}
                              alt="Hero"
                              className={styles.img2}
                              />
                          <div className={styles.txt}>
                            <h2>Your Vision. Our Mission</h2>
                            <p className={styles.p}>At Eyeonic, we bring together clarity, comfort, and style to create eyewear that fits seamlessly into your world. While eyesight may fade over time, we continue to evolve.</p>
                          </div>
                        </div>
        </section>
  );
}