import { useState } from "react";

import { Link } from "../Link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { RiErrorWarningLine } from "react-icons/ri";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaDotCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  

  return (
    <main className={styles.main}>
       {open && <Button 
       onClick={()=> setOpen(false)}
       className={styles.close}
       label={<IoClose />}
       />}
      <section className={styles.card}>
        <img
          className={styles.img}
          src={projects[currentIndex].image}
          alt={projects[currentIndex].name}
        />
        <header className={styles.description}>
          <h2 className={styles.h2}>{projects[currentIndex].name}</h2>
          <p className={styles.p}>{projects[currentIndex].shortDescription}</p>
          {projects[currentIndex].live ? (
            <ul className={styles.ul}>
              <li>
                <Link
                  href={projects[currentIndex].github}
                  ariaLabel={"Link to the project on Github"}
                  icon={<FaGithub />}
                />
              </li>
              <li>
                <Link
                  href={projects[currentIndex].live}
                  ariaLabel={"Link to the live project"}
                  icon={<FaExternalLinkAlt />}
                />
              </li>
              <li>
                <button
                  className={styles.info}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  {projects[currentIndex].moreInfo} <GrNext />
                </button>
              </li>
            </ul>
          ) : <button
          className={styles.info}
          onClick={() => {
            setOpen(true);
          }}
        >
          {projects[currentIndex].moreInfo} <GrNext />
        </button>}
        </header>
      </section>
      <div className={styles.buttons}>
        <Button
          className={styles.navButton}
          onClick={handlePrev}
          label={<GrPrevious />}
        />
        <Button
          className={styles.navButton}
          onClick={handleNext}
          label={<GrNext />}
        />
      </div>
      <ul className={styles.markers}>
        {projects.map((_, index) => {
          return (
            <li
              key={index}
              className={`${styles.marker} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <FaDotCircle />
            </li>
          );
        })}
      </ul>
      {open && (
          <article className={styles.article}>
            {projects[currentIndex].live ? null : (
              <p className={styles.attention}>
                <RiErrorWarningLine />
                {projects[currentIndex].info}
              </p>
            )}
            <h4>{projects[currentIndex].descriptionTitle}</h4>
            <p>{projects[currentIndex].description}</p>
            <h4>{projects[currentIndex].problemTitle}</h4>
            <p>{projects[currentIndex].problem}</p>
            <ul>
              <h4>{projects[currentIndex].myRol.title}</h4>
              {projects[currentIndex].myRol.list.map((rol, index) => {
                return (
                  <li key={index} className={styles.li}>
                    {rol}
                  </li>
                );
              })}
            </ul>
            <ul>
              <h4>{projects[currentIndex].technologies.title}</h4>
              {projects[currentIndex].technologies.list.map((rol, index) => {
                return (
                  <li key={index} className={styles.li}>
                    {rol}
                  </li>
                );
              })}
            </ul>
            <ul>
              <h4>{projects[currentIndex].challenges.title}</h4>
              {projects[currentIndex].challenges.list.map((rol, index) => {
                return (
                  <li key={index} className={styles.li}>
                    {rol}
                  </li>
                );
              })}
            </ul>
          </article>
      )}
    </main>
  );
}
