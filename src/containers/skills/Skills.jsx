import React from 'react';
import { Skillbox } from '../../components';
import './skills.css';
import boxItem from './imports';

function Skills() {

    return (
      <div className='pf__skills section__padding' id='skills'>
        <div className='pf_skills-header'>
        <h1>Skills</h1>
        </div>
        <div className='pf__skills-box'>
          {boxItem.map((item) => 
          <div className='pf__skills-box_item'> <Skillbox imgurl={item.imgurl} name={item.name} /></div> 
          )}
        </div>
      </div>
    )
  }

export default Skills;