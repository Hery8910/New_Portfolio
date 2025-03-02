import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";
import { CgMenuRight } from "react-icons/cg";
import styles from "./NavBar.module.css";

// eslint-disable-next-line react/prop-types
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
        <ThemeToggle
          theme={theme}
          toggleTheme={toggleTheme}
          className={`${scrolled ? styles.scrolled : ""}`}
        />
        <LanguageSwitcher className={`${scrolled ? styles.scrolled : ""}`} />
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
            aria-label={"Link to home-section"}
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
            aria-label={"Link to projects-section"}
            onClick={isMobile ? closeMenu : null}
          >
            {t("nav.projects")}
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            to="education"
            smooth={true}
            duration={1000}
            className={styles.a}
            aria-label={"Link to about-section"}
            onClick={isMobile ? closeMenu : null}
          >
            {t("nav.about")}
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className={styles.a}
            aria-label={"Link to contact-section"}
            onClick={isMobile ? closeMenu : null}
          >
            {t("nav.contact")}
          </Link>
        </li>
      </ul>
      {isMobile && (
        <Button
          className={`${scrolled ? styles.scrolled : ""}`}
          onClick={toggleMenu}
          ariaLabel={"Toggle navigation menu"}
          aria-expanded={menuOpen}
          label={<CgMenuRight />}
        />
      )}
    </nav>
  );
}
