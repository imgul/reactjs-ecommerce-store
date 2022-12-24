import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productsContext";

const About = () => {
  const { author } = useProductContext();

  const data = {
    name: "Gul Ecommerce",
  };

  return (
    <>
      {`${author.name} ${author.address}`}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
