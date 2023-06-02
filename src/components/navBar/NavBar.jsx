import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styleNavBar.scss';
import logo from '../../assets/img/logo.png';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {

  const [MenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    console.log("soy click")
    setMenuOpen(!MenuOpen);
  };

  const links = [
    {
      name: "HOME",
      url: "/",
      id: "00"
    },
    {
      name: "DESTINATION",
      url: "destination",
      id: "01"
    },
    {
      name: "CREW",
      url: "crew",
      id: "02"
    },
    {
      name: "TECNOLOGY",
      url: "tecnology",
      id: "03"
    }
  ]


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
              {links.map((item, index) => (
                <li >
                  <span>{item.id}</span>
                  <NavLink className={"nav__link"} to={item.url} key={`${item.name}-${index}`}>  {item.name} </NavLink>
                  <div className="line"></div>

                </li>
              ))}
            </ul>
            {/* <ul className='nav__ul'>
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
            </ul> */}


          </div>

        </div>
        <div className="menu__button" onClick={() => handleMenuClick()}>
          {/* <img src="" alt="hola" /> */}
          <FontAwesomeIcon icon={faBars} className='btn__open' />
            
        </div>

      </div>

      {MenuOpen && (
        <div>
            <div className="menuBurgerClass" onClick={() => handleMenuClick()}>
              {/* <img src="" alt="x" /> */}
            <div className='button__close' >
              <FontAwesomeIcon icon={faTimes} className='button__close' />

            </div>
          <ul className='nav__ul'>
              {links.map((item, index) => (
                <li >
                  <span>{item.id}</span>
                  <NavLink className={"nav__link"} to={item.url} key={`${item.name}-${index}`}>  {item.name} </NavLink>
                  <div className="line"></div>

                </li>
              ))}
            </ul>
        </div>
        </div>
      )}
    </>
  )
}

export default NavBar