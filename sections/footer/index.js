import Link from "next/link";
import styles from "./Footer.module.css";
import { links } from "../../utils/Links";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.nav_footer}>
        <div className={styles.left_nav}>
          <h1 className={styles.logo}>
            Next<span>Gen</span>
          </h1>
          <nav className={styles.nav}>
            <ul className={styles.nav_items}>
              {links.map((link, i) => {
                return (
                  <li key={i}>
                    <Link href={link.path}>
                      <a>{link.display}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className={styles.social}>
          <AiFillFacebook />
          <AiOutlineInstagram />
          <AiFillLinkedin />
          <AiOutlineTwitter />
        </div>
      </div>
      <small className={styles.copyright}>@2022 NextGen, coded by Me</small>
    </footer>
  );
}

export default Footer;
