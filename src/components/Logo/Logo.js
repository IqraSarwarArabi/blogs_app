import styles from "./Logo.module.css";
function Logo() {
  return (
    <img src="../static/images/logo.png" alt="logo" className={styles.logo} />
  );
}

export default Logo;
