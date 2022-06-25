import styles from "./Showcase.module.css";
import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
function ShowCase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.left}>
        <h1 className={styles.heading}>A better way to build Apps</h1>
        <p className={styles.lead}>
          We help you realize your digital business with apps that suit your
          business
        </p>
        <div className={styles.controles}>
          <button className={styles.primary}>Get Started</button>
          <button className={styles.secondary}>
            <AiFillPlayCircle />
            <span>Watch</span>
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <Image src="/assets/vector.jpg" alt="vector" width={800} height={600} />
      </div>
    </div>
  );
}
export default ShowCase;
