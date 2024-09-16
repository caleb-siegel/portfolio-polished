import React, { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';
import Interests from './components/interests/Interests';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Work />
        <Qualification />
        <Interests />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
      <Analytics />
    </>
  )
}

export default App
