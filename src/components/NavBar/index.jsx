import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";
import { IoMenu } from "react-icons/io5";
import styles from "./NavBar.module.css";

export function NavBar({ theme, toggleTheme }) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles.nav}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className={styles.div}>
        <LanguageSwitcher />
        <button className={styles.button} onClick={toggleMenu}>
          <IoMenu />
        </button>
        <ul className={menuOpen ? styles.ul_open : styles.ul_close}>
          <li className={styles.li}>
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className={styles.a}
              aria-label="Link to home-section"
            >
              {t("nav.home")}
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className={styles.a}
              aria-label="Link to projects-section"
            >
              {t("nav.projects")}
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className={styles.a}
              aria-label="Link to contact-section"
            >
              {t("nav.contact")}
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              to="education"
              smooth={true}
              duration={1000}
              className={styles.a}
              aria-label="Link to education-section"
            >
              {t("nav.education")}
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              to="recommendation"
              smooth={true}
              duration={1000}
              className={styles.a}
              aria-label="Link to recommendation-section"
            >
              {t("nav.recommendation")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
