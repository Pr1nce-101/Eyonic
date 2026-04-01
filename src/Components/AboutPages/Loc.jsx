import { FaMapLocationDot } from "react-icons/fa6";
import styles from "../../Styles/About.module.css";
import img1 from "../../Images/MAP.png"


export default function Loc() {

    return (
        <section>
        <div>
            <h1 className={styles.h2}><FaMapLocationDot/> Our Location</h1>
        </div>
        <div className={styles.collage}>
            <img 
                src={img1} 
                alt="Collage" 
                className={styles.img3} 
                />
                <span className={styles.txtcollage}>
                <p className={styles.locitem}>
                    <span className={styles.icon}>📍</span>
                        <span>
                        12 Aminu Kano Crescent<br/>
                        Suite 5B<br/>
                        Wuse II, Abuja 900288
                        </span>
                            </p>
                <p className={styles.locsub}>
                    Opposite Banex Plaza
                </p>
            
            <p className={styles.locitem}>
                <span className={styles.icon}>📞</span>
                <a href="tel:+2349059278608"> (090) 592-78608</a>
                </p>
                <p className={styles.loctitle}>Store hours</p>

            <p className={`${styles.lochours} ${styles.p}`}>
                Mon - Fri: 9:00 am - 6:30 pm;<br/>
                Sat: 10:00 am - 7:30 pm;<br/>
                Sun: 12:00 pm - 5:00 pm;
            </p>
                    </span>
                </div>
        </section>
  );
}