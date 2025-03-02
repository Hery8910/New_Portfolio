import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";

import { useForm } from "@formspree/react";
import { FaCheck } from "react-icons/fa";

export default function Form() {
  const [state, handleSubmit] = useForm("xyyrpklj");
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (state.succeeded && showModal) {
    return (
      <aside className={styles.aside}>
        <h3 className={styles.h3}>{t("form.message.title")}</h3>
        <p className={styles.p}>{t("form.message.description")}</p>
        <div className={styles.aside_div}>
          <p>{t("form.message.message")}</p>
          <FaCheck />
        </div>
      </aside>
    );
  }
  return (
    <section className={styles.contact}>
      {!showModal && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.names}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("form.name")}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.mail}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("form.email")}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.message}>
            <textarea
              id="comment"
              placeholder="Message"
              name={t("form.comment")}
              className={styles.textarea}
              required
            ></textarea>
          </div>
          <Button type="submit" label={t("form.submit")} />
        </form>
      )}
    </section>
  );
}
