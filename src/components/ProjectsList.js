import React from "react";
import { v1 as uuidv1 } from "uuid";

const ProjectsList = ({ projects }) => {
  return (
    <div className="section-projects container">
      <ul className="projects__list">
        {projects.map(({ name, photo, text, stack }) => (
          <li key={uuidv1()}>
            <h3>{name}</h3>
            <img src={photo} alt={name} />
            <p>{text}</p>
            <p>{stack}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
