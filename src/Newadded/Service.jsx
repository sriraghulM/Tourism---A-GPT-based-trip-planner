import Navbar from "../Newadded/Component/NavBar";
import Hero1 from "../Newadded/Component/Hero1";
import AboutImg from "../images/night.jpg";
import Footer from "../Newadded/Component/Footer";
import Trip from "../Newadded/Component/Trip";



function Service() {
  return (
    <>
      <Navbar />
      <Hero1
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip/>
      <Footer />
    </>
  );
}
export default Service;
