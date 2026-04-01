import styles from "../../Styles/Home.module.css";
import not from "../../Images/SURE.png";
import { useNavigate } from "react-router-dom";


export default function Notsure() {

    const navigate = useNavigate();

    return (
        <section>
          <div cl></div>
            <div className={styles.herocontainer}>
                        <img
                          src={not}
                          alt="Hero"
                          className={styles.img4}
                          />
                      <div className={styles.txt2}>
                        <h2>Unsure What To Pick?</h2>
                        <p className={styles.p}>Now you can compare and contrast the features and designs for multiple brands with our new feature</p>
                        <button className={styles.button89} onClick={() => navigate("/Compare")}>Try Now</button>
                      </div>
                    </div>
        </section>
  );
}