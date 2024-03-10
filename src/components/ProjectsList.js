import React from "react";
import { v1 as uuidv1 } from "uuid";

const ProjectsList = ({ projects }) => {
  return (
    <section id="project" className="projects ">
      <div className="projects-wrapper container">
        <div className="projects__title-wrapper">
          <h2 className="projects__title">Мої проєкти</h2>
          <p className="projects__text">
            сайти, над якими я працювала сама та в команді
          </p>
        </div>
        <div className="projects__list-wrapper">
          <ul className="projects__list">
            {projects.map(({ name, photo, text, stack, link, code }) => (
              <li className="projects__item" key={uuidv1()}>
                <img className="projects__image" src={photo} alt={name} />
                <div className="projects__box">
                  <h3 className="projects__name">{name}</h3>
                  <p className="projects__description">{text}</p>
                  <p className="projects__stack">
                    <span className="projects__stack-title">Tech stack: </span>
                    {stack}
                  </p>
                  <ul className="projects__links">
                    <li className="projects__links-item">
                      <a
                        target="blank"
                        href={link}
                        className="projects__link-code"
                      >
                        <svg className="projects__svg">
                          <use href="./assets/sprite.svg#link"></use>
                        </svg>
                        link
                      </a>
                    </li>
                    <li className="projects__links-item">
                      <a
                        target="blank"
                        href={code}
                        className="projects__link-code"
                      >
                        <svg className="projects__svg">
                          <use href="./assets/sprite.svg#github"></use>
                        </svg>
                        code
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
