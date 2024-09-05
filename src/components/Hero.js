import React from "react";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero-wrapper container">
        <div className="hero__title-wrapper">
          <h1 className="hero__title">
            Привіт
            <br /> Мене звати Ірина
            <br /> Я 
            <span className="hero__title-name">Junior Frontend developer</span>
          </h1>
        </div>
        <div className="hero__img-wrapper"></div>
      </div>
    </section>
  );
};

export default Hero;
