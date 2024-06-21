import React from "react";
import { useState, useEffect } from "react";
import AppBar from "./AppBar";
import Hero from "./Hero";
import StackList from "./StackList";
import ProjectsList from "./ProjectsList";
import Button from "./Button";
import Form from "./Form";
import Footer from "./Footer";
import projects from "../data/projects.json";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [projectsStep, setProjectsStep] = useState(screenWidth >= 1200 ? 3 : 2);
  const [visibleProjects, setVisibleProjects] = useState(
    projects.slice(0, projectsStep)
  );
  const [formSubmit, setFormSubmit] = useState(false);

  const loadMore = () => {
    const nextProjects = projects.slice(
      visibleProjects.length,
      visibleProjects.length + projectsStep
    );
    setVisibleProjects([...visibleProjects, ...nextProjects]);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      screenWidth >= 1200 ? setProjectsStep(3) : setProjectsStep(2);
      setVisibleProjects(projects.slice(0, projectsStep));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, visibleProjects]);

  const handleSubmitForm = async (data, e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend-portfolio-cuv6.onrender.com/api",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        const message = await JSON.stringify(responseData.message);
        e.target.reset();
        setFormSubmit(true);
        alert(message);
      } else {
        alert("Помилка відправки данних");
      }
    } catch (error) {
      alert("Виникла помилка:", error);
    }
  };

  return (
    <>
      <AppBar />
      <Hero />
      <StackList />
      <ProjectsList projects={visibleProjects} />
      {visibleProjects.length !== projects.length && (
        <Button onLoadMore={loadMore} />
      )}
      <Form onSubmitForm={handleSubmitForm} />
      <Footer />
    </>
  );
};

export default App;
