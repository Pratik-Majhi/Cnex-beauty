import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import AboutPage from '../pages/AboutPage';
import Content from '../components/Content';
import Companydetails from '../components/Companydetails';
import Cutomerexpectation from '../components/Cutomerexpectation';
import FaqPage from '../pages/FaqPage';
import Details from '../components/Details';
import Customerdetails from '../components/Customerdetails';
import ContactPage from '../pages/ContactPage';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Slider />
      <AboutPage />
      <Content />
      <Companydetails />
      <Cutomerexpectation />
      <FaqPage />
      <Details/>
      <Customerdetails/>
      <ContactPage/>
      
    </>
  );
};

export default RootLayout;
