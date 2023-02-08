import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#skills'>Skills</a></p>
    <p><a href='#projects'>Projects</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#Contact'>Contact</a></p>
  </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
      <div className='pf__navbar'>
        <div className='pf__navbar-links'>
          <div className='pf__navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='pf__navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className='pf__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='pf__navbar-menu_container scale-up-center'>
              <div className='pf__navbar-menu_container-links'>
              <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

export default Navbar;