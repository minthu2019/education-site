import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Programs from "./Components/Programs";
import Title from "./Components/Title";
import About from "./Components/About";
import Campus from "./Components/Campus";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Title subtitle="Programs" title="What we offer"/>
        <Programs/>
        <About/>
        <Title subtitle="Gallery" title="Campus Photo"/>
        <Campus/>
        <Title subtitle="Testimonials" title="What student says"/>
        <Testimonials/> 
        <Title subtitle="contactus" title="Get in Touch"/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
