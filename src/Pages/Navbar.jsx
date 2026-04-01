import { NavLink } from "react-router-dom";
import styles from "../Styles/Home.module.css";
import logo from "../Images/LOGO.png";

export default function Navbar() {
  const paths = ["/", "/About", "/Product", "/Compare", "/Contact"];
  const labels = ["Home", "About", "Products", "Compare", "Contact Us"];

  return (
    <nav className={styles.navcontainer}>
      
      {/* Logo */}
      <div className={styles.logo}>
        <img src={logo} alt="Eyeonic" />
      </div>

      {/* Menu */}
      <ul className={styles.menu}>
        {paths.map((path, i) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {labels[i]}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  );
}
