import React from "react";
import {Switch} from "@nextui-org/switch";
import { ImSun } from "react-icons/im";
import { BsMoon } from "react-icons/bs";
import styles from './ThemeToggle.module.css'

export function ThemeToggle({ toggleTheme }) {
  return (
    <>
      <Switch
      defaultSelected
      onChange={toggleTheme}
      size="lg"
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <ImSun className={styles.icon} /> 
        ) : (
          <BsMoon className={styles.icon} />
        )
      }
    >

    </Switch>
   
    </>
  );
}
