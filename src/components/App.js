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

  const handleSubmitForm = async (data, e) => {
    // Email.send({
    //    SecureToken: "58f3c4f1-de55-41f0-b510-d1ef5b40dcf9",
    //   Username: "popovaira969@gmail.com",
    //   Password: "041AA71E6A014708EDA813153B2B5D847625",
    //   To: "popovaira969@gmail.com",
    //   From: "popovaira969@gmail.com",
    //   Subject: "This is the subject",
    //   Body: "And this is the body",
    // }).then((message) => {
    //   console.log(message);
    //   alert(message);
    // });
    e.preventDefault();
    console.log(data);
    
    e.target.reset();
        setFormSubmit(true);

    // try {
    //   const response = await fetch(
    //     "https://github.com/IamIrynaPopova/backend-portfolio",
    //     {
    //       method: "GET",
    //       body: data,
    //       headers: {
    //         "Content-Type": "application/json; charset=UTF-8",
    //       },
    //     }
    //   );

    //   if (response.ok) {
    //     console.log("Данные успешно отправлены");
    //     e.target.reset();
    //     setFormSubmit(true);
    //   } else {
    //     console.error("Ошибка при отправке данных");
    //   }
    // } catch (error) {
    //   console.error("Произошла ошибка:", error);
    // }
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
    </>
  );
};

export default App;
