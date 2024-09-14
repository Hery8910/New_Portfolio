import React from 'react'
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";


export function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <h4>{t("footer.message")}</h4>
    </>

  )
}

