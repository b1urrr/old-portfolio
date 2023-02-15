import React from 'react';
import './experience.css';
import { Exp } from '../../components';
import expItem from './imports';

function Experience() {

    return (
      <div className='pf__experience section__padding' id='experience'>
        <div className='pf__experience-header'>
          <h1>Experience</h1>
        </div>
        {expItem.map((item) => 
          <Exp year={item.year} role={item.role} company={item.company} description={item.description} />
          )}
      </div>
    )
  }

export default Experience;