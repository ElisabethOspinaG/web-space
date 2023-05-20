import React from 'react'
import { NavLink } from 'react-router-dom'
import './styleNavBar.scss';
import logo from '../../assets/img/logo.png';

const NavBar =() =>{
  return (
    <>
      <div className='nav'>
        <div className='nav__navBar__logo'>
          <figure className='nav__navBar__figureLogo'>
            <img src={logo} alt="logo-principal" />
          </figure>
        </div>
        <div className='nav__line'></div>
        <div className='nav__navBar'>
          <div className='nav__container'>
          <ul className='nav__ul'>
            <li> 
              <span>00</span>
              <NavLink className={"nav__link"} to="/">HOME</NavLink>
              <div className="line"></div>
            </li>
            <li> 
              <span>01</span>
              <NavLink className={"nav__link"} to="destination">DESTINATION</NavLink>
              <div className="line"></div>
            </li>
            <li> 
              <span>02</span>
              <NavLink className={"nav__link"} to="crew">CREW</NavLink>
              <div className="line"></div>
            </li>
            <li> 
              <span>03</span>
              <NavLink className={"nav__link"} to="tecnology">TECNOLOGY</NavLink>
              <div className="line"></div>
            </li>
          </ul>

          </div>
          
        </div>
      </div>
    </>
  )
}

export default NavBar