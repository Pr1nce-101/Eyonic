import styles from "../../Styles/Home.module.css";
import collage from "../../Images/COLLAGE.png";
import { useNavigate } from "react-router-dom";

export default function Collage() {

  const navigate = useNavigate();

  return (
    <section>
        <div className={styles.collage}>
                <img 
                  src={collage} 
                  alt="Collage" 
                  className={styles.img3} 
                  />
                  <span className={styles.txtcollage}>
                    <h2 className={styles.h2}>There's A <br />Pair For <br />Everyone</h2>
                  <p className={styles.p}>Regardless of your reason, whether for prescription or style, here at Eyeonic we pride ourselves on offering a variety of glasses that will definitely catch your eye.</p>
                  <button className={styles.button89} onClick={() => navigate("/Product")}>Get My Pair</button>
                  </span>
                  
            </div>
    </section>
  );
}