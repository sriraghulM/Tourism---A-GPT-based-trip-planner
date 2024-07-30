import Navbar from "../Newadded/Component/NavBar";
import Hero1 from "../Newadded/Component/Hero1";
import AboutImg from "../images/night.jpg";
import Footer from "../Newadded/Component/Footer";
import AboutUs from "./Component/AboutUs";


function About() {
  return (
    <>
      <Navbar />
      <Hero1
        cName="heroabout"
        heroImg={AboutImg}
        title="About"
        
        btnClass="hide"
      />
      <AboutUs />
      <Footer/>

    </>
  );
}
export default About;
