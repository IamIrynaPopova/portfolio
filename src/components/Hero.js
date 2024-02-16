import React from "react";

const Hero = () => {
  return (
    <div className="section-hero container">
      <div className="hero">
        <div className="hero__title-wrapper">
          <h1 className="hero__title">
            Привіт 👋
            <br /> Мене звати Іра.
            <br /> Я{" "}
            <span className="hero__title-name">Junior Frontend developer</span>
          </h1>
        </div>
        <div className="hero__img-wrapper">
          <img className="hero__img" src="./assets/human.jpg" alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
