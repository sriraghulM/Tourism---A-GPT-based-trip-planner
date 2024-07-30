import Navbar from "../Newadded/Component/NavBar";
import Hero1 from "../Newadded/Component/Hero1";
import Destination from "../Newadded/Component/Destination";
import Trip from "../Newadded/Component/Trip";
import Footer from "../Newadded/Component/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero1
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
        title="Your Journry Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}
export default Home;
