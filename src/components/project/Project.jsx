import React from 'react';
import './project.css';
import projectItem from '../../containers/projects/imports';


function Project( { imgurl, url, name, desc, stack } ) {

    return (
      <div className='pf__project'>
        <div className='pf__project-box'>
          <div className='pf__project-box_image'>
            <a href={url} target="_blank"><img src={imgurl} alt='project'/></a>
          </div>
          <div className='pf__project-box_content'>
            <div className='pf__project-box_content-description'>
            <a href={url} target="_blank"><h1>{name}</h1></a>
              <p>{desc}</p>
            </div>
            <div className='pf__project-box_content-stack'>
            <h3>{stack}</h3>
              
            

              </div>

          </div>
        </div>
      </div>
    )
  }

export default Project;