import React from "react";

const Mobile = ({ onClickOpen, onClickClose }) => {
  return (
    <div className="mobile">
      <button type="button" className="mobile__button" onClick={onClickOpen}>
        <svg className="mobile__svg ">
          <use href="./assets/sprite2.svg#icon-menu"></use>
        </svg>
      </button>
      <div id="mobileMenu" className="mobile__menu" is-open="false">
        <button
          type="button"
          className="mobile__button"
          onClick={onClickClose}
          aria-label="мобільне меню"
        >
          <svg className="mobile__svg ">
            <use href="./assets/sprite2.svg#icon-close-menu"></use>
          </svg>
        </button>
        <nav className="mobile__nav">
          <ul className="mobile__nav__list">
            <li className="mobile__nav__item">
              <a className="mobile__nav__link" href="" onClick={onClickClose}>
                Про мене
              </a>
            </li>
            <li className="mobile__nav__item">
              <a
                className="mobile__nav__link"
                href="#stack"
                onClick={onClickClose}
              >
                Навички
              </a>
            </li>
            <li className="mobile__nav__item">
              <a
                className="mobile__nav__link"
                href="#project"
                onClick={onClickClose}
              >
                Портфоліо
              </a>
            </li>
            <li className="mobile__nav__item">
              <a
                className="mobile__nav__link"
                href="#form"
                onClick={onClickClose}
              >
                Написати мені
              </a>
            </li>
          </ul>
        </nav>
        <ul className="mobile__contact">
          <li className="mobile__contact__item">
            <a className="mobile__contact__link" href="tel:+380660025483">
              +380660025483
            </a>
          </li>
          <li className="mobile__contact__item">
            <a
              className="mobile__contact__link"
              href="mailto:popovaira969@gmail.com"
            >
              popovaira969@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
