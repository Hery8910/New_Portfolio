import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";
import { IoMenu } from "react-icons/io5";
import styles from "./NavBar.module.css";

export function NavBar({ theme, toggleTheme }) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
      setMenuOpen(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${isMobile ? styles.nav_mobile : ""}`}>
      <div className={styles.div}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <LanguageSwitcher />
      </div>

      <ul
        className={`${styles.ul} ${scrolled ? styles.scrolled : ""} ${
          isMobile ? styles.mobile : ""
        } ${
          menuOpen
            ? isMobile
              ? styles.ul_open
              : ""
            : isMobile
            ? styles.ul_close
            : ""
        }`}
      >
        <li className={styles.li}>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            className={styles.a}
            aria-label="Link to home-section"
            onClick={isMobile ? closeMenu : null}
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
      </ul>
      {isMobile && (
        <Button
          className={styles.button}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          label={<IoMenu />}
        />
      )}
    </nav>
  );
}
