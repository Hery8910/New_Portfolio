import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
  }
`;

export const lightTheme = {
  body: '#f6f7f9',
  text: '#212429',
};

export const darkTheme = {
  body: '#212429',
  text: '#f6f7f9',
};
