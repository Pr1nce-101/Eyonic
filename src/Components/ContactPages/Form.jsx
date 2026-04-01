import styles from "../../Styles/Contact.module.css";
import store from "../../Images/STORE.jpg"

export default function Form(){
   return (
      <div className={styles.page}>
        <form className={styles.form}>
            <div className={styles.nameRow}>
                <div className={styles.container}>
                    <label htmlFor="firstName" className={styles.h2}>First Name</label>
                    <input type="text" className={`${styles.short} ${styles.p}`} id="name" placeholder="Enter your First name"/>
                </div>

                <div className={styles.container}>
                    <label htmlFo="lastName" className={styles.h2}>Last Name</label>
                    <input type="text" className={`${styles.short} ${styles.p}`} id="name" placeholder="Enter your Last name"/>
                </div> 
            </div>
           

            <div className={styles.container}>
                <label htmlFor="email" className={styles.h2}>Email address</label>
                <input type="email" className={`${styles.short} ${styles.p}`} id="email" placeholder="Enter your Email"/>
            </div>

            <div className={styles.container}>
                <label htmlFor="tel" className={styles.h2}>Phone number</label>
                <input type="tel" className={`${styles.short} ${styles.p}`} id="number" placeholder="Enter your Phone Number"/>
            </div>

            <div className={styles.container}>
                <label htmlFor="message" className={styles.h2}>Message</label>
                <textarea className={`${styles.message} ${styles.p}`} id="message" rows="3" placeholder="Write your message"></textarea>
            </div>

            <div className={styles.center}>
                <button type="submit" className={styles.button53}>Send Message</button>
            </div>
  </form>

        <div className={styles.contactInfo}>
            <div className={styles.infoBlock}>
            <h3 className={styles.h2}>Chat with us</h3>
            <p className={styles.p1}>Speak to our friendly team via our live mail.</p>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Feature isn't available yet"); }} >
                Shoot us a message            
            </a>
            </div>

            <div className={styles.infoBlock}>
                <h3 className={styles.h2}>Call us</h3>
                <p className={styles.p1}>Call our team Mon–Fri from 8am to 5pm.</p>
                <a href="#">+234 905 9278 608</a>
            </div>

            <img src= {store} alt="" className={styles.store}/>
        </div>
      </div>
    );
}
