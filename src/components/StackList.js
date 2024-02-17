import React from "react";

const StackList = () => {
  return (
    <div className="section-stack container">
      <div className="stack">
        <h2 className="stack__title">Мій технічний стек</h2>
        <p className="stack__text">
          Технології, з якими я працюю останнім часом
        </p>
      </div>
      <ul className="stack__list">
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#html"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#css"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#sass"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#tailwind"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#js"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#react"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#redux"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#vscode"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#github"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite.svg#nodejs"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite2.svg#mongodb"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite2.svg#parcel"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite2.svg#webpack"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite2.svg#figma"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite2.svg#postman"></use>
          </svg>
        </li>
        <li className="stack__item">
          <svg className="stack__svg">
            <use href="./assets/sprite2.svg#bootstrap"></use>
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default StackList;
