import React from "react";
import styles from "./Recommendation.module.css";
export function Recommendation({ name, title, recommendation }) {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.h2}>{name}</h2>
        <h3 className={styles.h3}>{title}</h3>
      </header>
      <main className={styles.main}>
        {recommendation.map((paragraph, index) => (
          <p className={styles.p} key={index}>{paragraph}</p>
        ))}
      </main>
    </>
  );
}
