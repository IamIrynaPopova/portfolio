const AppBar = () => {
  return (
    <div className="section-header container">
      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list__item">Про мене</li>
            <li className="nav__list__item">Навички</li>
            <li className="nav__list__item">Портфоліо</li>
            <li className="nav__list__item">Контакти</li>
          </ul>
          <ul className="nav__contacts">
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
        </nav>
      </header>
    </div>
  );
};

export default AppBar;
