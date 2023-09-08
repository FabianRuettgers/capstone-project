import { createGlobalStyle } from "styled-components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default createGlobalStyle`
:root {
  --color-red: #D93636; // red
  --color-green: #008000; // green
  --background-color: #353535; // grey
  --background-color-light: #ffffff; // white
  --shadow-color-dark: black; // black
  --background-color-light-button: #ffffff; // white
  --background-color-highlight-button: #BF8F54; // gold
  --background-color-highlight-content: #BF8F54; // gold
  --background-color-dark-content:#404040; // grey
  --background-color-light-content: #ffffff; // white
  --text-color-dark-heading: #404040; // grey
  --text-color-dark-content: #404040; // grey
  --text-color-dark-button: #404040; // grey
  --text-color-light-heading: #ffffff; // white
  --text-color-lighter-heading: #DCDCDC; // grey
  --text-color-light-content: #ffffff; // white
  --text-color-light-button: #ffffff; // white
--text-color-highlight-heading: #BF8F54; // gold
--text-color-highlight-content: #BF8F54; // gold
--text-color-highlight-button: #BF8F54; // gold

--gap-x-small:0.5rem;
--gap-small:1rem;
--gap-medium:2rem;
--gap-large:3rem;

--margin-xx-small:0.25rem;
  --margin-x-small:0.5rem;
  --margin-small:1rem;
  --margin-medium:2rem;
  --margin-large:3rem;

  --padding-xx-small:0.25rem;
  --padding-x-small:0.5rem;
  --padding-small:1rem;
  --padding-medium:2rem;
  --padding-large:3rem;
  --padding-x-large:3.5rem;

  --border-radius-x-small:0.5rem;
  --border-radius-small:1rem;
  --border-radius-medium:2rem;
  --border-radius-large:3rem;

  --header-h1:30px;
  --header-h2:20px;
  --header-h3:15px;
  --big-text:13px;
  --plain-text:10px;
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

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p,button, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,textarea {
	margin: 0;
	padding: 0;
  text-decoration: none;
  list-style: none;
  background-color: none;
  border: none;
  font-family: "roboto", sans-serif;
  font-weight: 400;
}
button{cursor:pointer}
`;
