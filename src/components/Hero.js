const Hero = () => {
  return (
    <div className="section-hero container">
      <div className="hero">
        <div className="hero__title-wrapper">
          <h1 className="hero__title">
            Hi 👋
            <br />
            My name is Iryna <br />I build things for web
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
