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
        company="DSN Artwork Prepress"
        description="As a Lead DTP my responsibilities expanded to managing a team of 5 to 10 DTP operators,
        aligning processes and workload with other team leaders and supervisors, analyzing and solving complex problems,
        ensuring top quality end product is delivered and onboarding new hires." /> 
        <Exp
        year="2018-2021"
        role="Desktop Publishing Operator (DTP)"
        company="DSN Artwork Prepress"
        description="I was responsible for designing, prepressing and assuring the quality of packages for
        one of the biggest consumer goods companies - Unilever. I also warped sleeve type packages and briefly
        created 3D packshots of the products."
        />
        <Exp 
         year="2014-2018"
         role="Telecommunications Technician"
         company="A1 Bulgaria (formerly blizoo)"
         description="Maintainance of end-user connection and equipment. I was mainly responsible for the Coaxial network, 
         but have some experience with Fiber to the Home and Fiber to the Building technologies." 
        />
      </div>
    )
  }

export default Experience;