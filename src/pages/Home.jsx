import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import UseCases from '../components/UseCases';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
        <Hero />
        <Products />
        <UseCases />
        <Features />
        <FAQ />
        <Testimonials />
    </>
  );
};

export default Home;