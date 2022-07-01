import styles from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "../../utils/Links";
import ShowCase from "../../sections/showcase";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <Link href={link.path}>
                    <a
                      className={
                        router.asPath === link.path ? styles.active_item : ""
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.display}
                    </a>
                  </Link>
                </li>
              );
            })}
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
