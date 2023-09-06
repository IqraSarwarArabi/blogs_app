import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/all", text: "All Blogs" },
    { to: "/write/0", text: "Write" },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <img src="../static/images/logo.png" alt="logo" />
      </div>
      <div className={styles.nav}>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) => (isActive && styles.active) || ""}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
