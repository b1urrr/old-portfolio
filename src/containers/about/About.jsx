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
            <p>I've always been passionate about computers and technology. In my early teens I was crazy about gaming, later on I studied Computer Science in high school. I started dabbling in graphic design which landed me my first job as a Prepress Specialist. After that I dove in the world of networking and started my second job as a Telecommunications Technician. I then went back for a 5 year stint in design and prepress as a Desktop Publishing Operator, 2 of which in a Team Lead role</p>
            <br></br>
            <p>I was always keen on learning to code, but it seemed so boring at first. Boy, was I wrong! I pushed myself into buying a course on Udemy, made a small research and decided on Python. Its easy syntax and wide range of applications were the selling point for me. I studied in pretty much all of my free time. It felt damn good to be able to manipulate the computer to your needs, not gonna lie.</p>
            <br></br>
            <p>Then was the disappointment. Most python developers are working with data, numbers crunching and analytics. I'm not interested in that. Where to now? I have some back-end experience - a front-end technology it is. After all I have a pretty solid design foundation. I bought another course on Udemy, this time Web Development. Same teacher, same concepts, different technology. Long story short - I devoured the course in less than a month.</p>
            <br></br>
            <p>Now I'm working on building a solid portfolio and putting all of my newly acquired skills and passion to use in a new position. <br></br><br></br>Stay tuned for updates! 😎</p>
          </div>
        </div>
      </div>
    )
  }

export default About;
