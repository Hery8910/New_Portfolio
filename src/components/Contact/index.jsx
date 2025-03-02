import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";
import Form from "../Form";

export function Contact() {
  const { t } = useTranslation();

  return (
    <main className={styles.main}>
      <header>
        <h2>{t("cta.message")}</h2>
        <h3>{t("cta.message2")}</h3>
      </header>
      <Form />
    </main>
  );
}
