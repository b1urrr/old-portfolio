import React from 'react';
import { About, Contact, Experience, Footer, Header, Projects, Skills } from './containers';
import { Navbar, Project, Skillbox } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Header />

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      
      </div>
    </div>
  );
}

export default App;
