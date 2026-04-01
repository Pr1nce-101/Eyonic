import styles from "../../Styles/Home.module.css";
import hero from "../../Images/HERO.png";

export default function Hero() {
  return (
    <section>
         <div className={styles.herocontainer}>
                <img
                  src={hero}
                  alt="Hero"
                  className={styles.img2}
                  />
              <div className={styles.txt}>
                <h2>See With A Difference</h2>
                <p className={styles.p}>With Eyeonic you'll discover new ways to view the world. We prioritize matching you with a pair that not only reflects your style, but one that truly <i>sees</i> you. </p>
              </div>
            </div>
    </section>
  );
}