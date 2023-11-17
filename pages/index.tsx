import React, { useState } from 'react';
import Hero from '../sections/forms/hero.section';
import Stats from '../components/stats/stats';
import Footer from '../sections/footer/footer.section';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Dropdown from '../components/dropdown/dropdown.component';
import { Button } from '../components/button/button.component';
import Faqs from '../sections/faqs/faqs.section';
import Header from '../sections/header/header.section';
export function About() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Faqs />
      <Footer />
    </>
  );
}

export default About;
