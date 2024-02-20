import React from "react";

const Hero = () => {
  return (
    <div className="section-hero">
      <div className="hero container">
        <div className="hero-wrapper">
          <div className="hero__title-wrapper">
            <h1 className="hero__title">
              Привіт
              <br /> Мене звати Іра.
              <br /> Я{" "}
              <span className="hero__title-name">
                Junior Frontend developer
              </span>
            </h1>
          </div>
          <div className="hero__img-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
