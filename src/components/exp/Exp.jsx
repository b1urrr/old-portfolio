import React, { useState } from 'react';
import './exp.css';

function Exp( {year, role, company, description} ) {

    return (
        <div className='pf__exp-content'>
          <div className='pf__exp-content_year'><p>{year}</p></div>
          <div className='pf__exp-content_style'>
            <div className='pf__exp-content_glow'></div>
            <div className='pf__exp-content_line'></div>

          </div>
          <div className='pf__exp-content_text'>
          <h2>{role}</h2>
          <h3>{company}</h3>
          <p>{description}</p>
          </div>

        </div>
    )
  }

export default Exp;

