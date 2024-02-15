import human from "./assets/human.jpg";
import sprite from "./assets/sprite.svg";
import css from "./styles/main.scss";

import example from "./example";

import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import App from "./components/App";
console.log(App);
// Clear the existing HTML content
// document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
