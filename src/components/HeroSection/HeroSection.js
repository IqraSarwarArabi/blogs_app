import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>
          <span className={styles.brown}>Weird Whisper</span> Where Technology
          Speaks Volumes
        </h1>
        <p>
          Dive into the future with Weird Whisper, your ultimate source for tech
          insights. Uncover the latest trends, gadgets, and innovations in just
          a few clicks.
        </p>
        <Link to={`/all`}>
          <button className="button">Explore Our Blogs</button>
        </Link>
      </div>
      <img
        src="../static/images/sbg.png"
        alt="intro"
        width={650}
        height={500}
      />
    </div>
  );
}

export default HeroSection;
