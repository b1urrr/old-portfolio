import React from 'react';
import './project.css';

// Todo - Implement dynamic content
// Todo2 - Implement mouseover link to webpage


function Project() {

    return (
      <div className='pf__project'>
        <div className='pf__project-box'>
          <div className='pf__project-box_image'>
            <img src='https://img.freepik.com/free-vector/corporate-website-abstract-concept-illustration_335657-1831.jpg' alt='project'/>
          </div>
          <div className='pf__project-box_content'>
            <div className='pf__project-box_content-description'>
              <h1>Pizza Italia webpage</h1>
              <p>Restaurant webpage and menu for a local pizza place.</p>
            </div>
            <div className='pf__project-box_content-stack'>
              <h3>React</h3>
              <h3>Node</h3>
              <h3>Tailwind CSS</h3>
            </div>
          </div>
        </div>

      </div>
    )
  }

export default Project;