import React from "react";
import { useState, useEffect } from "react";
import AppBar from "./AppBar";
import Hero from "./Hero";
import StackList from "./StackList";
import ProjectsList from "./ProjectsList";
import Button from "./Button";
import projects from "../data/projects.json";

const App = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 3));

  const loadMore = () => {
    const nextProjects = projects.slice(
      visibleProjects.length,
      visibleProjects.length + 3
    );
    setVisibleProjects([...visibleProjects, ...nextProjects]);
  };

  useEffect(() => {}, [visibleProjects]);

  return (
    <>
      <AppBar />
      <Hero />
      <StackList />
      <ProjectsList projects={visibleProjects} />
      {visibleProjects.length !== projects.length && (
        <Button onLoadMore={loadMore} />
      )}
    </>
  );
};

export default App;
