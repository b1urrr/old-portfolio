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
            <p>I've always been passionate about computers and technology. In my early teens I was 
            crazy about gaming, later on I studied Computer Science in high school. I started dabbling 
            in graphic design which landed me my first job as a Prepress Specialist. After that I dove 
            in the world of networking and started my second job as a Telecommunications Technician. 
            I then went back for a 5 year stint in design and prepress as a Desktop Publishing Operator, 
            2 of which in a Team Lead role.</p>
            <br></br>
            <p>Now my focus is on becoming a developer. I started with Python which gave me a solid foundation
             in understanding how code actually works and what you can do with it. Then I decided to move towards 
             web development and learn JavaScript and it's associated libraries and frameworks, namely React.js and Node.js. 
             I'm currently building a portfolio of projects and looking to land my first job.</p>
            </div>
        </div>
      </div>
    )
  }

export default About;
