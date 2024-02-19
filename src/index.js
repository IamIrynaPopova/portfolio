import human from "./assets/human.jpg";
import portfolio from "./assets/portfolio.jpg";
import news from "./assets/news.jpg";
import foodSTA from "./assets/foodSTA.jpg";
import sprite from "./assets/sprite.svg";
import sprite2 from "./assets/sprite2.svg";
import css from "./styles/main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App";

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
