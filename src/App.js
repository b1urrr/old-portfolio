import React from 'react';
import { About, Experience, Footer, Header, Projects, Skills } from './containers';
import { Navbar } from './components';
import './App.css';

// To do list 
//  -- use an API
//  -- create your own API
//  -- fix indentation where it is not yet fixed
//  -- implement projects section -- partially complete, component almost ready


function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      {/* <Projects /> */}
      <Footer />
      </div>
    </div>
  );
}

export default App;
