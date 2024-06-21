import React from "react";
import ThemeToggle from "./ThemeToggle";

const AppBar = () => {
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
        <div className="nav__contacts">
          <ul className="nav__contacts-list">
            <li className="nav__contacts__item">
              <a
                href="https://github.com/IamIrynaPopova"
                className="nav__contacts__link"
              >
                <svg className="nav__contacts__svg">
                  <use href="./assets/sprite.svg#github"></use>
                </svg>
              </a>
            </li>
            <li className="nav__contacts__item">
              <a
                href="https://www.linkedin.com/in/irynapopova/"
                className="nav__contacts__link"
              >
                <svg className="nav__contacts__svg">
                  <use href="./assets/sprite.svg#linkedin"></use>
                </svg>
              </a>
            </li>
            <li className="nav__contacts__item">
              <a
                href="https://t.me/Iam_IrynaPopova"
                className="nav__contacts__link"
              >
                <svg className="nav__contacts__svg">
                  <use href="./assets/sprite.svg#telegram"></use>
                </svg>
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
