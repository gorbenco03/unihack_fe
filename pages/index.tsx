import React from 'react';
import Hero from '../sections/forms/hero.section';
import Stats from '../components/stats/stats';
import { Footer } from '../sections/footer/footer.section';
import Faqs from '../sections/faqs/faqs.section';
import { Header } from '../sections/header/header.section';
import { Drpdwontxt } from '../components/drpdwntxt/drpdwntxt.section';
export function About() {
  return (
    <>
      <Header />
      <Hero>
        <Drpdwontxt />
      </Hero>
      <Stats />
      <Faqs />
      <Footer />
    </>
  );
}

export default About;
