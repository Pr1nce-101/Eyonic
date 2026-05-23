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
                <div className={styles.txtcollage}>
                <p className={styles.locitem}>
                    <span className={styles.icon}>📍</span>
                        <span>
                        N-132nd Street<br/>
                        W Maple Road<br/>
                        Wuse II, Abuja 900288 <br />
                        <span className={styles.locsub}>Opposite Target</span>
                        </span>
                    </p>
            
            <p className={styles.locitem}>
                <span className={styles.icon}>📞</span>
                <a href="tel:+2349059278608">0905-927-8608</a>
                </p>
                <p className={styles.loctitle}>Store hours</p>

                <p className={styles.locitem}>
                    Mon - Fri: 9:00 am - 6:30 pm;<br/>
                    Sat: 10:00 am - 7:30 pm;<br/>
                    Sun: 12:00 pm - 5:00 pm;
                </p>
                </div>
                </div>
        </section>
  );
}