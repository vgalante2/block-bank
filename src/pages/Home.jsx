import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Market from '../components/Market';
import WhyUs from '../components/WhyUs';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';



function Home() {
  return (
    <>
      <Navbar />
      <Hero/> 
      <Market />
      <WhyUs />
      <JoinUs/>
      <Footer/>
      </>
  );
}

export default Home;