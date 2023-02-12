import React from 'react';
import './experience.css';
import { Exp } from '../../components';

function Experience() {

    return (
      <div className='pf__experience section__padding' id='experience'>
        <div className='pf__experience-header'>
          <h1>Experience</h1>
        </div>
        <Exp 
        year="2021-2023"
        role="Lead DTP"
        description="• Team lead of 4-10 Desktop Publishing Operators
• Aligning processes and workload with other team leaders and supervisors
• Analyzing and solving complex problems
• Ensuring top quality end product is delivered
• Onboarding New Hires" /> 
        <Exp
        year="2018-2021"
        role="Desktop Publishing Operator"
        description="• Design and prepress packs for one of the biggest multinational consumer goods companies 
• Design 3D packshots
• Warp assymetrical packs using specialized software
• Quality Assurance"
        />
        <Exp 
         year="2014-2018"
         role="Telecommunications Technician"
         description="• Maintainance of end-user connection and equipment • Maintainance of end-user connection and equipment • Maintainance of end-user connection and equipment" 
        />
      </div>
    )
  }

export default Experience;