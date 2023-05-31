import React from 'react'
import { NavLink } from 'react-router-dom';

const NavDestination = () => {
  return (
    <>
      <div className='nav__Destination'>
        <ul className='nav__ul'>
          <li>
            <NavLink className={"nav__link"} to="moon">MOON</NavLink>
            <div className="line"></div>
          </li>
          <li>
            <NavLink className={"nav__link"} to="mars">MARS</NavLink>
            <div className="line"></div>
          </li>
          <li>
            <NavLink className={"nav__link"} to="europa">EUROPA</NavLink>
            <div className="line"></div>
          </li>
          <li>
            <NavLink className={"nav__link"} to="titan">TITAN</NavLink>
            <div className="line"></div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavDestination;