import {Switch} from "@nextui-org/switch";
import { ImSun } from "react-icons/im";
import { BsMoon } from "react-icons/bs";
import styles from './ThemeToggle.module.css'

// eslint-disable-next-line react/prop-types
export function ThemeToggle({ toggleTheme, className }) {
  return (
    <>
      <Switch
      className={`${styles.switch} ${className}`}
      aria-label="Theme toggle"
      defaultSelected
      onChange={toggleTheme}
      size="lg"
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <ImSun className={styles.icon_sun} /> 
        ) : (
          <BsMoon className={styles.icon_moon} />
        )
      }
    >

    </Switch>
   
    </>
  );
}
