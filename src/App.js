import React, { useEffect } from 'react';
import Navbar from './Components/Header/Navbar';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import WorkSpaces from './Components/Work_space/WorkSpaces';
import scrollNavigation from './scrollNavigation';
import MissionVision from './Components/Mision_Vision/MissionVision'
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Our_Services_Section/Services';
import Events from './Components/Events/Events';
import Contact from './Components/Contact_Us/Contact';
import Policy from './Components/Data_Policy/Policy';
import Footer from './Components/Footer/Footer';
function App() {
  useEffect(() => {
    scrollNavigation(); // <-- تشغيل السكربت بعد التحميل
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSpaces />
      <MissionVision />
      <AboutUs />
      <Services/>
      <Events/>
      <Contact/>
      <Policy/>
      <Footer/>
    </>
  );
}

export default App;
