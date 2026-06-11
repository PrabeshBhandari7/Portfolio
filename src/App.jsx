import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Header from "./Components/Header.jsx";
import HeroSection from "./Components/HeroSection.jsx"; 
import Education from "./Components/Education.jsx"; 
import About from "./Components/AboutSection.jsx";
import Experience from './Components/Experience.jsx'; 
import Projects from './Components/Projects.jsx';
import ContactSection from './Components/ContactSection.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div className='bg-[#111837] min-h-screen'>
      <Header />
      <HeroSection/>
      <Education/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;