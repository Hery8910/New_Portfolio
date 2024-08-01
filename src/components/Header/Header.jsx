import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Header.module.css";

export function Header() {
  return (
    <main className={styles.main}>
      <div>
        <img className={styles.img} src="/public/Profil.webp" alt="Picture of Heriberto Santana" />
      </div>
      <div>
        <p className={styles.p}>Hi, I'm </p>
        <h1 className={styles.h1}>Heriberto Santana</h1>
        <h2 className={styles.h2}><span className={styles.span}>Full-Stack</span> Developer</h2>
        <div className={styles.div}>
        <a
          className={styles.a}
          href="https://github.com/Hery8910"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className={styles.a}
          href="https://www.linkedin.com/in/heriberto-santana-solsona-7366342b2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        </div>
      </div>
    </main>
  );
}
