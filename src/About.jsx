import { React, useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext } from "./context/productsContext";

const About = () => {
  const { author } = useContext(AppContext);

  const data = {
    name: "Thapa Ecommerce",
  };

  return (
    <>
      {author.name}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
