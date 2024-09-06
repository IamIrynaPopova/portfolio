import React from "react";
import ThemeToggle from "./ThemeToggle";
import Mobile from "./Mobile";

const AppBar = ({ onClickOpen, onClickClose }) => {
  return (
    <header className="header ">
      <div className="header__wrapper container ">
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <a className="nav__list__item" href="">
                Про мене
              </a>
            </li>
            <li>
              <a className="nav__list__item" href="#stack">
                Навички
              </a>
            </li>
            <li>
              <a className="nav__list__item" href="#project">
                Портфоліо
              </a>
            </li>
            <li>
              <a className="nav__list__item" href="#form">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <div className="contacts">
          <ul className="contacts-list">
            <li className="contacts__item">
              <a
                href="https://github.com/IamIrynaPopova"
                className="contacts__link"
                aria-label="Перейти на GitHub профіль"
              >
                <svg className="contacts__svg" aria-hidden="true">
                  <use href="./assets/sprite.svg#github"></use>
                </svg>
              </a>
            </li>
            <li className="contacts__item">
              <a
                href="https://www.linkedin.com/in/irynapopova/"
                className="contacts__link"
                aria-label="Перейти на Linkedin профіль"
              >
                <svg className="contacts__svg" aria-hidden="true">
                  <use href="./assets/sprite.svg#linkedin"></use>
                </svg>
              </a>
            </li>
            <li className="contacts__item">
              <a
                href="https://t.me/Iam_IrynaPopova"
                className="contacts__link"
                aria-label="Мій Telegram"
              >
                <svg className="contacts__svg" aria-hidden="true">
                  <use href="./assets/sprite.svg#telegram"></use>
                </svg>
              </a>
            </li>
          </ul>
          <div className="header__handler">
            <ThemeToggle />
            <Mobile onClickOpen={onClickOpen} onClickClose={onClickClose} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
