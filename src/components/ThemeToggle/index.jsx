import React from "react";
import "./ThemeToggle.css";
import {Switch} from "@nextui-org/switch";
import { ImSun } from "react-icons/im";
import { BsMoon } from "react-icons/bs";

export function ThemeToggle({ toggleTheme }) {
  return (
    <>
      <Switch
      defaultSelected
      onChange={toggleTheme}
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected }) =>
        isSelected ? (
          <ImSun /> 
        ) : (
          <BsMoon />
        )
      }
    >

    </Switch>
   
    </>
  );
}
