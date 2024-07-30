import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Destinations from './Components/Destinations';
import Footer from './Components/Footer';

const Comp = () => {
    return ( 
        <div className="Comp">
            <NavBar />
            <Hero />
            <Destinations />
            <Footer />
        </div>
     );
}
 
export default Comp;