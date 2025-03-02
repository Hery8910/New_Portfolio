import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;

export const lightTheme = {
  body: "#e1e4ea",
  text: "#051928",
};

export const darkTheme = {
  body: "#051928",
  text: "#f6f5f7d5",
};
