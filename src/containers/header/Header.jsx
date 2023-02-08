import React from 'react';
import './header.css';
import vector from '../../assets/vector.png'

function Header() {

    return (
      <div className='pf__header section__padding' id='home'>
        <div className='pf__header-content'>
          <div className='pf__header-content_text'>
            <h1 className='pf__header-content_text-fname'>KRISTIAN</h1>
            <h1 className='pf__header-content_text-lname'>GOGOV</h1>
            <h1 className='blink'>_</h1>
          </div>
          <div className='pf__header-content_text-pg'>
            <p>full-stack developer</p>
          </div>
        </div>
        <div className='pf__header-content_img'>
            <img src={vector} alt='vector' />
          </div>
      </div>
    )
  }

export default Header;