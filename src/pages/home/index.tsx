import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import Hero from "../../components/sections/Hero";
import SectionOne from "../../components/sections/SectionOne";
import SectionTwo from "../../components/sections/SectionTwo";
import SupportedCountries from "../../components/sections/SupportedCountries";

const Home = () => {
  return (
    <Container>
      <Hero />
      <SectionOne />
      <SupportedCountries />
      <SectionTwo />
      <Footer />
    </Container>
  );
};

export default Home;
