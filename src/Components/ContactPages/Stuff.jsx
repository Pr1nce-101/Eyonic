import styles from '../../Styles/Contact.module.css';

export default function Stuff(){
    return(
<div className={styles.infoStrip}>

  <div className={styles.infoItem}>
    <span className={styles.icon}>✉️</span>
    <h4 className={styles.h2}>Email Us</h4>
    <p className={styles.p3}>We respond within 24 hours.</p>
    <a href="mailto:hello@eyeonic.com">hello@eyeonic.com</a>
  </div>

  <div className={styles.infoItem}>
    <span className={styles.icon}>📍</span>
    <h4 className={styles.h2}>Visit Us</h4>
    <p className={styles.p3}>Come see us in person.</p>
    <address className={styles.p}>
      12 Aminu Kano Crescent,
      Suite 5B,
      Wuse II, Abuja 900288
    </address>
  </div>

</div>
    );

}