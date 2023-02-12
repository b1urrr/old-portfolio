import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png'
import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs';

const year = new Date().getFullYear()

function Footer() {

    return (
      <div className='pf__footer section__padding'>
        <div className='pf__footer-content'>
          <div className='pf__footer-content_logo'>
          <img src={logo} alt="logo"/>
          </div>
          <div className='pf__footer-content_socials'>
            <a href='https://github.com/b1urrr' target='_blank'><BsGithub color='#fff' size={27} /></a>
            <a href='https://www.linkedin.com/in/kristiangogov' target='_blank'><BsLinkedin color='#fff' size={27} /></a>
            <a href='https://www.facebook.com/strangertostability' target='_blank'><BsFacebook color='#fff' size={27} /></a>
          </div>
          <div className='pf__footer-copyright'>
           <p>©{year} Kristian 'b1ur' Gogov</p>
          </div>
        </div>

      </div>
    )
  }

export default Footer;