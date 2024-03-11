import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import theme from  "./components/ThemeToggle"
import App from "./components/App";
import human from "./assets/human.jpg";
import portfolio from "./assets/portfolio.jpg";
import news from "./assets/news.jpg";
import foodSTA from "./assets/foodSTA.jpg";
import SoYummy from "./assets/SoYummy.jpg";
import zerno from "./assets/zerno.jpg";
import sprite from "./assets/sprite.svg";
import sprite2 from "./assets/sprite2.svg";
import css from "./styles/main.scss";

document.body.innerHTML = '<div id="root"></div>';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
       <App />
  </StrictMode>
);
