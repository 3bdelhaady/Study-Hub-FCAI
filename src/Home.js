import React, { useEffect } from 'react';
// import Navbar from './Components/Header/Navbar';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
// import WorkSpaces from './Components/Work_space/WorkSpaces';
import scrollNavigation from './scrollNavigation';
import MissionVision from './Components/Mision_Vision/MissionVision'
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Our_Services_Section/Services';
import Events from './Components/Events/Events';
import Contact from './Components/Contact_Us/Contact';
// import Policy from './Components/Data_Policy/Policy';
// import Footer from './Components/Footer/Footer';
import { Element } from 'react-scroll';
import HonorList from './Components/Honor_List/HonorList';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Footer from './Components/Footer/Footer';
import FooterHome from './Components/Footer/Footer_Home';
import Navbar from './Components/Header/Navbar';
function Home() {
  useEffect(() => {
    scrollNavigation(); // <-- تشغيل السكربت بعد التحميل
  }, []);

  return (
    <>
              {/* Home Section */}
              <Navbar/>
              <Element name="home">
                <HeroSection />
              </Element>



              {/* Our Mission */}
              <Element name="mission">
                <MissionVision />
              </Element>

              {/* About Us */}
              <Element name="about">
                <AboutUs />
              </Element>


              {/* Services */}
              <Element name="services">
                <Services />
              </Element>

              {/* Events */}
              <Element name="events">
                <Events />
              </Element>

              {/* Honor List */}
              <Element name="honor">
                <HonorList/>
              </Element>

              {/* Contact Us */}
              <Element name="contact">
                <Contact />
              </Element>
      <FooterHome/>
    </>
  );
}

export default Home;
