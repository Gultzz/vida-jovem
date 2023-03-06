import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createGlobalStyle } from "styled-components";

import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/800.css";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik';
  }
  html, body {
    width: 100%;
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
