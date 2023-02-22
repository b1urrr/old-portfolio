import React from 'react';
import { Project } from '../../components';
import './projects.css';
import projectItem from './imports';

// To be implemented

function Projects() {

    return (
      <div className='pf__projects section__padding' id='projects'>
        <div className='pf__projects-header'>
          <h1>Projects</h1>
        </div>
        <div className='pf__projects-content'>

          {projectItem.map((item) => 
              <div className='pf__projects-content_item'> 
                <Project 
                imgurl={item.imgurl} 
                url={item.url} 
                name={item.name} 
                desc={item.desc} 
                stack={item.stack} 
                key={item.id} />
              </div> 
              )}
         </div>
      </div>
    )
  }

export default Projects;