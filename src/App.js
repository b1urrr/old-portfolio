import React from 'react';
import { About, Experience, Footer, Header, Projects, Skills } from './containers';
import { Navbar, Project, Skillbox } from './components';
import './App.css';

// To do list 
//  -- clear up the code
//  -- use an API (vasko)
//  -- create your own API as bonus points
//  -- fix the skills section to use an array
//  -- try to use more JS for bonus points
//  -- fix indentation where it is not yet fixed


function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      </div>
    </div>
  );
}

export default App;
