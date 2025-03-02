import { useTranslation } from "react-i18next";
import styles from './LanguageSwitcher.module.css'

// eslint-disable-next-line react/prop-types
export function LanguageSwitcher({ className }) {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <form >
    <select 
    className={`${styles.select} ${className}`}
     onChange={changeLanguage} 
     defaultValue={i18n.language}
     aria-label="Language"
     >
      <option className={styles.option} value="en">English</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
    </select>
    </form>
  );
}
