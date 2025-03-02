import { Link } from "../Link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope  } from "react-icons/fa";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p className={styles.header_p}>{t("header.greeting")}</p>
        <h1 className={styles.h1}>Heriberto Santana</h1>
        <h2 className={styles.h2}>{t("header.description")}</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link
              href="https://github.com/Hery8910"
              ariaLabel="Link to Github profile"
              icon={<FaGithub />}
            />
          </li>
          <li className={styles.li}>
            <Link
              href="https://www.linkedin.com/in/heriberto-santana-solsona-7366342b2/"
              ariaLabel="Link to linkedin profile"
              icon={<FaLinkedin />}
            />
          </li>
          <li>
            <Link
              href={`mailto:${t("cta.email")}`}
              ariaLabel={"Link to Email"}
              icon={<FaEnvelope />}
            />
          </li>
        </ul>
      </header>
      <img
        className={styles.img}
        src="/images/profile.webp"
        alt="Profil picture of Heriberto Santana"
      />
    </main>
  );
}
