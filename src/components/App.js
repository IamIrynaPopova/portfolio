import React, { useState, useEffect } from "react";
import AppBar from "./AppBar";
import Hero from "./Hero";
import StackList from "./StackList";
import ProjectsList from "./ProjectsList";
import Button from "./Button";
import Form from "./Form";
import Loader from "./Loader";
import Notification from "./Notification";
import Footer from "./Footer";
import projects from "../data/projects.json";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [projectsStep, setProjectsStep] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [formSubmit, setFormSubmit] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
  });

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setScreenWidth(newWidth);

    let newProjectsStep;
    if (newWidth >= 1200) {
      newProjectsStep = 3;
    } else if (newWidth >= 768) {
      newProjectsStep = 2;
    } else {
      newProjectsStep = 1;
    }
    setProjectsStep(newProjectsStep);
    setVisibleProjects(projects.slice(0, newProjectsStep));
  };

  useEffect(() => {
    handleResize();
  }, [screenWidth]);

  const onClickMobileOpen = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const isMenuOpen = mobileMenu.getAttribute("is-open");
    mobileMenu.setAttribute("is-open", isMenuOpen ? true : false);
  };

  const onClickMobileClose = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const isMenuOpen = mobileMenu.getAttribute("is-open");
    mobileMenu.setAttribute("is-open", isMenuOpen ? false : true);
  };

  const loadMore = (e) => {
    const button = e.target;
    button.classList.add("button-clicked");
    const nextProjects = projects.slice(
      visibleProjects.length,
      visibleProjects.length + projectsStep
    );
    setVisibleProjects([...visibleProjects, ...nextProjects]);
  };

  const handleSubmitForm = async (data, e) => {
    const loader = document.getElementById("loader");
    const form = document.getElementById("form");
    e.preventDefault();
    form.classList.add("is-loading");
    loader.classList.remove("hidden");
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

      const responseData = await response.json();
      const message = await JSON.stringify(responseData.message);
      console.log(message);

      if (response.ok) {
        e.target.reset();
        setFormSubmit(true);
        loader.classList.add("hidden");
        setTimeout(() => {
          setNotification({
            show: true,
            message: "Вже читаю ваше повідомлення :)",
          });
        }, 1000);
      } else {
        setNotification({
          show: true,
          message: "Виникла помилка",
        });
        loader.classList.add("hidden");
      }
    } catch (error) {
      setNotification({
        show: true,
        message: `Виникла помилка: ${error.message}`,
      });
      loader.classList.add("hidden");
    }
  };

  const onCloseNotification = () => {
    const form = document.getElementById("form");
    setNotification({ show: false, message: "" });
    form.classList.remove("is-loading");
    form.reset();
  };

  return (
    <>
      <AppBar
        onClickOpen={onClickMobileOpen}
        onClickClose={onClickMobileClose}
      />
      <Hero />
      <StackList />
      <ProjectsList projects={visibleProjects} />
      {visibleProjects.length !== projects.length && (
        <Button onLoadMore={loadMore} />
      )}
      <Form onSubmitForm={handleSubmitForm}>
        <Loader />
        {notification.show && (
          <Notification
            onNotification={onCloseNotification}
            message={notification.message}
          />
        )}
      </Form>
      <Footer />
    </>
  );
};

export default App;
