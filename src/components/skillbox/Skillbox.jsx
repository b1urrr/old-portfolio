import React from 'react';
import './skillbox.css';

function Skillbox( { imgurl, name } ) {

    return (
      <div className='pf__skillbox'>
        <div className='pf__skillbox-img'>
          <img src={imgurl} alt="skill" />
        </div>
        <div className='pf__skillbox-name'>
          <h1>{name}</h1>
        </div>
      </div>
    )
  }

export default Skillbox;