import { createGlobalStyle } from "styled-components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default createGlobalStyle`
:root {
  --primary-color: #D93636; //noch helleres rot
  --secondary-color: #A62626; //helleres rot
  --ternery-color: #400A14; //dunkelrot
  --highlight-color: #BF8F54;// gold
  --background-color: #8C1127; //rot
  --text-color-light: #000000; // weiß
  --text-color-dark: #404040; // dunkel grau
  --shadow-color-dark: black; // dunkel grau
   

  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "roboto", sans-serif;
    color: var(--text-color-dark);
    background-color: var(--background-color);
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;
