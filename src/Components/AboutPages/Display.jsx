import styles from "../../Styles/About.module.css";
import img1 from "../../Images/im1.jpg";
import img2 from "../../Images/im2.jpg";
import img3 from "../../Images/im3.jpg";
import img4 from "../../Images/im4.jpg";
import img5 from "../../Images/im5.jpg";
import img6 from "../../Images/im6.jpg";


export default function Display() {
  return (
    <section>
      <div className={styles.grid}>
        <div className={styles.item1}><img src={img1} /></div>
        <div className={styles.item2}><img src={img2} /></div>
        <div className={styles.item3}><img src={img3} /></div>
        <div className={styles.item4}><img src={img4} /></div>
        <div className={styles.rightStack}>
  <div><img src={img5} /></div>
  <div><img src={img6} /></div>
</div>
      </div>
    </section>
  );
}