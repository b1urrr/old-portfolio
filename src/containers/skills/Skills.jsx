import React from 'react';
import { Skillbox } from '../../components';
import './skills.css';
import { bootstrap, css3, flask, git, github, html5, illustrator, js, mysql, nodejs, photoshop, python, react, selenium} from './imports'

function Skills() {

    return (
      <div className='pf__skills section__padding' id='skills'>
        <div className='pf_skills-header'>
        <h1>Skills</h1>
        </div>
        <div className='pf__skills-box'>
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={react} name="React.js" />
          </div>
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={nodejs} name="Node.js" />
          </div>          
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={js} name="JavaScript" />
          </div>          
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={css3} name="CSS" />
          </div>          
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={html5} name="HTML" />
          </div>          
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={bootstrap} name="Bootstrap" />
          </div>   
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={python} name="Python" />
          </div>          
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={flask} name="Flask" />
          </div>
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={mysql} name="MySQL" />
          </div>
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={selenium} name="Selenium" />
          </div>
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={git} name="Git" />
          </div>
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={github} name="GitHub" />
          </div>
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={illustrator} name="Adobe Illustrator" />
          </div>
          <div className='pf__skills-box_item'>
            <Skillbox imgurl={photoshop} name="Adobe Photoshop" />
          </div>
        </div>
      </div>
    )
  }

export default Skills;