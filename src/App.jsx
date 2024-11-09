import React, { Suspense, lazy } from 'react';
import './App.css';

const Contact = lazy(() => import('./sections/Contact/Contact'));
const Footer = lazy(() => import('./sections/Footer/Footer'));
const Hero = lazy(() => import('./sections/Hero/Hero'));
const Projects = lazy(() => import('./sections/Projects/Projects'));
const Skills = lazy(() => import('./sections/Skills/Skills'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;
