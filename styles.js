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
  
  --lowlight-dark:#404040; // dunkel grau
  --background-color: #8C1127; //rot
  --background-color-light: #ffffff; //weiß
  --text-color-light: #ffffff; // weiß



  --highlight-color: #BF8F54;// gold

  --text-color-dark: #404040; // dunkel grau
  --shadow-color-dark: black; // schwarz
   

  --text-color-light-heading: #ffffff; // weiß
  --text-color-light-content: #ffffff; // weiß

  --text-color-dark-heading: #404040; // dunkel grau
  --text-color-dark-content: #404040; // dunkel grau
  --text-color-light-heading: #ffffff; // weiß
  --text-color-light-content: #ffffff; // weiß

--gap-small:1rem;
--gap-medium:2rem;
--gap-large:3rem;

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
time, mark, audio, video {
	margin: 0;
	padding: 0;
  text-decoration: none;
  list-style: none;
  background-color: none;
  border: none;
}
`;
