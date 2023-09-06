import { Link } from "react-router-dom";
import styles from "./WriteBlogSection.module.css";

function WriteBlogSection() {
  return (
    <div className={styles.wrapper}>
      <h1 className="subHeading">Write Your Own Blog</h1>
      <div className={styles.container}>
        <div>
          <p>
            Ready to share your thoughts with the world? At 'Weird Whisper,' we
            believe that everyone has a unique perspective to offer, and we
            invite you to be a part of our growing community of tech
            enthusiasts, innovators, and storytellers. Whether you're a seasoned
            expert or a passionate newcomer, we provides you with a platform to
            showcase your insights, discoveries, and experiences in the world of
            technology. We're excited to hear your voice in this digital
            symphony, so grab your keyboard and let your ideas resonate with the
            world.
          </p>
          <Link to={`/write/0`}>
            <button className="button">Start Writing</button>
          </Link>
        </div>
        <img
          src="../static/images/write.png"
          alt="intro"
          width={650}
          height={500}
        />
      </div>
    </div>
  );
}

export default WriteBlogSection;
