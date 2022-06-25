import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import ShowCase from "../../sections/showcase";
function Header() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <h1 className={styles.logo}>
          Next<span>Gen</span>
        </h1>
        <nav
          className={isOpen ? styles.nav : `${styles.nav} ${styles.nav_closed}`}
        >
          <ul className={styles.nav_items}>
            <li>
              <a className={styles.active_item}>Services</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Benefits</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.menu_icon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <MdOutlineClose style={{ color: "white" }} />
          ) : (
            <GiHamburgerMenu />
          )}
        </div>
      </div>
      <ShowCase />
    </header>
  );
}
export default Header;
