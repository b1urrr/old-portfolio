import React from 'react';
import './about.css';
import avatar from '../../assets/avatar.png'

function About() {

    return (
      <div className='pf__about section__padding' id='about'>
        <div className='pf__about-container'>
          <div className='pf__about-container_image'>
            <img src={avatar} alt='avatar' />
          </div>
          <div className='pf__about-container_content'>
            <h1>Who am I?</h1>
            <p>I've enjoyed a 5-year career as a desktop publishing operator, 2 of which in a lead role, working with one of the biggest consumer goods companies out there - Unilever. Now I'm excited to pivot my career from delivering quality product packages to building software and web solutions. <br></br> I believe that my attention to detail and strive for top-notch quality will go well with my newly acquired skills in software and web development to be a valuable asset for the IT industry.</p>
          </div>
        </div>
      </div>
    )
  }

export default About;
