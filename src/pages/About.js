import { useProductContext } from "../context/productcontex";
import HeroSection from '../components/HeroSection'
const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "MY Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
