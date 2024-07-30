import Navbar from "../Newadded/Component/NavBar";
import Hero1 from "../Newadded/Component/Hero1";
import AboutImg from "../images/2.jpg";
import Footer from "../Newadded/Component/Footer";
import ContactForm from "./Component/ContactForm";


function Contact(){
    return(<>
        <Navbar />
        <Hero1
          cName="hero-mid"
          heroImg={AboutImg}
          title="Contact"
          
          btnClass="hide"
        />
        <ContactForm />
        <Footer />
      </>
    )
}
export default Contact;