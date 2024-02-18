import React from "react";
import AppBar from "./AppBar";
import Hero from "./Hero";
import StackList from "./StackList";
import ProjectsList from "./ProjectsList";
import projects from "../data/projects.json"

const App = () => {
  return (
    <>
      <AppBar />
      <Hero />
      <StackList />
      <ProjectsList projects={projects} />
    </>
  );
};

export default App;
