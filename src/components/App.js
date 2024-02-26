import React from "react";
import { useState, useEffect } from "react";
import AppBar from "./AppBar";
import Hero from "./Hero";
import StackList from "./StackList";
import ProjectsList from "./ProjectsList";
import Button from "./Button";
import Form from "./Form";
import About from "./About";
import projects from "../data/projects.json";

const App = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 3));
  const [formSubmit, setFormSubmit] = useState(false);

  const loadMore = () => {
    const nextProjects = projects.slice(
      visibleProjects.length,
      visibleProjects.length + 3
    );
    setVisibleProjects([...visibleProjects, ...nextProjects]);
  };

  useEffect(() => {}, [visibleProjects]);

  const handleSubmitForm = async () => {
    setFormSubmit(true);
    Email.send({
      SecureToken: process.env.REACT_APP_TOKEN,
      Username: "popovaira969@gmail.com",
      Password: process.env.REACT_APP_PASSWORD,
      To: "popovaira969@gmail.com",
      From: "popovaira969@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => {
      console.log(message);
      alert(message);
    });
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
      <Form onSubmit={handleSubmitForm} />
    </>
  );
};

export default App;
